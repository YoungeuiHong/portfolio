import Image from "next/image";
import { Box, Theme } from "@mui/material";
import { SxProps } from "@mui/system";

interface FillCoverImageProps {
  src: string;
  alt: string;
  sx?: SxProps<Theme>;
}

export default function FillCoverImage({ src, alt, sx }: FillCoverImageProps) {
  return (
    <Box
      sx={{
        position: "relative",
        ...sx,
      }}
    >
      <Image src={src} alt={alt} fill={true} style={{ objectFit: "cover" }} />
    </Box>
  );
}
