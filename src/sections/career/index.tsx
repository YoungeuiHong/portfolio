import CustomTimeline from "@/components/timeline";
import { Stack, Typography } from "@mui/material";
import FadeInContainer from "@/components/animation/fadein/FadeInContainer";
import { TIMELINES } from "@/data/career";

export default function Career() {
  return (
    <FadeInContainer>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          marginTop: 0,
          width: "100%",
          minHeight: "100vh",
          textAlign: "center",
        }}
        spacing={2}
      >
        <Typography sx={{ fontWeight: 900, fontSize: "3rem" }}>
          Career
        </Typography>
        <CustomTimeline timelines={TIMELINES} />
      </Stack>
    </FadeInContainer>
  );
}
