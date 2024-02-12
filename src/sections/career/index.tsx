import SectionLayout from "@/sections/layout";
import CareerBox from "@/sections/career/view/CareerBox";
import { CAREERS } from "@/data/career";

export default function Career() {
  return (
    <SectionLayout id={"career"} title={"경력"}>
      {CAREERS.map((career) => (
        <CareerBox key={`career-${career.companyName}`} career={career} />
      ))}
    </SectionLayout>
  );
}
