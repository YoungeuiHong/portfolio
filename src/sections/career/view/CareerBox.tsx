import { Grid } from "@mui/material";
import { CareerInfo } from "@/data/career";
import CareerTitle from "@/sections/career/view/CareerTitle";
import CareerDescription from "@/sections/career/view/CareerDescription";

interface CareerBoxProps {
  career: CareerInfo;
}

export default function CareerBox({ career }: CareerBoxProps) {
  const { companyName, companyLogo, duration, description, mdFilePath } =
    career;

  return (
    <Grid container maxWidth={"md"} sx={{ pt: 2 }}>
      <Grid
        item
        xs={3}
        sx={{
          py: 1,
          borderRight: "1px solid",
          borderColor: (theme) => theme.palette.grey["200"],
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
        xs={9}
        sx={{
          py: 1,
          paddingLeft: 3,
        }}
      >
        <CareerDescription description={description} mdFilePath={mdFilePath} />
      </Grid>
    </Grid>
  );
}
