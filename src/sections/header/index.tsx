"use client";
import { AppBar, Box, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import ScrollProgressBar from "@/components/scroll/ScrollProgressBar";
import TextLogo from "@/sections/header/view/TextLogo";
import MenuBar from "./view/MenuBar";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setShowHeader(currentScrollPos > 5);
  };

  useEffect(() => {
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
          <TextLogo logoText={"about-youngeui.net"} />
          <Box sx={{ flexGrow: 1 }}></Box>
          <MenuBar />
        </Toolbar>
        <ScrollProgressBar />
      </AppBar>
    )
  );
}
