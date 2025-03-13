# 1. 개요
> 💡 서울대학교 동문 돌싱들을 위한 소개팅 앱입니다. 현재까지 10쌍 이상의 남녀가 이 앱을 통해 대화를 나누었습니다.
### ⚒️ 기술 스택
- __Frontend__: Next.js, TypeScript, React Query, vanilla-extract
- __Backend__: Supabase
- __Etc__: Vercel, Firebase Cloud Messaging, GitHub Actions, PWA

# 2. 사이트 링크
__[🚀 실제 서비스 사이트](https://www.snu-dolting.com)__

__[🔎 데모 사이트 (로그인 없이 살펴보실 수 있습니다.)](https://www.snu-dolting-demo.store)__

__[💻 GitHub 코드](https://github.com/YoungeuiHong/snu-dolting)__

# 3. 기술적 주안점
## 1️⃣ 서버 사이드 렌더링
- 돌싱 소개팅 사이트에서는 **개인정보 보호**가 최우선이라고 판단했습니다
- Next.js의 **Server Actions과 API Routes**를 활용하여 서버 측에서 데이터 처리를 수행하도록 했습니다. 
- 이를 통해 UUID 등 민감한 정보가 클라이언트에 노출되는 것을 방지할 수 있었습니다.

## 2️⃣ 채팅 알림 기능 구현 (PWA)
- 모바일 푸시 알림을 제공하면서도, 앱 스토어 등록 없이 빠르게 출시하기 위해 **PWA**(Progressive Web App)으로 구현했습니다.
- Supabase의 Realtime Table, Database Trigger, Edge Function, Firebase Cloud Messaging, Service Worker, Notification API를 사용해서 채팅 알림 시스템을 구축했습니다.

![아키텍처](/assets/markdown/embed/snu-dolting/message_architecture.webp)

## 3️⃣ 채팅방 사진과 개인정보 보호
* 개인정보 보호를 위해 채팅방에서 주고받은 사진은 **30초 동안만** 볼 수 있도록 제한했습니다. 
* Supabase의 **Signed URL** 기능을 사용해서 이미지 URL은 30초 후 만료되도록 설정했습니다.
* `setTimeout`을 사용해서 30초가 지나면 fallback 이미지가 보이도록 구현했습니다.
* GitHub Actions를 사용해 채팅방에 업로드된 사진을 10분 주기로 자동 삭제하도록 했습니다.

## 4️⃣ 데이터 페칭 최적화 (React Query)
- Supabase Table에 인덱스를 추가했음에도 기대만큼 데이터 조회 속도가 개선되지 않았습니다.
- 이를 해결하기 위해 React Query의 캐싱 기능을 활용하여 불필요한 API 호출을 최소화했습니다.
- 캐싱된 데이터를 즉시 보여주면서, 백그라운드에서 최신 데이터로 동기화하는 방식으로 UX를 개선했습니다.

## 5️⃣ 이미지 최적화
- Sharp를 활용한 이미지 압축 및 리사이징을 적용하여 스토리지 사용량을 약 90% 절감하고, 로딩 속도를 개선했습니다.

# 4. 주요 기능
## 1️⃣ 회원가입
![회원가입](/assets/markdown/embed/snu-dolting/signup.webp)

## 2️⃣ 사용자 목록 조회
![사용자 목록 조회](/assets/markdown/embed/snu-dolting/user_list.webp)

## 3️⃣ 프로필 조회
![프로필 조회](/assets/markdown/embed/snu-dolting/profile.webp)

## 4️⃣ 채팅
![채팅](/assets/markdown/embed/snu-dolting/chatting.webp)
