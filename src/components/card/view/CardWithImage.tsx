import { Stack } from "@mui/material";
import FillCoverImage from "@/components/image/FillCoverImage";
import { SxProps } from "@mui/system";
import { ReactNode } from "react";

interface CardWithImageProps {
  content: ReactNode;
  imgSrc: string;
  imgAlt: string;
  cardSx?: SxProps;
}

export default function CardWithImage({
  content,
  imgSrc,
  imgAlt,
  cardSx,
}: CardWithImageProps) {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      spacing={2}
      sx={{
        height: 450,
        backgroundColor: "#F3F3F3",
        borderRadius: 3,
        overflow: "hidden",
        ...cardSx,
      }}
    >
      {content}
      <FillCoverImage
        src={imgSrc}
        alt={imgAlt}
        sx={{ width: "100%", height: 150 }}
      />
    </Stack>
  );
}
