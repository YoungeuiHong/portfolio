import { TimelineInfo } from "@/types/Timeline";
import MainTimelinePoint from "./MainTimelinePoint";
import SubTimelinePoint from "./SubTimelinePoint";

interface TimelinePointProps {
  timeline: TimelineInfo;
  last: boolean;
}

export default function TimelinePoint({ timeline, last }: TimelinePointProps) {
  return timeline.main ? (
    <MainTimelinePoint timeline={timeline} last={last} />
  ) : (
    <SubTimelinePoint timeline={timeline} last={last} />
  );
}
