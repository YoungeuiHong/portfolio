"use client";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Project } from "@/data/project";
import ProjectDetail from "@/sections/project-detail";

export default function ProjectDetailPage({
  params,
}: {
  params: { detail: number };
}) {
  const [project, setProject] = useState<Project | undefined>(undefined);

  useEffect(() => {
    fetch(`/api/project/${params.detail}`)
      .then((res) => res.json())
      .then((json) => setProject(json.project));
  }, []);

  return (
    <Grid container sx={{ my: 18 }}>
      <Grid item xs={12}>
        {project && <ProjectDetail project={project} />}
      </Grid>
    </Grid>
  );
}
