import React from "react";
import { Input } from "../Common/Input";

const AdditionalInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      additionalInfo: {
        ...prevData.additionalInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Additional Information</h2>
      <Input
        label="Languages"
        name="languages"
        value={formData.additionalInfo.languages}
        onChange={handleChange}
        placeholder="Enter languages you speak"
      />
      <Input
        label="Certifications"
        name="certifications"
        value={formData.additionalInfo.certifications}
        onChange={handleChange}
        placeholder="Enter any relevant certifications"
      />
      <Input
        label="Interests"
        name="interests"
        value={formData.additionalInfo.interests}
        onChange={handleChange}
        placeholder="Enter your interests or hobbies"
      />
      <Input
        label="Additional Information"
        name="other"
        value={formData.additionalInfo.other}
        onChange={handleChange}
        multiline
        placeholder="Any other information you'd like to include"
      />
    </div>
  );
};

export default AdditionalInfo;
