const Button = ({ text, onClick, secondary = false }) => {
  return (
    <button
      className={secondary ? "secondary-btn" : "primary-btn"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;