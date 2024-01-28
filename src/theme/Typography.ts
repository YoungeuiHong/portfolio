import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "./font/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const typography = {
  fontFamily: pretendard.style.fontFamily,
};
