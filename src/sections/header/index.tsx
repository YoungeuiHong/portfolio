"use client";
import { AppBar, Box, Theme, Toolbar, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import ScrollProgressBar from "@/components/scroll/ScrollProgressBar";
import TextLogo from "@/sections/header/view/TextLogo";
import MenuBar from "./view/MenuBar";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const pathname = usePathname();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (pathname === "/") {
      setShowHeader(currentScrollPos > 5);
    }
  };

  useEffect(() => {
    if (pathname !== "/") {
      setShowHeader(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showHeader && (
      <AppBar
        component="div"
        elevation={0}
        sx={{
          display: "block",
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <TextLogo logoText={"about-youngeui.site"} />
          <Box sx={{ flexGrow: 1 }}></Box>
          {mdUp && <MenuBar />}
        </Toolbar>
        <ScrollProgressBar />
      </AppBar>
    )
  );
}
