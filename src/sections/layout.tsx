import { ReactNode } from "react";
import { Stack, Theme, Typography } from "@mui/material";
import FadeInContainer from "@/components/animation/fadein/FadeInContainer";
import { SxProps } from "@mui/system";

interface SectionLayoutProps {
  id: string;
  title: string;
  children: ReactNode;
  stackSx?: SxProps<Theme>;
}

export default function SectionLayout({
  id,
  title,
  children,
  stackSx,
}: SectionLayoutProps) {
  return (
    <FadeInContainer id={id}>
      <Stack
        alignItems={"center"}
        sx={{
          px: 1,
          py: 10,
          width: "100%",
          ...stackSx,
        }}
        spacing={2}
      >
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <Typography variant={"h4"} sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
        </div>
        {children}
      </Stack>
    </FadeInContainer>
  );
}
