import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Experience() {
  const [experience, setExperience] = useState([]);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    duration: "",
    contribution: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperience((prevExperience) => [...prevExperience, formData]);
    setFormData({
      company: "",
      position: "",
      duration: "",
      contribution: "",
    });
  };

  return (
    <div>
      <Input
        label="Company"
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
      ></Input>
      <Input
        label="Position"
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
      ></Input>
      <Input
        label="Duration"
        type="text"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
      ></Input>
      <Input
        label="Contribution"
        type="text"
        name="contribution"
        value={formData.contribution}
        onChange={handleChange}
      ></Input>
      <Button type="button" text="Submit" onClick={handleSubmit}></Button>
    </div>
  );
}
