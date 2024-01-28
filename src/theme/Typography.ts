import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../../public/assets/font/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/font/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/font/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const typography = {
  fontFamily: pretendard.style.fontFamily,
};
