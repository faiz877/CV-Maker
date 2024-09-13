import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    linkedln: "",
    github: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          name="userName"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Number"
          type="tel"
          name="userNumber"
          value={formData.number}
          onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="userEmail"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Linkedln"
          type="text"
          name="userLinkedln"
          value={formData.linkedln}
          onChange={handleChange}
        />
        <Input
          label="Github"
          type="text"
          name="userGithub"
          value={formData.github}
          onChange={handleChange}
        />
        <Button type="submit" text="Submit" />
      </form>
    </div>
  );
}
