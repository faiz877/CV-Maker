import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useCV } from "./CVContext";

export default function Projects() {
  const { project, addProject } = useCV();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: "",
    info: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(formData);
    setFormData({
      title: "",
      description: "",
      tech: "",
      info: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Project Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <Input
          label="Project Description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Input
          label="Project Tech"
          type="text"
          name="tech"
          value={formData.tech}
          onChange={handleChange}
        />
        <Input
          label="Project Info"
          type="text"
          name="info"
          value={formData.info}
          onChange={handleChange}
        />
        <Button type="submit" text="Submit" />
      </form>

      <ul>
        {project.map((item, index) => (
          <li key={index}>
            {item.title} - {item.tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
