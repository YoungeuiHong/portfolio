"use client";
import { TooltipImageIcon } from "@/components/icon";
import { Box, Grid } from "@mui/material";
import SectionLayout from "../layout";
import {
  BACKEND_TECH_STACK,
  DEVOPS_TECH_STACK,
  FRONTEND_TECH_STACK,
} from "@/data/tech";
import _ from "lodash";

export default function TechStack() {
  return (
    <SectionLayout
      id={"tech-stack"}
      title={"기술 스택"}
      stackSx={{ backgroundColor: "#FAFAFA" }}
    >
      <Grid container sx={{ maxWidth: 600 }}>
        {_.concat(
          FRONTEND_TECH_STACK,
          BACKEND_TECH_STACK,
          DEVOPS_TECH_STACK,
        ).map((tech, index) => (
          <Grid
            key={`tootip-image-icon-${tech.name}`}
            item
            xs={3}
            sm={2}
            sx={{ display: "flex" }}
          >
            <Box sx={{ margin: "auto" }}>
              <TooltipImageIcon
                src={tech.icon}
                tooltip={tech.name}
                width={100}
                height={100}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}
