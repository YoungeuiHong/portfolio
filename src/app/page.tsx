import Introduction from "@/sections/introduction";
import Career from "@/sections/career";
import Project from "@/sections/project";
import TechStack from "@/sections/tech-stack";
import Activity from "@/sections/activity";
import Certificate from "@/sections/certificate";

export default function Home() {
  return (
    <main>
      <Introduction />
      <TechStack />
      <Career />
      <Project />
      <Activity />
      <Certificate />
    </main>
  );
}
