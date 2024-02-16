"use client";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import CustomMarkdown from "@/components/markdown/CustomMarkdown";
import { NameValue } from "@/types/NameValue";
import AvatarChipList from "@/components/chip/AvatarChipList";

interface CareerDescriptionProps {
  description: string;
  mdFilePath: string;
  techStack: NameValue[];
}

export default function CareerDescription({
  description,
  mdFilePath,
  techStack,
}: CareerDescriptionProps) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ml: smDown ? 0 : 3 }}>
      <Box
        sx={{
          width: "100%",
          p: 2,
          borderLeft: "4px solid",
          backgroundColor: (theme) => theme.palette.grey["200"],
          borderColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Typography>{description}</Typography>
        <AvatarChipList chips={techStack} />
      </Box>
      <Box sx={{ paddingLeft: 1 }}>
        <CustomMarkdown mdFilePath={mdFilePath} />
      </Box>
    </Box>
  );
}
