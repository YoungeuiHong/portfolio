import { Box, Typography } from "@mui/material";
import CustomMarkdown from "@/components/markdown/CustomMarkdown";

interface CareerDescriptionProps {
  description: string;
  mdFilePath: string;
}

export default function CareerDescription({
  description,
  mdFilePath,
}: CareerDescriptionProps) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: 2,
          borderLeft: "4px solid",
          backgroundColor: (theme) => theme.palette.grey["200"],
          borderColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Typography>{description}</Typography>
      </Box>
      <Box sx={{ paddingLeft: 1 }}>
        <CustomMarkdown mdFilePath={mdFilePath} />
      </Box>
    </>
  );
}
