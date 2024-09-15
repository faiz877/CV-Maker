const CVTemplate = ({ formData }) => {
  const { personalInfo, education, experience, skills, additionalInfo } =
    formData;

  return (
    <div className="font-sans">
      <header className="bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">{personalInfo.fullName}</h1>
        <p>
          {personalInfo.email} | {personalInfo.phone}
        </p>
        <p>{personalInfo.address}</p>
      </header>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mt-2">
            <h3 className="font-semibold">{edu.institution}</h3>
            <p>
              {edu.degree} - {edu.graduationYear}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mt-2">
            <h3 className="font-semibold">{exp.company}</h3>
            <p>
              {exp.position} ({exp.startDate} - {exp.endDate})
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Additional Information</h2>
        <p>
          <strong>Languages:</strong> {additionalInfo.languages}
        </p>
        <p>
          <strong>Certifications:</strong> {additionalInfo.certifications}
        </p>
        <p>
          <strong>Interests:</strong> {additionalInfo.interests}
        </p>
        <p>{additionalInfo.other}</p>
      </section>
    </div>
  );
};

export default CVTemplate;
