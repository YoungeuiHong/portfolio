import Introduction from "@/sections/introduction";
import Career from "@/sections/career";
import Project from "@/sections/project";
import TechStack from "@/sections/tech-stack";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <main>
      <Introduction />
      <TechStack />
      <Career />
      <Project />
      <Footer />
    </main>
  );
}
