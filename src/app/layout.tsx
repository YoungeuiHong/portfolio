import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
  title: "개발자 홍영의",
  description: "프론트엔드 개발자 홍영의입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div>
          <CssBaseline />
          {children}
        </div>
      </body>
    </html>
  );
}
