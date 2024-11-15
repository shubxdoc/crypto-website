import "./button.css";

const Button = ({ text, onClick, outlined }) => {
  return (
    <div
      onClick={() => onClick()}
      className={outlined ? "btn-outlined " : "btn"}
    >
      {text}
    </div>
  );
};

export default Button;
