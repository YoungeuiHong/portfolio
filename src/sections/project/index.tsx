"use client";
import SectionLayout from "@/sections/layout";
import { Grid, Stack } from "@mui/material";
import ProjectCard from "@/components/card/ProjectCard";
import { PROJECTS } from "@/data/project";

export default function Projects() {
  return (
    <SectionLayout
      id={"projects"}
      title={"프로젝트"}
      stackSx={{ backgroundColor: "#FAFAFA" }}
    >
      <Grid container maxWidth={"lg"} spacing={3}>
        {PROJECTS.map((project, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}
