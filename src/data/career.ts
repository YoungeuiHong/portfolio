export interface CareerInfo {
  companyName: string;
  companyLogo: string;
  duration: string;
  description: string;
  mdFilePath: string;
}

export const CAREERS: CareerInfo[] = [
  {
    companyName: "넥스트리",
    companyLogo: "/assets/icon/nextree.png",
    duration: "2021.09.13 - 2023.07.31",
    description:
      "MSA 기반 SI 업체에서 프론트엔드, 백엔드 개발에서부터 CI/CD, MSA 전환까지 다양한 업무를 수행했습니다. 높은 인사 평가 점수를 받아서 우수 선임 엔지니어상을 수상한 경험이 있습니다.",
    mdFilePath: "/assets/markdown/nextree.md",
  },
];
