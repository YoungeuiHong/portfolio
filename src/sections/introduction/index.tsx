import { AboutMe, Connects, Profile } from "@/sections/introduction/view";
import { Grid, Stack } from "@mui/material";
import { useViewport } from "@/hook/useViewport";
import { ScrollNavigator } from "@/components/scroll";

export default function Introduction() {
  const { isMobile } = useViewport();

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh", mx: "auto", paddingBottom: 10 }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            // justifyContent: isMobile ? "center" : "flex-end",
            justifyContent: "center",
          }}
        >
          <Stack
            direction={"column"}
            spacing={3}
            // alignItems={isMobile ? "center" : "flex-start"}
            alignItems="center"
            sx={{ minWidth: isMobile ? 0 : 350 }}
          >
            <AboutMe isMobile={isMobile} />
            <Connects />
          </Stack>
        </Grid>
        {/*{isDesktop && (*/}
        {/*  <Grid*/}
        {/*    item*/}
        {/*    xs={6}*/}
        {/*    sx={{*/}
        {/*      display: "flex",*/}
        {/*      justifyContent: "flex-start",*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <Profile />*/}
        {/*  </Grid>*/}
        {/*)}*/}
      </Grid>
      <ScrollNavigator />
    </>
  );
}
