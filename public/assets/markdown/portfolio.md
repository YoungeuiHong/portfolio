# 1. 개요
> 💡 경력사항과 프로젝트를 한 눈에 확인할 수 있도록 구현한 포트폴리오 사이트입니다.

* __`who`__ : 개인 프로젝트
* __`when`__ : 2024.01.24 - 2024.02.14 (3주)

### 🛠 기술 스택
* **Frontend**: Next.js, TypeScript, MUI
* **DevOps**: Vercel

### 👀 무엇을 배웠나요?
* CSS Modules와 Styled Components를 사용하여 CSS를 정의하고 적용하는 방법
* 다양한 디바이스에서 사이트가 잘 보일 수 있도록 반응형 웹을 디자인하는 방법

# 2. 기술적 챌린지

## 1️⃣ 반응형 웹 구현하기

### __`문제`__
* media query를 사용하여 뷰포트의 크기에 따라 화면이 다르게 보일 수 있도록 구현함
* 하지만 서버 사이드 렌더링 컴포넌트의 경우 렌더링 시점에 뷰포트의 크기를 알 수 없어서 문제가 발생함
* 모바일에서 접속하면 PC용 화면이 잠시 보였다가 렌더링이 완료된 이후에 모바일용 화면이 보이는 문제가 있었음

### __`해결`__
* Next.js의 `middleware.ts`에서 `User-Agent` 정보를 분석하여 모바일 접속 여부를 렌더링이 이루어지기 전에 파악할 수 있도록 함
* 처음에는 쿠키에 디바이스 타입 정보를 셋팅하려고 했으나, 첫 번째 렌더링에서 쿠키 값을 가져오지 못하는 문제가 있었음
* 따라서 response의 헤더에 디바이스 타입 정보를 셋팅하는 방법으로 문제를 해결함
```typescript
export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  const response = NextResponse.next();
  response.headers.set("viewport", viewport);
  return response;
}
```
* `useViewport` 훅을 통해 접속한 디바이스 정보를 파악할 수 있도록 함
```typescript
import { headers } from "next/headers";

export const useViewport = () => {
  const viewport = headers().get("viewport");

  return {
    isMobile: viewport === "mobile",
    isDesktop: viewport === "desktop",
  };
};
```
