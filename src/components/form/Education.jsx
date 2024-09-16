import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Education() {
  const [education, setEducation] = useState([]);
  const [formData, setFormData] = useState({
    institution: "",
    course: "",
    location: "",
    duration: "",
    grade: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducation((prevEducation) => [...prevEducation, formData]);
    setFormData({
      institution: "",
      course: "",
      location: "",
      duration: "",
      grade: "",
    });
    console.log("submit");
  };
  return (
    <div>
      <Input
        label="Institution"
        type="text"
        name="institution"
        value={formData.institution}
        onChange={handleChange}
      />
      <Input
        label="Course"
        type="text"
        name="course"
        value={formData.course}
        onChange={handleChange}
      />
      <Input
        label="Location"
        type="text"
        name="location"
        value={formData.location}
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
        label="Grade"
        type="text"
        name="grade"
        value={formData.grade}
        onChange={handleChange}
      />
      <Button type="submit" text="Submit" onClick={handleSubmit}></Button>

      <ul>
        {education.map((item, index) => (
          <li key={index}>
            {item.institution} - {item.course} ({item.duration}) - {item.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}
