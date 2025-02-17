export interface Certification {
  name: string;
  date: string;
  thumbnail: string;
}

export const CERTIFICATES: Certification[] = [
  {
    name: "정보처리기사",
    date: "2022.06",
    thumbnail: "/assets/icon/hrdk.webp",
  },
  {
    name: "우수 선임 엔지니어상",
    date: "2022.12",
    thumbnail: "/assets/icon/nextree.webp",
  },
  {
    name: "제71회 총동창회장상",
    date: "2017.08",
    thumbnail: "/assets/icon/snu.webp",
  },
];
