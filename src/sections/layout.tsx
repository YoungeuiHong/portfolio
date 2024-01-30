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
        }}
        spacing={2}
      >
        <div style={{ textAlign: "center" }}>
          <Typography
            id={id}
            variant={"h4"}
            sx={{ fontWeight: 700, paddingTop: 10 }}
          >
            {title}
          </Typography>
        </div>
        {children}
      </Stack>
    </FadeInContainer>
  );
}
