import { Typography } from "@mui/material";
import Link from "next/link";

interface TextLogoProps {
  logoText: string;
}
export default function TextLogo({ logoText }: TextLogoProps) {
  return (
    <Link href="/" style={{ textDecoration: "none", marginRight: "8px" }}>
      <Typography sx={{ color: "#000000", fontWeight: 800, fontSize: 18 }}>
        {logoText}
      </Typography>
    </Link>
  );
}
