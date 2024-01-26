import CustomTimeline from "@/components/timeline";
import { TIMELINES } from "@/data/career";
import SectionLayout from "@/sections/layout";

export default function Career() {
  return (
    <SectionLayout id={"career"} title={"Career"}>
      <CustomTimeline timelines={TIMELINES} />
    </SectionLayout>
  );
}
