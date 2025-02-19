"use client";
import { Stack, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

interface Props {
  isMobile: boolean;
}

export default function AboutMe({ isMobile }: Props) {
  return (
    <Stack
      component={"div"}
      direction={"column"}
      sx={{ width: "90vw" }}
      alignItems="center"
      // sx={{ width: isMobile ? "90vw" : 400 }}
      // alignItems={isMobile ? "center" : "flex-start"}
    >
      <Typography sx={{ fontSize: "2em" }}>안녕하세요! 👋🏻</Typography>
      <div style={{ display: "flex" }}>
        <TypeAnimation
          sequence={["늘 성실한 자세를", 1500, "끊임없는 성장을", 1500]}
          preRenderFirstString={true}
          wrapper={"span"}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", width: "7em" }}
        />
        <span style={{ fontSize: "2em" }}>추구하는</span>
      </div>
      <Typography sx={{ fontSize: "2em" }}>
        개발자 <strong>홍영의</strong>입니다.
      </Typography>
    </Stack>
  );
}
