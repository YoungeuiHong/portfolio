"use client";
import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { typography } from "@/theme/Typography";
import { components } from "@/theme/overrides";
import CssBaseline from "@mui/material/CssBaseline";
import { palette } from "@/theme/palette";

export default function MuiThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const theme = createTheme({
    typography,
    components,
    palette: { ...palette("light") },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
