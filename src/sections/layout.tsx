import { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";
import FadeInContainer from "@/components/animation/fadein/FadeInContainer";

interface SectionLayoutProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function SectionLayout({
  id,
  title,
  children,
}: SectionLayoutProps) {
  return (
    <FadeInContainer>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          marginTop: 0,
          width: "100%",
          minHeight: "100vh",
          textAlign: "center",
        }}
        spacing={2}
      >
        <Typography
          id={id}
          sx={{ fontWeight: 900, fontSize: "3rem", paddingTop: 10 }}
        >
          {title}
        </Typography>
        {children}
      </Stack>
    </FadeInContainer>
  );
}
