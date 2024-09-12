import { Input } from "../Common/Input";

const AdditionalInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      additionalInfo: {
        ...prev.additionalInfo,
        [name]: value,
      },
    }));
  };

  const fields = [
    {
      name: "languages",
      label: "Languages",
      placeholder: "Languages you speak",
    },
    {
      name: "certifications",
      label: "Certifications",
      placeholder: "Relevant certifications",
    },
    {
      name: "interests",
      label: "Interests",
      placeholder: "Your interests or hobbies",
    },
    {
      name: "other",
      label: "Additional Information",
      placeholder: "Any other information",
      multiline: true,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Additional Information</h2>
      {fields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          name={field.name}
          value={formData.additionalInfo[field.name]}
          onChange={handleChange}
          placeholder={field.placeholder}
          multiline={field.multiline}
        />
      ))}
    </div>
  );
};

export default AdditionalInfo;
