import { Menu } from "@/data/menu";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function MenuItem({ id, title }: Menu) {
  return (
    <Link href={`/#${id}`} style={{ textDecoration: "none" }}>
      <Typography
        sx={{
          fontSize: 16,
          color: "#000000",
          fontWeight: 800,
          mx: 2,
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}
