import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/sections/header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";

export const metadata: Metadata = {
  title: "개발자 홍영의",
  description: "프론트엔드 개발자 홍영의입니다.",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={pretendard.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
