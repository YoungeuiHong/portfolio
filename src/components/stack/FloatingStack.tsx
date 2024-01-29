import Stack from "@mui/material/Stack";
import { ResponsiveStyleValue } from "@mui/system";
import { ReactNode } from "react";

interface FloatingStackProps {
  top: number | string;
  right: number | string;
  children: ReactNode;
  direction?: ResponsiveStyleValue<
    "row" | "row-reverse" | "column" | "column-reverse"
  >;
  spacing?: number;
}

export default function FloatingStack({
  top,
  right,
  children,
  direction = "column",
  spacing = 2,
}: FloatingStackProps) {
  return (
    <Stack
      position={"fixed"}
      direction={direction}
      spacing={spacing}
      sx={{
        top,
        right,
        backgroundColor: (theme) => theme.palette.grey[200],
        borderRadius: 20,
        padding: 1,
      }}
    >
      {children}
    </Stack>
  );
}
