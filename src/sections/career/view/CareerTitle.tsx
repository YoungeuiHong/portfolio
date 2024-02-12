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
      <Image
        src={logoSrc}
        alt={companyName}
        width={100}
        height={100}
        style={{
          borderRadius: 10,
          boxShadow: "4px 12px 40px 6px rgba(0,0,0,.09)",
        }}
      />
      <Stack direction={"column"}>
        <Typography sx={{ fontWeight: 700, fontSize: 30 }}>
          {companyName}
        </Typography>
        <Typography variant={"body1"}>{duration}</Typography>
      </Stack>
    </Stack>
  );
}
