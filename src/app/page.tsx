import Introduction from "@/sections/introduction";
import Career from "@/sections/career";
import Project from "@/sections/project";
import TechStack from "@/sections/tech-stack";
import Footer from "@/sections/footer";
import Activity from "@/sections/activity";

export default function Home() {
  return (
    <main>
      <Introduction />
      <TechStack />
      <Career />
      <Project />
      <Activity />
      <Footer />
    </main>
  );
}
