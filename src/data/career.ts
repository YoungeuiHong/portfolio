import { NameValue } from "@/types/NameValue";

export interface CareerInfo {
  companyName: string;
  companyLogo: string;
  duration: string;
  description: string;
  techStack: NameValue[];
  mdFilePath: string;
}

export const CAREERS: CareerInfo[] = [
  {
    companyName: "TmaxAI",
    companyLogo: "/assets/icon/tmaxcoreai.png",
    duration: "2024.05.16 - 현재",
    description:
      "OCR 기술을 적용한 서비스 개발 프로젝트에서 프론트엔드 개발과 CI/CD 환경 구축을 담당했습니다.",
    techStack: [
      {
        name: "React",
        value: "/assets/icon/react.png",
      },
      {
        name: "TypeScript",
        value: "/assets/icon/typescript.png",
      },
      {
        name: "Zustand",
        value: "/assets/icon/zustand.png",
      },
      {
        name: "Docker",
        value: "/assets/icon/docker.png",
      },
      {
        name: "GitLab CI/CD",
        value: "/assets/icon/gitlab.png",
      },
      {
        name: "Vite",
        value: "/assets/icon/vite.png",
      },
    ],
    mdFilePath: "/assets/markdown/tmaxai.md",
  },
  {
    companyName: "넥스트리",
    companyLogo: "/assets/icon/nextree.png",
    duration: "2021.09.13 - 2023.07.31",
    description:
      "MSA 기반 SI 업체에서 프론트엔드, 백엔드 개발에서부터 CI/CD, MSA 전환까지 다양한 업무를 수행했습니다. 높은 인사 평가 점수를 받아서 우수 선임 엔지니어상을 수상한 경험이 있습니다.",
    techStack: [
      {
        name: "React",
        value: "/assets/icon/react.png",
      },
      {
        name: "TypeScript",
        value: "/assets/icon/typescript.png",
      },
      {
        name: "Jotai",
        value: "/assets/icon/jotai.png",
      },

      {
        name: "React Query",
        value: "/assets/icon/react_query.png",
      },
      {
        name: "Material UI",
        value: "/assets/icon/mui.png",
      },
      {
        name: "Storybook",
        value: "/assets/icon/storybook.png",
      },
      {
        name: "Java",
        value: "/assets/icon/java.png",
      },
      {
        name: "Spring",
        value: "/assets/icon/spring.png",
      },
      {
        name: "MongoDB",
        value: "/assets/icon/mongodb.png",
      },
      {
        name: "AWS",
        value: "/assets/icon/aws.png",
      },
      {
        name: "Docker",
        value: "/assets/icon/docker.png",
      },
      {
        name: "Kafka",
        value: "/assets/icon/kafka.png",
      },
    ],
    mdFilePath: "/assets/markdown/nextree.md",
  },
];
