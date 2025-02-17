import Image from "next/image";
import { Stack, Typography } from "@mui/material";

interface CareerTitleProps {
  logoSrc: string;
  companyName: string;
  duration: string;
}

export default function CareerTitle({
  logoSrc,
  companyName,
  duration,
}: CareerTitleProps) {
  return (
    <Stack
      direction={{ xs: "row", sm: "column" }}
      spacing={3}
      alignItems={{ xs: "center", sm: "flex-start" }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          objectFit: "contain",
          width: "100px",
          aspectRatio: "1 / 1",
          borderRadius: 10,
          boxShadow: "4px 12px 40px 6px rgba(0,0,0,.09)",
        }}
      >
        <Image src={logoSrc} alt={companyName} fill={true} />
      </div>
      <Stack direction={"column"}>
        <Typography sx={{ fontWeight: 700, fontSize: 30 }}>
          {companyName}
        </Typography>
        <Typography variant={"body1"}>{duration}</Typography>
      </Stack>
    </Stack>
  );
}
