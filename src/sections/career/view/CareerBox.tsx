import { Grid } from "@mui/material";
import { CareerInfo } from "@/data/career";
import CareerTitle from "@/sections/career/view/CareerTitle";
import CareerDescription from "@/sections/career/view/CareerDescription";
import { useViewport } from "@/hook/useViewport";
import { grey } from "@mui/material/colors";

interface CareerBoxProps {
  career: CareerInfo;
}

export default function CareerBox({ career }: CareerBoxProps) {
  const {
    companyName,
    companyLogo,
    duration,
    description,
    mdFilePath,
    techStack,
  } = career;

  const { isMobile } = useViewport();

  return (
    <Grid container maxWidth={"md"} sx={{ pt: 2 }}>
      <Grid
        item
        xs={12}
        sm={3}
        sx={{
          py: 1,
          borderRight: isMobile ? "none" : "1px solid",
          borderColor: grey["200"],
        }}
      >
        <CareerTitle
          logoSrc={companyLogo}
          companyName={companyName}
          duration={duration}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        sx={{
          py: 1,
        }}
      >
        <CareerDescription
          description={description}
          mdFilePath={mdFilePath}
          techStack={techStack}
        />
      </Grid>
    </Grid>
  );
}
