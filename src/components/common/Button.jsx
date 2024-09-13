const Button = ({ type, text, onClick }) => {
  return (
    <button
      type={type}
      className="button bg-blue-500 h-10 w-20 ml-40"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
