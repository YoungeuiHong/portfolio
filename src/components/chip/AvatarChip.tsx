import { Avatar, Chip } from "@mui/material";

interface AvatarChipProps {
  src: string;
  alt: string;
  text: string;
}

export default function AvatarChip({ src, alt, text }: AvatarChipProps) {
  return (
    <Chip
      avatar={<Avatar alt={alt} src={src} />}
      label={text}
      variant="outlined"
      sx={{
        border: "0.1px solid",
        borderColor: (theme) => theme.palette.grey["400"],
        backgroundColor: "#FFFFFF",
      }}
    />
  );
}
