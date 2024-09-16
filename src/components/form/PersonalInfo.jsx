import Input from "../common/Input";
import Button from "../common/Button";
import { useCV } from "../../context/CVContext";

export default function PersonalInfo() {
  const { personalInfo, updatePersonalInfo } = useCV();

  const handleChange = (e) => {
    updatePersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
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
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
        />
        <Input
          label="Number"
          type="tel"
          name="number"
          value={personalInfo.number}
          onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
        />
        <Input
          label="Linkedln"
          type="text"
          name="linkedln"
          value={personalInfo.linkedln}
          onChange={handleChange}
        />
        <Input
          label="Github"
          type="text"
          name="github"
          value={personalInfo.github}
          onChange={handleChange}
        />
        <Button type="submit" text="Submit" />
      </form>
    </div>
  );
}
