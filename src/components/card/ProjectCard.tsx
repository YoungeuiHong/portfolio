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
import { Project } from "@/data/project";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, thumbnail, techStack, description, links } = project;
  const router = useRouter();

  return (
    <Card sx={{ mt: 1 }}>
      <Link href={`/project/${project.id}`} style={{ textDecoration: "none" }}>
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
        <Link
          href={`/project/${project.id}`}
          style={{ textDecoration: "none", color: "#000000" }}
        >
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
          {links &&
            links.map((link, index) => (
              <TooltipIconButton
                key={index}
                icon={link.icon === "github" ? <GitHubIcon /> : link.icon}
                tooltip={link.tooltip}
                onClick={() => {
                  if (!link.href) {
                    return;
                  }
                  if (link.internal) {
                    router.push(link.href);
                  } else {
                    window.open(link.href);
                  }
                }}
                iconSize={25}
              />
            ))}
        </Stack>
      </CardActions>
    </Card>
  );
}
