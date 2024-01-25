import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { grey } from "@mui/material/colors";
import { TimelineInfo } from "@/types/Timeline";

interface TimelinePointProps {
  timeline: TimelineInfo;
  last: boolean;
}

export default function SubTimelinePoint({
  timeline,
  last,
}: TimelinePointProps) {
  const { time, name, content } = timeline;
  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant={"outlined"} sx={{ mx: 1.2 }} />
        {!last && <TimelineConnector sx={{ backgroundColor: grey[300] }} />}
      </TimelineSeparator>
      <TimelineContent>
        <h4 style={{ margin: 0, color: grey[800], fontWeight: 500 }}>{name}</h4>
        {content && (
          <span style={{ margin: 0, color: grey[600], fontWeight: 500 }}>
            {content}
          </span>
        )}
      </TimelineContent>
    </TimelineItem>
  );
}
