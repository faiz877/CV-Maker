import PersonalInfo from "../form/PersonalInfo";
import Education from "../form/Education";
import Experience from "../form/Experience";

export default function MainLayout() {
  return (
    <div>
      <Experience></Experience>
      <PersonalInfo></PersonalInfo>
      <Education></Education>
    </div>
  );
}
