import React from "react";
import { Input } from "../Common/Input";
import { Button } from "../Common/Button";

const Skills = ({ formData, setFormData }) => {
  const handleChange = (index, e) => {
    const { value } = e.target;
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData((prevData) => ({ ...prevData, skills: newSkills }));
  };

  const addSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, ""],
    }));
  };

  const removeSkill = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Skills</h2>
      {formData.skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Input
            value={skill}
            onChange={(e) => handleChange(index, e)}
            placeholder="Enter a skill"
          />
          <Button onClick={() => removeSkill(index)}>Remove</Button>
        </div>
      ))}
      <Button onClick={addSkill}>Add Skill</Button>
    </div>
  );
};

export default Skills;
