import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useCV } from "../../context/CVContext";

export default function Skills() {
  const { skills, addSkills } = useCV();
  const [newSkill, setNewSkill] = useState("");

  const handleChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkills(newSkill);
    setNewSkill("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Skills"
          type="text"
          name="newSkill"
          value={newSkill}
          onChange={handleChange}
        />
        <Button type="submit" text="Submit" />
      </form>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
