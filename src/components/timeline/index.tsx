"use client";
import {
  Timeline,
  timelineContentClasses,
  timelineOppositeContentClasses,
} from "@mui/lab";
import DummyPoint from "@/components/timeline/view/DummyPoint";
import { TimelineInfo } from "@/types/Timeline";
import TimelinePoint from "@/components/timeline/view/TimelinePoint";
import { styled } from "@mui/material";

interface CustomTimelineProps {
  timelines: TimelineInfo[];
}

const StyledTimeline = styled(Timeline)({
  width: "75vw",
  [`& .${timelineOppositeContentClasses.root}`]: {
    minWidth: 150,
  },
  [`& .${timelineContentClasses.root}`]: {
    minWidth: 350,
  },
});

export default function CustomTimeline({ timelines }: CustomTimelineProps) {
  const num_of_timelines = timelines.length;

  return (
    <StyledTimeline>
      <DummyPoint />
      {timelines.map((timeline, index) => (
        <TimelinePoint
          key={index}
          timeline={timeline}
          last={index === num_of_timelines - 1}
        />
      ))}
    </StyledTimeline>
  );
}
