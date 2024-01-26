export interface Project {
  title: string;
  thumbnail: string;
  techStack: string[];
  description: string;
  links: {
    detail?: string;
    github?: string;
    posting?: string;
    demo?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    title: "돌돌밋",
    thumbnail: "/assets/project/thumbnail/doldolmeet.png",
    techStack: ["Next.js", "TypeScript", "React Query", "Jotai"],
    description:
      "비대면 팬미팅, 즉 영통 팬싸를 쉽고 편하게 즐길 수 있도록 영상통화 및 대기열 관리 기능을 구현한 사이트입니다.",
    links: {
      detail: "/",
      github: "https://github.com/YoungeuiHong/doldolmeet_frontend",
      posting:
        "https://velog.io/@youngeui_hong/series/%EB%8F%8C%EC%95%84%EA%B0%80%EB%A9%B0-%EB%A7%8C%EB%82%98%EB%8A%94-%EB%82%98%EC%9D%98-%EC%95%84%EC%9D%B4%EB%8F%8C-%EB%8F%8C%EB%8F%8C%EB%B0%8B",
      demo: "https://www.doldolmeet.store",
    },
  },
  {
    title: "포트폴리오 사이트",
    thumbnail: "/assets/project/thumbnail/portfolio.png",
    techStack: ["Next.js", "TypeScript", "Material UI"],
    description: "개인 포트폴리오 사이트입니다.",
    links: {
      detail: "/",
      github: "https://github.com/YoungeuiHong/portfolio",
      demo: "https://www.about-youngeui.net",
    },
  },
  {
    title: "엑셀 Export / Import 모듈",
    thumbnail: "/assets/project/thumbnail/excel.png",
    techStack: ["React", "Java", "Apache POI"],
    description:
      "엑셀 Export / Import 기능을 쉽게 구현할 수 있도록 개발한 모듈입니다.",
    links: {
      detail: "/",
      github: "https://github.com/YoungeuiHong/excel-util",
    },
  },
];
