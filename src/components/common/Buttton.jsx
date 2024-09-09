const Button = ({ text, type, onClick }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
