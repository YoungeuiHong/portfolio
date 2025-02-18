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
  const { title, thumbnail, mainTechStack, description, links } = project;
  const router = useRouter();

  return (
    <Card
      sx={{
        mt: 2,
        width: "100%",
        boxShadow: "4px 0px 10px 0px rgba(0,0,0,.03)",
        borderRadius: 3,
      }}
    >
      <Link href={`/project/${project.id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          sx={{
            height: 230,
            "&:hover": {
              overflow: "hidden",
              transform: "scale(1.02)",
            },
          }}
          image={thumbnail}
          title={title}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <Link
          href={`/project/${project.id}`}
          style={{
            textDecoration: "none",
            color: "#212B36",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
            {title}
          </Typography>
        </Link>
        <ChipList
          chips={mainTechStack}
          stackSx={{ my: 1 }}
          chipSx={{ backgroundColor: (theme) => theme.palette.grey["300"] }}
        />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ height: 35, pt: "1px" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: "#FFFFFF" }}>
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
