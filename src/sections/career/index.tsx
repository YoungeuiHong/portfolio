import CustomTimeline from "@/components/timeline";
import { TIMELINES } from "@/data/career";
import SectionLayout from "@/sections/layout";

export default function Career() {
  return (
    <SectionLayout id={"career"} title={"경력"}>
      <CustomTimeline timelines={TIMELINES} />
    </SectionLayout>
  );
}
