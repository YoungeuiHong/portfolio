"use client";
import SectionLayout from "@/sections/layout";
import ProjectCard from "@/components/card/ProjectCard";
import { PROJECTS } from "@/data/project";
import { SwiperSlide } from "swiper/react";
import CarouselContainer from "@/components/carousel/CarouselContainer";
import { Grid, Theme, useMediaQuery } from "@mui/material";

export default function Projects() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <SectionLayout
      id={"projects"}
      title={"프로젝트"}
      stackSx={{ backgroundColor: "#FAFAFA" }}
    >
      <Grid
        container
        maxWidth="lg"
        spacing={{ xs: 0, sm: 3 }}
        direction={{ xs: "column", sm: "row" }}
      >
        {PROJECTS.map((project, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}
