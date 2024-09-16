import { createContext, useState, useContext, useMemo } from "react";

const CVContext = createContext();

export const CVProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    number: "",
    email: "",
    linkedln: "",
    github: "",
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  const updatePersonalInfo = (info) => {
    setPersonalInfo(info);
  };

  const addEducation = (edu) => {
    setEducation((prev) => [...prev, edu]);
  };

  const addExperience = (exp) => {
    setExperience((prev) => [...prev, exp]);
  };

  const addProject = (proj) => {
    setProjects((prev) => [...prev, proj]);
  };

  const addSkill = (skill) => {
    setSkills((prev) => [...prev, skill]);
  };

  const contextValue = useMemo(
    () => ({
      personalInfo,
      education,
      experience,
      projects,
      skills,
      updatePersonalInfo,
      addEducation,
      addExperience,
      addProject,
      addSkill,
    }),
    [personalInfo, education, experience, projects, skills]
  );

  return (
    <CVContext.Provider value={contextValue}>{children}</CVContext.Provider>
  );
};

export const useCV = () => useContext(CVContext);

export default CVContext;
