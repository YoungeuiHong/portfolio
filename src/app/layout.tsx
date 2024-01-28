import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/sections/header";
import MuiThemeProvider from "@/theme";

export const metadata: Metadata = {
  title: "개발자 홍영의",
  description: "프론트엔드 개발자 홍영의입니다.",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <MuiThemeProvider>
          <Header />
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}
