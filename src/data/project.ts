import { TooltipLinkButtonInfo } from "@/types/Button";
import { NameValue } from "@/types/NameValue";

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  mainTechStack: string[];
  allTechStack: NameValue[];
  description: string;
  links: TooltipLinkButtonInfo[];
  detailTitle?: string;
  mdFilePath?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "6",
    title: "스누돌팅",
    thumbnail: "/assets/image/project/thumbnail/snu-dolting.webp",
    mainTechStack: ["Next.js", "Supabase", "React Query", "vanilla-extract"],
    allTechStack: [
      {
        name: "Next.js",
        value: "/assets/icon/nextjs.webp",
      },
      {
        name: "Supabase",
        value: "/assets/icon/supabase.webp",
      },
      {
        name: "FCM",
        value: "/assets/icon/firebase.webp",
      },
      {
        name: "React Query",
        value: "/assets/icon/react_query.webp",
      },
      {
        name: "vanilla-extract",
        value: "/assets/icon/vanilla-extract.webp",
      },
      {
        name: "GitHub Action",
        value: "/assets/icon/github.webp",
      },
    ],
    description: "서울대학교 동문 돌싱들을 위한 소개팅 앱입니다.",
    links: [
      {
        icon: "description",
        tooltip: "상세 설명",
        href: "/project/6",
        internal: true,
      },
      {
        icon: "github",
        tooltip: "GitHub",
        href: "https://github.com/YoungeuiHong/snu-dolting",
      },
      {
        icon: "public",
        tooltip: "데모 사이트",
        href: "https://www.snu-dolting-demo.store",
      },
    ],
    detailTitle: "스누돌팅",
    mdFilePath: "/assets/markdown/snu-dolting.md",
  },
  {
    id: "5",
    title: "기프투게더",
    thumbnail: "/assets/image/project/thumbnail/giftogether.webp",
    mainTechStack: ["Next.js", "TypeScript", "Material UI"],
    allTechStack: [
      {
        name: "Next.js",
        value: "/assets/icon/nextjs.webp",
      },
      {
        name: "TypeScript",
        value: "/assets/icon/typescript.webp",
      },
      {
        name: "Material UI",
        value: "/assets/icon/mui.webp",
      },
      {
        name: "Recoil",
        value: "/assets/icon/recoil.webp",
      },
      {
        name: "React Hook Form",
        value: "/assets/icon/react-hook-form.webp",
      },
      {
        name: "Docker",
        value: "/assets/icon/docker.webp",
      },
      {
        name: "GitHub Actions",
        value: "/assets/icon/github.webp",
      },
      {
        name: "GCP",
        value: "/assets/icon/gcp.webp",
      },
    ],
    description: "금액대가 큰 선물을 위한 크라우드 펀딩 앱입니다.",
    links: [
      {
        icon: "description",
        tooltip: "상세 설명",
        href: "/project/5",
        internal: true,
      },
      {
        icon: "github",
        tooltip: "GitHub",
        href: "https://github.com/coding-jjun/Giftogether_frontend",
      },
      {
        icon: "article",
        tooltip: "관련 포스팅",
        href: "https://velog.io/@youngeui_hong/series/Wish-Funding",
      },
    ],
    detailTitle: "기프투게더 (진행 중)",
    mdFilePath: "/assets/markdown/giftogether.md",
  },
  {
    id: "7",
    title: "디지털 브릿지",
    thumbnail: "/assets/image/project/thumbnail/digital-bridge.webp",
    mainTechStack: ["Next.js", "FastAPI", "OpenAI", "Selenium"],
    allTechStack: [
      {
        name: "Next.js",
        value: "/assets/icon/nextjs.webp",
      },
      {
        name: "FastAPI",
        value: "/assets/icon/fast-api.webp",
      },
      {
        name: "OpenAI",
        value: "/assets/icon/chat-gpt.webp",
      },
      {
        name: "Document AI",
        value: "/assets/icon/gcp.webp",
      },
      {
        name: "Selenium",
        value: "/assets/icon/selenium.webp",
      },
    ],
    description:
      "2024 항해커톤에서 개발한 디지털 약자를 위한 음성 인식 기반 KTX 예매 서비스입니다.",
    links: [
      {
        icon: "description",
        tooltip: "상세 설명",
        href: "/project/7",
        internal: true,
      },
      {
        icon: "github",
        tooltip: "GitHub",
        href: "https://github.com/2024-hanghackathon-team-div",
      },
    ],
    detailTitle: "디지털 브릿지",
    mdFilePath: "/assets/markdown/digital-bridge.md",
  },
  {
    id: "1",
    title: "돌돌밋",
    thumbnail: "/assets/image/project/thumbnail/doldolmeet.webp",
    mainTechStack: ["Next.js", "TypeScript", "React Query", "OpenVidu"],
    allTechStack: [
      {
        name: "Next.js",
        value: "/assets/icon/nextjs.webp",
      },
      {
        name: "TypeScript",
        value: "/assets/icon/typescript.webp",
      },
      {
        name: "React Query",
        value: "/assets/icon/react_query.webp",
      },
      {
        name: "Jotai",
        value: "/assets/icon/jotai.webp",
      },
      {
        name: "Material UI",
        value: "/assets/icon/mui.webp",
      },
      {
        name: "OpenVidu",
        value: "/assets/icon/openvidu.webp",
      },
      {
        name: "Spring",
        value: "/assets/icon/spring.webp",
      },
      {
        name: "MySql",
        value: "/assets/icon/mysql.webp",
      },
      {
        name: "AWS",
        value: "/assets/icon/aws.webp",
      },
    ],
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
        href: "https://www.doldolmeet.shop",
      },
    ],
    detailTitle: "돌아가며 만나는 나의 아이돌, 돌돌밋",
    mdFilePath: "/assets/markdown/doldolmeet.md",
  },
  {
    id: "2",
    title: "포트폴리오 사이트",
    thumbnail: "/assets/image/project/thumbnail/portfolio.webp",
    mainTechStack: ["Next.js", "TypeScript", "Material UI"],
    allTechStack: [
      {
        name: "Next.js",
        value: "/assets/icon/nextjs.webp",
      },
      {
        name: "TypeScript",
        value: "/assets/icon/typescript.webp",
      },
      {
        name: "Material UI",
        value: "/assets/icon/mui.webp",
      },
    ],
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
        href: "https://www.about-youngeui.com",
      },
    ],
    detailTitle: "포트폴리오",
    mdFilePath: "/assets/markdown/portfolio.md",
  },
  {
    id: "3",
    title: "엑셀 Export / Import 모듈",
    thumbnail: "/assets/image/project/thumbnail/excel.webp",
    mainTechStack: ["Java", "Apache POI", "React"],
    allTechStack: [
      {
        name: "Java",
        value: "/assets/icon/java.webp",
      },
      {
        name: "Apache POI",
        value: "/assets/icon/apache.webp",
      },
      {
        name: "React",
        value: "/assets/icon/react.webp",
      },
    ],
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
      {
        icon: "play_circle",
        tooltip: "데모",
        href: "https://youngeuihong.gitbook.io/excel-export-import-util/",
      },
    ],
    detailTitle: "엑셀 Export / Import 모듈",
    mdFilePath: "/assets/markdown/excel.md",
  },
  {
    id: "4",
    title: "꾸며줘! 홈즈",
    thumbnail: "/assets/image/project/thumbnail/homes.webp",
    mainTechStack: ["Spring", "HTML", "jQuery", "Python"],
    allTechStack: [
      {
        name: "Spring",
        value: "/assets/icon/spring.webp",
      },
      {
        name: "Bootstrap",
        value: "/assets/icon/bootstrap.webp",
      },
      {
        name: "jQuery",
        value: "/assets/icon/jquery.webp",
      },
      {
        name: "MyBatis",
        value: "/assets/icon/mybatis.webp",
      },
      {
        name: "Oracle",
        value: "/assets/icon/oracle.webp",
      },
      {
        name: "Beautiful Soup",
        value: "/assets/icon/python.webp",
      },
      {
        name: "Selenium",
        value: "/assets/icon/selenium.webp",
      },
      {
        name: "Pandas",
        value: "/assets/icon/pandas.webp",
      },
      {
        name: "Numpy",
        value: "/assets/icon/numpy.webp",
      },
      {
        name: "Matplotlib",
        value: "/assets/icon/matplotlib.webp",
      },
    ],
    description:
      "인테리어 용품을 구매하고 관련 정보를 공유할 수 있는 온라인 상점 및 커뮤니티 플랫폼입니다.",
    links: [
      {
        icon: "description",
        tooltip: "상세 설명",
        href: "/project/4",
        internal: true,
      },
      {
        icon: "play_circle",
        tooltip: "발표자료",
        href: "https://docs.google.com/presentation/d/1TnhlqGHAnw-OLZ4SMqtiggpxOwHqOIvG/edit?usp=drive_link&ouid=117851784509831081552&rtpof=true&sd=true",
      },
    ],
    detailTitle: "꾸며줘! 홈즈",
    mdFilePath: "/assets/markdown/homes.md",
  },
];
