# 1. 개요
> 💡 인테리어 용품을 구매하고 관련 정보를 공유할 수 있는 온라인 상점 및 커뮤니티 플랫폼입니다.

* __`who`__ : 8명 (한국소프트웨어인재개발원 79기)
* __`when`__ : 2021.06.27 - 2021.08.24 (9주)

### 👀 무엇을 배웠나요?
* Spring, HTML, jQuery, MyBatis, Oracle을 사용하여 웹 사이트를 구축하는 방법
* BeautifulSoup과 Selenium을 사용하여 웹 페이지의 데이터를 스크래핑하는 방법
* Pandas, NumPy, Matplotlib을 사용하여 데이터를 분석하고 시각화하는 방법

### 🙋🏻‍♀️ 내가 맡은 역할
* 메인 화면, 집들이 게시판 백엔드 / 프론트엔드 개발
* AOP를 사용한 사용자 데이터 수집
* 데이터 스크래핑 및 정제
* 데이터 분석 및 시각화

# 2. 내가 맡은 역할

### 1️⃣ 메인 페이지 백엔드 / 프론트엔드 개발
![메인페이지](/assets/markdown/embed/homes/main.gif)
### 2️⃣ 집들이 게시판 백엔드 / 프론트엔드 개발
![집들이게시판](/assets/markdown/embed/homes/welcome1.gif)
![집들이게시판](/assets/markdown/embed/homes/welcome2.gif)
![집들이게시판](/assets/markdown/embed/homes/welcome3.png)
### 3️⃣ 결제 페이지 백엔드 / 프론트엔드 개발
![결제페이지](/assets/markdown/embed/homes/payment.png)
### 4️⃣ AOP를 사용한 사용자 데이터 수집
* Spring의 AOP 기능을 사용하여 검색, 상품 조회 데이터를 수집함
```java
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Before;

@Before("execution(* kr.co.kosmo.mvc.controller.*.getSrchList(..))")
public void searchLog(JoinPoint jp) {
    SearchLogVO vo = new SearchLogVO();
    Object[] fd = jp.getArgs();

    if (fd[0] instanceof String) {
        vo.setSlog_word((String) fd[0]);
    }

    if (fd[1] instanceof HttpSession) {
        HttpSession session = (HttpSession) fd[1];
        if (session.getAttribute("sessionID") == null) {
            vo.setSlog_idn("non-member");
        } else {
            vo.setSlog_idn(session.getAttribute("sessionID").toString());
        ｝
    }

    if (fd[2] instanceof HttpServletRequest) {
        HttpServletRequest request = (HttpServletRequest) fd[2];
        vo.setSlog_reip(request.getRemoteAddr());
        vo.setSlog_agent(request.getHeader("User-Agent"));
    }
    logServiceInter.insertSearchLog(vo);
｝
```

### 5️⃣ BeautifulSoup과 Selenium을 사용한 데이터 스크래핑 및 정제
* 오늘의 집의 상품, 집들이 게시판 글, 질문과 답변, 리뷰 데이터를 수집하여 데이터 분석 및 웹 사이트의 더미 데이터로 활용함

![데이터_스크래핑](/assets/markdown/embed/homes/scraping.png)

### 6️⃣ 데이터 분석 및 시각화
* AOP를 통해 수집된 데이터와 오늘의 집에서 스크래핑한 데이터를 Pandas, NumPy, Matplotlib을 사용하여 분석하고 시각화함

![데이터_시각화](/assets/markdown/embed/homes/graph1.png)
![데이터_시각화](/assets/markdown/embed/homes/graph2.png)
![데이터_시각화](/assets/markdown/embed/homes/graph3.png)
![데이터_시각화](/assets/markdown/embed/homes/graph4.png)
