import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Projects() {
  const [project, setProject] = useState([]);
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
    setProject([...project, formData]);
    setFormData({
      title: "",
      description: "",
      tech: "",
      info: "",
    });
  };

  return (
    <div>
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
      <Button type="button" text="Submit" onClick={handleSubmit} />
    </div>
  );
}
