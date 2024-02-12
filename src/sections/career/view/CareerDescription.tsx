"use client";
import { Box, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import CustomMarkdown from "@/components/markdown/CustomMarkdown";
import AvatarChip from "@/components/chip/AvatarChip";
import { NameValue } from "@/types/NameValue";

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
        <Stack
          direction={"row"}
          sx={{ mt: 2 }}
          spacing={0.5}
          useFlexGap
          flexWrap="wrap"
        >
          {techStack.length &&
            techStack.map((tech) => (
              <AvatarChip
                key={`tech-stack-chip-${tech.name}`}
                src={tech.value}
                alt={tech.name}
                text={tech.name}
              />
            ))}
        </Stack>
      </Box>
      <Box sx={{ paddingLeft: 1 }}>
        <CustomMarkdown mdFilePath={mdFilePath} />
      </Box>
    </Box>
  );
}
