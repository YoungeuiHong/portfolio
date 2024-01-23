"use client";
import { AboutMe, Connects, Profile } from "@/sections/introduction/view";
import { Grid, Stack } from "@mui/material";

export default function Introduction() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", margin: "auto" }}
    >
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Stack direction={"column"} spacing={3} sx={{ width: 350 }}>
          <AboutMe />
          <Connects />
        </Stack>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Profile />
      </Grid>
    </Grid>
  );
}
