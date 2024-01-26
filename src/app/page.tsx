"use client";
import localFont from "next/font/local";
import Introduction from "@/sections/introduction";
import Career from "@/sections/career";
import Header from "@/sections/header";
import { createTheme, ThemeProvider } from "@mui/material";

const pretendard = localFont({
  src: [
    {
      path: "./font/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const getTheme = () => {
  return createTheme({
    typography: {
      fontFamily: pretendard.style.fontFamily,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Pretendard';
	      font-weight: 400;
	      font-display: swap;
	      src: local('Pretendard Regular'), url(./font/Pretendard-Regular.woff2) format('woff2'), url(./font/Pretendard-Regular.woff2) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
      },
    },
  });
};

export default function Home() {
  const theme = getTheme();
  return (
    <main className={pretendard.className}>
      <ThemeProvider theme={theme}>
        <Header />
        <Introduction />
        <Career />
      </ThemeProvider>
    </main>
  );
}
