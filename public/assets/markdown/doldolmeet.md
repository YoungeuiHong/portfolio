# 👋 들어가며

최근 돌아가며 만나는 나의 아이돌, 돌돌밋 프로젝트를 리팩토링하는 작업을 하고 있다.

프로젝트 마감이 임박해서 "일단 돌아가면 넘어가!"하며 외면했던 코드들을 다듬고 있다.

제일 처음 한 작업은 CSR 페이지를 SSR 페이지로 전환하는 것이다.

NextJS를 사용하면서 그 장점을 온전히 살리지 못한 것 같아 마음에 걸렸었기 때문이다.

CSR을 SSR로 전환하면서 둘 간의 차이에 대해 자세히 살펴보고 싶은 마음도 있었다.

# 🔁 React Query와 SSR

## 🥊 CSR vs. SSR

CSR을 사용하는 경우 서버로부터 빈 HTML과 JavaScript 파일을 넘겨 받은 다음에 Query가 실행된다.

```
1. |-> Markup (without content)
2.   |-> JS
3.     |-> Query
```

반면 SSR의 경우 서버에서 내용을 채워서 HTML을 보내줘야 하므로, Query는 Markup을 전달하기 전에 실행된다.

```
1. |-> Markup (with content AND initial data)
2.   |-> JS
```

## ✌🏻 React Query에 SSR을 적용하는 두 가지 방법

SSR 페이지에서 React Query를 사용하는 방법은 `initialData`를 사용하는 방법과 Hydration API를 사용하는 방법으로 크게 두 가지가 있다.

### 1) `initialData`

첫 번째는 `getServerSideProps` 함수로부터 넘어온 props를 `useQuery`의 `initialData`로 넘겨주는 방법인데, 이는 아래와 같은 한계점이 있다.

* 많은 컴포넌트를 타고 내려가야 하는 컴포넌트에서 `useQuery`를 사용하는 경우 prop drilling의 문제가 있다.
* 같은 query를 여러 곳에서 호출하는 경우 모든 query들에게 `initialData`를 넘겨줘야 하는 번거로움이 있다.
* 데이터가 조회된 시점에 대한 정보 (`dataUpdatedAt`)를 알 수 없다.
* 만약 캐시된 데이터가 있는 경우 `initialData`가 이 데이터를 덮어쓸 수 없다. (`initialData`가 더 최신의 데이터인 경우에도)

### 2) Hydration APIs

`initialData`를 사용하는 경우 위와 같은 한계점이 있기 때문에 나는 Hydration API를 사용하여 React Query에 SSR을 적용했다. 구체적인 내용은 코드로 살펴보자.

**🔻 `_app.tsx`**

먼저 `_app.tsx`에서 컴포넌트 트리를 `HydrationBoundary`로 감싸주고, `pageProps` 중 `dehydratedState`를 넘겨주도록 했다.

그리고 `QueryClient`를 생성할 때, 페이지가 렌더링되자마자 query가 다시 실행되는 상황을 방지하기 위해 `staleTime`을 1분으로 변경해주었다.

```typescript
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
```
**🔻 `getServerSideProps`**

`getServerSideProps`에서는 `QueryClient`를 생성한 다음 `prefetchQuery`를 실행했다.

그리고 `dehydrate`한 `QueryClient`를 `dehydratedState`라는 이름의 props로 리턴하였다.

```typescript
export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["fanMeetings", "opened"],
    queryFn: ({ queryKey }) => fetchFanMeetings(queryKey[1]),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
```

## 🧐 `dehydrate`이란?

앞서 props로 리턴할 때 QueryClient를 `dehydrate`한다고 했는데, `dehydrate`란 무엇일까?

우선 `hydration`이란 정적인 HTML을 인터랙티브한 페이지로 만들기 위해 DOM에 event listener를 붙이는 과정을 의미한다.

`dehydrate`은 `hydration`의 반대의 개념인데, React Query에서는 쿼리 결과를 서버에서 클라이언트로 전송할 수 있도록 쿼리 캐시를 직렬화하는 과정을 의미한다.

그래서 서버 사이드 렌더링 페이지에서 처음 반환 받는 HTML 파일을 살펴보면 아래와 같이 `dehydratedState`에 `mutations`와 `queries` 정보가 들어가 있는 것을 확인 할 수 있다.

