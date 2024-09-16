import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const handleChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSkills([...skills, newSkill]);
    setNewSkill("");
  };

  return (
    <div>
      <Input
        label="Skills"
        type="text"
        name="newSkill"
        value={newSkill}
        onChange={handleChange}
      />
      <Button type="button" text="Submit" onClick={handleSubmit} />
    </div>
  );
}
