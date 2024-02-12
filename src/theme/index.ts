"use client";
import { createTheme } from "@mui/material";
import { typography } from "@/theme/Typography";
import { components } from "@/theme/overrides";
import { palette } from "@/theme/palette";

const theme = createTheme({
  typography,
  components,
  palette: { ...palette("light") },
});

export default theme;
