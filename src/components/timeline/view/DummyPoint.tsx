import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

export default function DummyPoint() {
  return (
    <TimelineItem sx={{ display: "none", margin: 0 }}>
      <TimelineOppositeContent color="textSecondary">
        {""}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{""}</TimelineContent>
    </TimelineItem>
  );
}
