## 📝 개요
> 💡 금액대가 큰 선물 마련을 위한 크라우드 펀딩 앱입니다.

* __`who`__ : 5명 (백엔드 3명, 프론트엔드 2명)
* __`when`__ : 2024.02.19 - 현재 (진행 중)

## 🛠 기술 스택
* **Frontend**: Next.js, TypeScript, MUI, Recoil, React Hook Form
* **CI/CD**: Docker, GitHub Actions, Google Cloud (Artifact Registry, Cloud Run)

## 👀 무엇을 배웠나요?

### 1️⃣ CI/CD 파이프라인 구축 및 최적화
* Docker를 이용해 컨테이너화하고, GitHub Actions, Google Cloud Run을 활용해 자동 배포 파이프라인을 구축함.
* Multi-stage builds를 적용하여 Docker 이미지 크기를 최적화함.
* `docker/setup-buildx-action@v3`을 활용하여 빌드 시간을 단축
    - `cache-from`, `cache-to`설정을 통해 Docker BuildKit 캐시를 가져와서 사용할 수 있도록 함
    - ⏳ 배포 시간: 약 4분 50초 → 2분 20초로 단축
* [🔗 관련 포스팅](https://velog.io/@youngeui_hong/Docker-GitHub-Actions-Google-Cloud로-Next.js-CICD-파이프라인-구축하기)

### 2️⃣ OAuth + JWT 기반 인증 및 인가 처리
* 프론트엔드에서 백엔드의 oauth 엔드포인트로 요청을 보내면 OAuth Provider의 로그인 페이지로 리다이렉트됨.
* 백엔드에서 JWT access token 및 refresh token을 반환하면 이를 쿠키에 저장.
* `middleware.ts`에서 access token을 검증하여 유효하지 않거나 없을 경우 로그인 페이지로 리다이렉트되도록 함.
* Axios Interceptor를 활용하여 JWT 토큰 갱신
    - `401 Unauthorized` 응답이 발생하면 refresh token을 사용해서 access token을 재발급

### 3️⃣ React Hook Form을 활용한 폼 입력값 관리
* 여러 페이지에 걸쳐 회원가입 정보를 수집하기 위해 React Hook Form을 사용.
* `register` API에 유효성 검사 옵션을 추가하여 폽 입력값을 검증하고, `errors` 객체를 통해 피드백을 제공함
* `useFormContext()`를 활용하여 다단계 입력 폼에서도 데이터가 유지될 수 있도록 처리함

### 4️⃣ React Query + Intersection Observer를 활용한 무한 스크롤 구현
* Intersection Observer API를 활용하여 새로운 데이터를 불러올 시점 감지
* 재사용성을 높이기 위해 `useIntersectionObserver` 훅을 제작함.
* `useInfiniteQuery`의 `fetchNextPage`를 `useIntersectionObserver`의 매개변수로 전달
* 스크롤이 하단에 도달하면 `useIntersectionObserver`에서 추가 데이터를 요청하도록 구현.
