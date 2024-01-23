import { Stack, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export default function AboutMe() {
  return (
    <Stack component={"div"} direction={"column"} sx={{ width: 400 }}>
      <Typography sx={{ fontSize: "2em" }}>안녕하세요! 👋🏻</Typography>
      <div style={{ display: "flex" }}>
        <TypeAnimation
          sequence={["늘 성실한 자세를", 1500, "끊임없는 성장을", 1500]}
          preRenderFirstString={true}
          wrapper={"span"}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", width: "6.9em" }}
        />
        <span style={{ fontSize: "2em" }}>추구하는</span>
      </div>
      <Typography sx={{ fontSize: "2em" }}>
        개발자 <strong>홍영의</strong>입니다.
      </Typography>
    </Stack>
  );
}
