# 1. 개요
> 💡 영통 팬싸를 쉽고 편하게 즐길 수 있도록 영상통화 및 대기열 관리 기능을 구현한 사이트입니다.

* __`who`__ : 백엔드 3명, 프론트엔드 3명 (SW사관학교 7기)
* __`when`__ : 2023.11.08 - 2023.12.16 (5주)

### 🙋🏻‍♀️ 내가 맡은 역할
* FE 개발, BE 개발, UI/UX 디자인
* 대기열, 영상통화, 채팅, 모션 인식 캡쳐 기능 구현

### 👀 무엇을 배웠나요?
* Next.js를 사용한 서버 사이드 렌더링 구현
* WebRTC를 사용한 영상통화 기능 구현
* 웹 소켓과 SSE를 사용한 서버-클라이언트 통신 구현

# 2. 시연 영상
<div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/6jjJcgHJBaM?si=uVEB03HBzHf3PTcX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

# 3. 기획의도

### 😢 일일이 영상통화를 걸고 끊고... 영통 팬싸 진행의 번거로움
* 비대면 팬미팅을 진행함에 있어 여러 불편 요소가 존재함
* 소속사 직원이 팬들에게 일일이 영상통화를 걸고 끊어야 함
* 통화가 이루어지는 동안 옆에서 스탑워치로 통화 시간도 재고 있어야 함

### 😰 녹화 연습, 대본 준비, 하염없는 대기 시간... 팬들도 불편하긴 마찬가지
* 통화가 연결되자마자 녹화를 시작하는 연습도 해야 하고, 대본도 미리 준비해서 띄워놔야 함
* 현재 몇 번째 팬이 통화하고 있는지 알 수 없어 하염없이 대기해야 함
* 한국어를 못하는 외국인 팬들의 경우 대화가 어려운 문제가 있음

### 🤩 영통 팬싸, 쉽고 편하게 즐길 수 있도록 하자!
* 대기열 관리 시스템을 도입하여 일일이 통화시간을 재면서 전화를 걸고 끊을 필요가 없도록 하자
* 녹화 / 메모장 / 번역 기능 등을 도입하여 팬들이 좀더 편안하고 즐겁게 팬미팅을 즐길 수 있도록 하자

# 4. 아키텍처

![아키텍처](/assets/markdown/embed/doldolmeet/아키텍처.webp)

# 5. 기술적 챌린지

## 1️⃣ 대기열 기능 구현하기

### __`목표`__ 
* 현재 팬과의 팬미팅이 종료되면 다음 순서의 팬을 영상통화방으로 자동 입장시키기
* 정해진 팬미팅 시간이 지나면 자동으로 영상통화가 종료되고, 다음 아이돌 멤버와의 영상통화 대기실로 이동시키기

### __`문제 해결 과정`__
* 처음에는 팬이 입장하고 퇴장할 때마다 API를 호출해 대기열을 관리하려고 했으나, API를 빈번히 호출해야 하고 로직이 복잡해지는 문제가 있었음   
* 이를 개선하기 위해 OpenVidu의 Webhook과 Server-Sent Events(SSE)를 활용하여 대기열 관리 기능을 구현함
  * 서버에서 정해진 통화 시간이 종료되면 영상통화 연결을 끊음
  * 👉🏻 Webhook 엔드포인트 URL로 `participantLeft` 이벤트가 도착함
  * 👉🏻 현재 팬을 다음 아이돌의 대기열로 이동시키고, 다음으로 통화할 팬에게 `moveToIdolRoom` 이벤트를 보냄
  * 👉🏻 클라이언트에서 `moveToIdolRoom` Server-Sent Events를 받으면 영상통화를 연결함
* 클라이언트가 서버가 보낸 이벤트를 받지 못해서 다음 영상통화방으로 넘어가지 못하는 문제가 간헐적으로 발생함
  * 원인은 HTTP/1.1에서 최대로 맺을 수 있는 SSE 연결의 개수가 6개이기 때문이었음
  * HTTP/2로 버전을 변경하고, 페이지를 벗어날 때에는 `EventSource`를 닫아주도록 관리함

## 2️⃣ 모션 인식 캡쳐 기능 구현하기

### __`목표`__ 
* 아이돌과 팬이 정해진 포즈를 취하면 자동으로 사진을 촬영하기

### __`문제 해결 과정`__
* Teachable Machine으로 학습시킨 포즈 모델을 로드하고, 이 모델에 웹캠의 비디오 프레임을 가져와서 분석하는 함수 구현
* 위 함수를 `window.requestAnimationFrame()`으로 호출하여 포즈가 취해졌는지 여부를 주기적으로 파악함
* 아이돌과 팬이 모두 포즈를 취하면 `CanvasRenderingContext2D.drawImage()`로 웹캠 이미지를 캡쳐함