![](https://velog.velcdn.com/images/youngeui_hong/post/833fb6fa-8178-4654-8fad-7e5bd5eb6de5/image.png)


## 💫 `HydrationBoundary`란?

`HydrationBoundary` 내부 코드를 보면 `dehydratedState`로부터 `queries` 배열을 가지고 온 다음, `QueryClient`에 저장된 쿼리 캐시와 비교하는 부분이 있다.

여기에서 쿼리의 `dataUpdatedAt` 내용을 비교해서 `dehydratedState`가 좀 더 최근에 조회된 경우 캐시 내용을 변경한다.

앞서 `initialData`를 사용하는 방법은 데이터 조회 시점을 알 수 없다는 한계가 있다고 했는데, `HydrationBoundary`가 있기 때문에 최신의 데이터를 유지할 수 있는 것이다.

# 👀 SSR로 변경하고 무엇이 달라졌나?

CSR 방식에서 SSR 방식으로 변경한 다음 어떻게 달라졌는지 살펴보기 위해 Lighthouse 분석 결과를 비교해보았다.

**🔻 리팩토링 전 Lighthouse 분석 결과 (CSR)**

![](https://velog.velcdn.com/images/youngeui_hong/post/95727537-355d-4599-b17d-1376d28f7e80/image.png)

그런데 처음 SSR로 변경한 다음 Lighthouse 분석 결과가 갑자기 낮아졌었다.

원인은 SSR로 변경한 것에 있지는 않았고, `app` 디렉토리에 있던 파일을 `pages` 디렉토리에 옮기면서 변경된 사항들이 점수가 낮아지게 만든 것이었다.

`app` 디렉토리와 달리 `pages` 디렉토리에서는 HTML의 메타 데이터를 `_document.tsx`에 넣어줘야 했다. `_document.tsx`를 생성하고 HTML의 `lang`과 `meta` 태그를 추가함으로써 SEO 점수를 높일 수 있었다.

**🔻 CSR**

![](https://velog.velcdn.com/images/youngeui_hong/post/196385a9-f588-41e1-b67b-d7661ec4fb86/image.png)

**🔻 SSR**

![](https://velog.velcdn.com/images/youngeui_hong/post/ae7a0294-6838-4393-9e57-4b76b23d75da/image.png)

위의 그림처럼 페이지가 렌더링되는 과정을 보니 확실히 CSR과 SSR의 차이를 확인할 수 있었다.

SSR은 초반에 흰 상태의 화면이 보이는 것과 달리, CSR은 비록 완성되지 않았지만 보이는 내용들이 있어 TTFB(Time-to-First-Byte)가 훨씬 빠름을 확인할 수 있었다.

한편 SSR의 경우 완성된 상태의 HTML을 보내주기 때문에 레이아웃이 변경되는 정도를 측정하는 Cumulative Layout Shift가 CSR에 비해 낮았다.

처음 DOM 컨텐츠를 보기까지 걸리는 시간인 FCP(First Contentful Paint)는 일반적으로 SSR이 더 짧다고 봤었는데, 돌돌밋 메인 페이지의 경우 똑같이 0.2s로 나와서 큰 차이가 없었다.

**🔻 리팩토링 후 Lighthouse 분석 결과 (SSR)**

![](https://velog.velcdn.com/images/youngeui_hong/post/68eee73f-a028-47d6-83be-a44c06397eeb/image.png)

# 🖼 LCP 시간 줄이기

이번 메인 페이지 리팩토링에서 CSR을 SSR로 변경하는 것은 성능 개선에 있어 큰 영향이 없었다.

대신 LCP(Largest Contentful Paint)를 줄인 것이 성능 개선에 미치는 영향이 컸다.

처음에 LCP가 1.6초로 나왔었는데, 상단의 배너에 들어가는 이미지를 로딩하는데 시간이 많이 걸리고 있었다.

결론을 먼저 말하자면 배너 이미지를 lazy loading하지 않도록 함으로써 LCP 시간을 줄일 수 있었다.

배너에는 이미지 최적화를 위해 `next/image`의 `Image` 컴포넌트를 사용하고 있는데, NextJS의 공식 문서를 보면 LCP가 높은 이미지는 `priority`를 `true`로 설정해서 우선순위를 높임으로써 LCP를 개선할 수 있다고 되어 있다.

실제로 `priority`를 설정하니 LCP가 1.6초에서 1.0초로 개선됨을 확인할 수 있었다.

그런데 `Image` 컴포넌트는 기본적으로 lazy loading이 적용되는데, 배너는 화면 최상단에 위치한 것이므로 굳이 lazy loading을 적용할 필요가 없겠다는 생각이 들었다.

그래서 `loading` 프로퍼티 값을 `eager`로 수정한 결과 LCP가 0.3초로 확연히 개선됨을 확인할 수 있었다.
