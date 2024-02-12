import SectionLayout from "@/sections/layout";
import ActivityCard from "@/components/card/ActivityCard";
import { Grid } from "@mui/material";
import { ACTIVITIES } from "@/data/activity";

export default function Activity() {
  return (
    <SectionLayout id={"activity"} title={"교육 및 대외활동"}>
      <Grid
        container
        maxWidth={"lg"}
        spacing={{ xs: 0, sm: 3 }}
        direction={{ xs: "column", sm: "row" }}
      >
        {ACTIVITIES.map((activity) => (
          <Grid
            key={`activity-grid-${activity.title}`}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <ActivityCard
              key={`activity-card-${activity.title}`}
              activity={activity}
            />
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}
