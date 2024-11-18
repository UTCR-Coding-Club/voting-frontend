import "./LoginInput.css";

// eslint-disable-next-line react/prop-types
const LoginInput = ({ title, placeholder, type }) => {
  return (
    <div className="input-container">
      <input placeholder={placeholder} required type={type} />
      <span>{title}</span>
    </div>
  );
};

export default LoginInput;
