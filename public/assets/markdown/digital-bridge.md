# 📌 개요
> 💡 온라인 예매를 어려워하는 노인들도 쉽게 이용할 수 있도록, 음성 인식을 활용해 대화형 인터페이스로 구현한 KTX 예매 서비스입니다.
* __대회__: 2024 항해커톤
* __기간__: 2024.05.31(금) ~ 2024.06.01(토)
* __주제__: 오픈소스 AI를 활용해 사회 문제를 해결하는 서비스 만들기
* __팀원__: 4명
* __역할__: 프론트엔드 및 백엔드 개발

# 🔎 기획 의도
* 오픈소스 AI를 활용해 디지털 소외 문제를 해결하고자 함.
* 온라인 예매가 익숙하지 않은 어르신들은 표를 구하지 못해 입석으로 서서 가시거나, 표가 나올 때까지 기차역에서 오랜 시간을 기다리시는 경우가 많음.
* 마치 창구 직원과 대화하듯 예매할 수 있도록, TTS 및 STT 기술을 활용해 **대화형 인터페이스 기반 KTX 예매 서비스**를 개발함.

![기획의도](/assets/markdown/embed/digital-bridge/background.webp)

# 💬 대화형 인터페이스 구축하기
## 🎙️ Speech to Text
* `react-speech-recognition` 라이브러리를 사용하여 음성을 텍스트로 변환함.

## 🔊 Text to Speech
* 초기에는 Web Speech API의 `SpeechSynthesisUtterance`를 사용했으나 음성이 부자연스러웠음.
* 보다 자연스러운 음성 변환을 위해 OpenAI의 Text to Speech API를 사용함.

## ⚙️ Function Calling
* 기차표를 조회하고 예매할 때 외부 함수를 호출할 수 있도록 Function Calling 기능을 활용.
* Chat GPT가 `tool_calls`에 반환한 함수 이름과 파라미터 정보를 바탕으로 함수를 호출하여 동작을 처리함.

## 🔨 Fine-Tuning
* 기본 모델을 사용할 경우 대화체가 일관되지 않고, Function Calling이 원활하게 이루어지지 않는 문제가 발생함.
* 이를 해결하기 위해 Fine-Tuning을 통해 KTX 예매에 최적화된 모델을 만들기로 함.
* 예상 대화 시나리오를 jsonl 포맷으로 정리하여 Fine-Tuning 학습 데이터로 활용.
* Fine-Tuning 이후 대화 흐름이 정리되고, Function Calling 오류가 줄어듦.

# 🚆 예매 및 결제 기능 구현

## 🎫 열차 조회 및 예매 기능
* carpedm20님의 Korail Python Wrapper를 사용하여 구현.

## 💳 결제 기능 구현
* Google Cloud Document AI로 신용카드 이미지를 학습시킴 
* 👉🏻 신용카드 뒷면을 촬영하면 OCR로 카드 번호가 인식되어 입력되도록 구현.
* Selenium WebDriver를 사용하여 자동 결제 매크로를 개발하여 결제 과정을 자동화함.

# 🎥 프로젝트 시연 영상
<div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/_IbHw-469A4?si=nSbuVhz1P5FW_vja" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

# 🛠️ 기술 스택
* __프론트엔드__: Next.js, TypeScript
* __백엔드__: FastAPI, Selenium WebDriver
* __AI__: Chat GPT, OpenAI Text to Speech, GCP Document AI
