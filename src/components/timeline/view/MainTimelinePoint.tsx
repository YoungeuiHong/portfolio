"use client";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import { TimelineInfo } from "@/types/Timeline";
import CareerCard from "@/components/card/CareerCard";

interface TimelinePointProps {
  timeline: TimelineInfo;
  last?: boolean;
}

export default function MainTimelinePoint({
  timeline,
  last = false,
}: TimelinePointProps) {
  const { time, name, content, icon, mainDescription } = timeline;
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ fontWeight: 700, mt: 1 }}>
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot sx={{ backgroundColor: "#FFFFFF" }}>
          <Image
            src={icon ?? ""}
            alt={"company-icon"}
            width={20}
            height={20}
            style={{ margin: 0 }}
          />
        </TimelineDot>
        {!last && <TimelineConnector sx={{ backgroundColor: grey[300] }} />}
      </TimelineSeparator>
      <TimelineContent sx={{ pt: 1, pb: 2 }}>
        <h3 style={{ margin: 0, color: "#000000", fontWeight: 600 }}>{name}</h3>
        {mainDescription && <CareerCard career={mainDescription} />}
      </TimelineContent>
    </TimelineItem>
  );
}
