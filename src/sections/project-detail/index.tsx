import {
  Divider,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ChipList from "@/components/chip/ChipList";
import CustomMarkdown from "@/components/markdown/CustomMarkdown";
import { Project } from "@/data/project";
import FloatingMenu from "@/sections/project-detail/view/FloatingMenu";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { detailTitle, techStack, links, mdFilePath } = project;
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Stack
      direction={"column"}
      spacing={3}
      sx={{ margin: "auto", width: "60vw" }}
    >
      <Typography variant={"h3"} fontWeight={700}>
        {detailTitle}
      </Typography>
      <ChipList
        chips={techStack}
        size={"medium"}
        stackSx={{ maxWidth: "100%" }}
        chipSx={{
          color: (theme) => theme.palette.primary.light,
          backgroundColor: (theme) => theme.palette.grey[200],
          fontWeight: 700,
          borderRadius: 20,
        }}
      />
      <Divider />
      {mdUp && <FloatingMenu links={links} />}
      {mdFilePath && <CustomMarkdown mdFilePath={mdFilePath} />}
    </Stack>
  );
}
