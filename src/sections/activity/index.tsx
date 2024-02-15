"use client";
import SectionLayout from "@/sections/layout";
import ActivityCard from "@/components/card/ActivityCard";
import { ACTIVITIES } from "@/data/activity";
import { SwiperSlide } from "swiper/react";
import CarouselContainer from "@/components/carousel/CarouselContainer";
import { Grid, Theme, useMediaQuery } from "@mui/material";

export default function Activity() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <SectionLayout id={"activity"} title={"교육 및 대외활동"}>
      {smDown ? (
        <Grid
          container
          maxWidth={"lg"}
          spacing={{ xs: 0, sm: 3 }}
          direction={{ xs: "column", sm: "row" }}
        >
          {ACTIVITIES.map((activity) => (
            <Grid
              key={`activity-grid-${activity.title}`}
              item
              xs={12}
              md={6}
              lg={4}
            >
              <ActivityCard
                key={`activity-card-${activity.title}`}
                activity={activity}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CarouselContainer id={"activity"}>
          {ACTIVITIES.map((activity) => (
            <SwiperSlide key={`swiper-slide-${activity.title}`}>
              <ActivityCard
                key={`activity-card-${activity.title}`}
                activity={activity}
              />
            </SwiperSlide>
          ))}
        </CarouselContainer>
      )}
    </SectionLayout>
  );
}
