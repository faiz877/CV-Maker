import React from "react";
import { Input } from "../Common/Input";
import { Button } from "../Common/Button";

const Education = ({ formData, setFormData }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setFormData((prevData) => ({ ...prevData, education: newEducation }));
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { institution: "", degree: "", graduationYear: "" },
      ],
    }));
  };

  const removeEducation = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index} className="border p-4 rounded">
          <Input
            label="Institution"
            name="institution"
            value={edu.institution}
            onChange={(e) => handleChange(index, e)}
          />
          <Input
            label="Degree"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
          />
          <Input
            label="Graduation Year"
            name="graduationYear"
            type="number"
            value={edu.graduationYear}
            onChange={(e) => handleChange(index, e)}
          />
          <Button onClick={() => removeEducation(index)}>Remove</Button>
        </div>
      ))}
      <Button onClick={addEducation}>Add Education</Button>
    </div>
  );
};

export default Education;
