import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useCV } from "../../context/CVContext";

export default function Experience() {
  const { experience, addExperience } = useCV();
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
    addExperience(formData);
    setFormData({
      company: "",
      position: "",
      duration: "",
      contribution: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
        <Input
          label="Position"
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
        <Input
          label="Duration"
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
        <Input
          label="Contribution"
          type="text"
          name="contribution"
          value={formData.contribution}
          onChange={handleChange}
        />
        <Button type="submit" text="Submit" />
      </form>

      <ul>
        {experience.map((item, index) => (
          <li key={index}>
            {item.company} - {item.position} ({item.duration})
          </li>
        ))}
      </ul>
    </div>
  );
}
