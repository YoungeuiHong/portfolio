import { Typography } from "@mui/material";
import { ReactNode } from "react";
import Link from "next/link";

interface LinkWithIconProps {
  href: string;
  text: string;
  icon: ReactNode;
}

export default function LinkWithIcon({ href, text, icon }: LinkWithIconProps) {
  return (
    <Link
      href={href}
      target={"_blank"}
      style={{
        textDecoration: "none",
        marginLeft: "auto",
        marginTop: "auto",
        display: "flex",
      }}
    >
      <Typography
        variant={"body1"}
        sx={{
          fontWeight: 500,
          color: (theme) => theme.palette.text.primary,
        }}
      >
        {text}
      </Typography>
      {icon}
    </Link>
  );
}
