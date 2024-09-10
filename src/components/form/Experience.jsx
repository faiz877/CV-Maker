import React from "react";
import { Input } from "../Common/Input";
import { Button } from "../Common/Button";

const Experience = ({ formData, setFormData }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData((prevData) => ({ ...prevData, experience: newExperience }));
  };

  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const removeExperience = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      experience: prevData.experience.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Work Experience</h2>
      {formData.experience.map((exp, index) => (
        <div key={index} className="border p-4 rounded">
          <Input
            label="Company"
            name="company"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
          />
          <Input
            label="Position"
            name="position"
            value={exp.position}
            onChange={(e) => handleChange(index, e)}
          />
          <Input
            label="Start Date"
            name="startDate"
            type="date"
            value={exp.startDate}
            onChange={(e) => handleChange(index, e)}
          />
          <Input
            label="End Date"
            name="endDate"
            type="date"
            value={exp.endDate}
            onChange={(e) => handleChange(index, e)}
          />
          <Input
            label="Description"
            name="description"
            value={exp.description}
            onChange={(e) => handleChange(index, e)}
            multiline
          />
          <Button onClick={() => removeExperience(index)}>Remove</Button>
        </div>
      ))}
      <Button onClick={addExperience}>Add Experience</Button>
    </div>
  );
};

export default Experience;
