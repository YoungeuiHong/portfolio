"use client";
import { TooltipImageIcon } from "@/components/icon";
import { Stack, Box } from "@mui/material";
import SectionLayout from "../layout";
import {
  BACKEND_TECH_STACK,
  DEVOPS_TECH_STACK,
  FRONTEND_TECH_STACK,
} from "@/data/tech";

export default function TechStack() {
  return (
    <SectionLayout id={"tech-stack"} title={"기술 스택"}>
      <Stack direction={"row"}>
        {FRONTEND_TECH_STACK.map((tech, index) => (
          <TooltipImageIcon
            key={`tootip-image-icon-${tech.name}`}
            src={tech.icon}
            tooltip={tech.name}
            width={100}
            height={100}
          />
        ))}
      </Stack>
      <Stack direction={"row"}>
        {BACKEND_TECH_STACK.map((tech, index) => (
          <TooltipImageIcon
            key={`tootip-image-icon-${tech.name}`}
            src={tech.icon}
            tooltip={tech.name}
            width={100}
            height={100}
          />
        ))}
        {DEVOPS_TECH_STACK.map((tech, index) => (
          <TooltipImageIcon
            key={`tootip-image-icon-${tech.name}`}
            src={tech.icon}
            tooltip={tech.name}
            width={100}
            height={100}
          />
        ))}
      </Stack>
    </SectionLayout>
  );
}
