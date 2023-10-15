import { Profile } from "./ProfileSection";
import { Projects } from "./ProjectsSection";
import { Experience } from "./ExperienceSection";
import { TechSection } from "./TechSection";

export default function Me() {
  return (
    <>
      <Profile />
      <Experience />
      <TechSection />
      <Projects />
    </>
  );
}
