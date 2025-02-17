export interface Activity {
  chip: string;
  date: string;
  title: string;
  content: string;
  thumbnail: string;
  organizer?: string;
  href?: string;
}

export const ACTIVITIES: Activity[] = [
  {
    chip: "부트캠프",
    date: "2023.08 - 2023.12 (5개월)",
    title: "SW사관학교 정글",
    content:
      "RB Tree, malloc, Web Proxy, PintOS 등을 직접 구현해보면서 자료구조, 네트워크, 운영체제에 대해 공부했습니다. 카이스트에서 5개월 간 합숙하며 밀도 있게 학습했습니다.",
    thumbnail: "/assets/image/activity/jungle.png",
    organizer: "카이스트, 크래프톤, 팀스파르타",
    href: "https://velog.io/@youngeui_hong/series/SW%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90-%EC%A0%95%EA%B8%80-7%EA%B8%B0",
  },
  {
    chip: "스터디",
    date: "2021.10 - 현재",
    title: "프로그래밍 스터디",
    content:
      "회사 프로젝트에 사용되는 기술을 빠르게 익히고, 꾸준한 학습 습관을 가지기 위해 매주 퇴근 후 스터디에 참여했습니다. React, ES6, TypeScript, Spring, MongoDB 등을 주제로 학습했습니다.",
    thumbnail: "/assets/image/activity/study.png",
    href: "https://www.notion.so/youngeui-hong/df62bb9d20964764a8cb9f767547515b?pvs=4",
  },
  {
    chip: "국비교육",
    date: "2021.01 - 2021.08 (7개월)",
    title: "JAVA/Python 풀스택 전문가 양성과정",
    content:
      "국비교육과정을 통해 웹 개발에 입문했습니다. HTML, CSS, JavaScript, Java, Spring, RDBMS를 사용한 웹 개발을 익히고, Python을 사용한 데이터 수집 및 분석 방법을 학습했습니다.",
    organizer: "한국소프트웨어인재개발원",
    thumbnail: "/assets/image/activity/kosmo.jpg",
  },
];
