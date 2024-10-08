const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        className="input-field border border-black m-5"
      />
    </div>
  );
};

export default Input;
