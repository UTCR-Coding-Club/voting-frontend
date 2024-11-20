import "./LoginInput.css";

// eslint-disable-next-line react/prop-types
const LoginInput = ({ title, placeholder, type, handleValue }) => {
  return (
    <div className="input-container">
      {type === "password" ? (
        <input
          minLength={8}
          required={true}
          placeholder={placeholder}
          type={type}
          onBlur={(e) => handleValue(e.target.value)}
        />
      ) : (
        <input
          required={true}
          placeholder={placeholder}
          type={type}
          onBlur={(e) => handleValue(e.target.value)}
        />
      )}
      <span>{title}</span>
    </div>
  );
};

export default LoginInput;
