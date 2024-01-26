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
        sx={{
          marginTop: 0,
          width: "100%",
          textAlign: "center",
        }}
        spacing={2}
      >
        <Typography
          id={id}
          sx={{ fontWeight: 700, fontSize: "3rem", paddingTop: 10 }}
        >
          {title}
        </Typography>
        {children}
      </Stack>
    </FadeInContainer>
  );
}
