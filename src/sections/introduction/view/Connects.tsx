"use client";
import { useState } from "react";
import { Snackbar, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import TooltipIconButton from "@/components/button/TooltipIconButton";

export default function Connects() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("dev.yehong@gmail.com");
      setSnackbar({ open: true, message: "이메일이 복사되었습니다." });
    } catch (err) {}
  };

  return (
    <>
      <Stack direction={"row"}>
        <TooltipIconButton
          icon={<PublicIcon />}
          tooltip={"Blog"}
          onClick={() => window.open("https://velog.io/@youngeui_hong/posts")}
        />
        <TooltipIconButton
          icon={<GitHubIcon />}
          tooltip={"GitHub"}
          onClick={() =>
            window.open("https://github.com/YoungeuiHong?tab=repositories")
          }
        />
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </>
  );
}
