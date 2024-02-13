import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface LinkWithIconProps {
  href: string;
  text: string;
  icon: ReactNode;
}

export default function LinkWithIcon({ href, text, icon }: LinkWithIconProps) {
  return (
    <Box
      sx={{
        marginLeft: "auto",
        marginTop: "auto",
        display: "flex",
        justifyContent: "flex-end",
        px: 1,
        "&:hover": { cursor: "pointer" },
      }}
      onClick={() => window.open(href)}
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
    </Box>
  );
}
