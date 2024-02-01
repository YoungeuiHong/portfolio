import SectionLayout from "@/sections/layout";
import ActivityCard from "@/components/card/ActivityCard";
import { Grid } from "@mui/material";
import { ACTIVITIES } from "@/data/activity";

export default function Activity() {
  return (
    <SectionLayout id={"activity"} title={"교육 및 대외활동"}>
      <Grid container maxWidth={"lg"} spacing={2}>
        {ACTIVITIES.map((activity) => (
          <Grid key={`activity-grid-${activity.title}`} item sm={6} md={4}>
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
