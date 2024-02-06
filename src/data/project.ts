import { TooltipLinkButtonInfo } from "@/types/Button";

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  techStack: string[];
  description: string;
  links: TooltipLinkButtonInfo[];
  detailTitle?: string;
  mdFilePath?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "돌돌밋",
    thumbnail: "/assets/image/project/thumbnail/doldolmeet.png",
    techStack: ["Next.js", "TypeScript", "React Query", "OpenVidu"],
    description:
      "비대면 팬미팅을 쉽고 편하게 즐길 수 있도록 영상통화 및 대기열 관리 기능을 구현한 사이트입니다.",
    links: [
      {
        icon: "description",
        tooltip: "상세 설명",
        href: "/project/1",
        internal: true,
      },
      {
        icon: "github",
        tooltip: "GitHub",
        href: "https://github.com/YoungeuiHong/doldolmeet_frontend",
      },
      {
        icon: "article",
        tooltip: "관련 포스팅",
        href: "https://velog.io/@youngeui_hong/series/%EB%8F%8C%EC%95%84%EA%B0%80%EB%A9%B0-%EB%A7%8C%EB%82%98%EB%8A%94-%EB%82%98%EC%9D%98-%EC%95%84%EC%9D%B4%EB%8F%8C-%EB%8F%8C%EB%8F%8C%EB%B0%8B",
      },
      {
        icon: "play_circle",
        tooltip: "데모",
        href: "https://www.doldolmeet.store",
      },
    ],
    detailTitle: "돌아가며 만나는 나의 아이돌, 돌돌밋",
    mdFilePath: "/assets/markdown/doldolmeet.md",
  },
  {
    id: "2",
    title: "포트폴리오 사이트",
    thumbnail: "/assets/image/project/thumbnail/portfolio.png",
    techStack: ["Next.js", "TypeScript", "Material UI"],
    description: "개인 포트폴리오 사이트입니다.",
    links: [
      {
        icon: "description",
        tooltip: "상세 설명",
        href: "/project/2",
        internal: true,
      },
      {
        icon: "github",
        tooltip: "GitHub",
        href: "https://github.com/YoungeuiHong/portfolio",
      },
      {
        icon: "play_circle",
        tooltip: "데모",
        href: "https://www.about-youngeui.site",
      },
    ],
    detailTitle: "포트폴리오",
    mdFilePath: "/assets/markdown/doldolmeet.md",
  },
  {
    id: "3",
    title: "엑셀 Export / Import 모듈",
    thumbnail: "/assets/image/project/thumbnail/excel.png",
    techStack: ["Java", "Apache POI", "React"],
    description:
      "엑셀 Export / Import 기능을 쉽게 구현할 수 있도록 개발한 모듈입니다.",
    links: [
      {
        icon: "description",
        tooltip: "상세 설명",
        href: "/project/3",
        internal: true,
      },
      {
        icon: "github",
        tooltip: "GitHub",
        href: "https://github.com/YoungeuiHong/excel-util",
      },
    ],
    detailTitle: "엑셀 Export / Import 모듈",
    mdFilePath: "/assets/markdown/excel.md",
  },
];
