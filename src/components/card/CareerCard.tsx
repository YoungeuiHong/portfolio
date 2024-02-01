import { CareerDescription, Description } from "@/types/Description";
import DescriptionCard from "@/components/card/view/DescriptionCard";
import ChipList from "@/components/chip/ChipList";

interface CareerCardProps {
  career: CareerDescription;
}

export default function CareerCard({ career }: CareerCardProps) {
  const convertToDesciption = (career: CareerDescription): Description[] => {
    return [
      {
        title: "📅 근무기간",
        type: "string",
        content: career.date,
      },
      {
        title: "📝 업무 내용",
        type: "string",
        content: career.content,
      },
      {
        title: "🛠 기술 스택",
        type: "ReactNode",
        content: (
          <ChipList chips={career.techStack} stackSx={{ ml: 2.3, mt: 0.5 }} />
        ),
      },
    ];
  };

  return <DescriptionCard descriptions={convertToDesciption(career)} />;
}
