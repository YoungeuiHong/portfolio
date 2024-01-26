"use client";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import ChipList from "@/components/chip/ChipList";
import TooltipIconButton from "@/components/button/TooltipIconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from "@mui/icons-material/Article";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Project } from "@/data/project";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, thumbnail, techStack, description, links } = project;

  return (
    <Card sx={{ mt: 1 }}>
      <Link href={"/"} style={{ textDecoration: "none" }}>
        <CardMedia
          sx={{
            height: 200,
            "&:hover": {
              overflow: "hidden",
              transform: "scale(1.02)",
            },
          }}
          image={thumbnail}
          title={title}
        />
      </Link>
      <CardContent>
        <Link href={"/"} style={{ textDecoration: "none", color: "#000000" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 500 }}
          >
            {title}
          </Typography>
        </Link>
        <ChipList chips={techStack} stackSx={{ mb: 2 }} />
        <Typography variant="body2" color="text.secondary" sx={{ height: 30 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction={"row"}>
          {links.detail && (
            <TooltipIconButton
              icon={<DescriptionIcon />}
              tooltip={"상세 설명"}
              onClick={() => {}}
              iconSize={25}
            />
          )}
          {links.github && (
            <TooltipIconButton
              icon={<GitHubIcon />}
              tooltip={"GitHub"}
              onClick={() => {
                window.open(links.github);
              }}
              iconSize={25}
            />
          )}

          {links.posting && (
            <TooltipIconButton
              icon={<ArticleIcon />}
              tooltip={"관련 포스팅"}
              onClick={() => {
                window.open(links.posting);
              }}
              iconSize={25}
            />
          )}
          {links.demo && (
            <TooltipIconButton
              icon={<PlayCircleIcon />}
              tooltip={"데모"}
              onClick={() => {
                window.open(links.demo);
              }}
              iconSize={25}
            />
          )}
        </Stack>
      </CardActions>
    </Card>
  );
}
