import PersonalInfo from "../form/PersonalInfo";
import Education from "../form/Education";
import Experience from "../form/Experience";
import Projects from "../form/Projects";
import Skills from "../form/Skills";

export default function MainLayout() {
  return (
    <div>
      <Skills />
      <Projects />
      <Experience />
      <PersonalInfo />
      <Education />
    </div>
  );
}
