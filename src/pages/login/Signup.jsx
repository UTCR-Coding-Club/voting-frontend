import { useNavigate } from "react-router-dom";

import LoginInput from "./LoginInput";
import logo from "../../assets/logos/UTC-reading-logo.png";

import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <img className="signup-utc-logo" src={logo} alt="" />
      <h1 className="create-account-text">Create your account</h1>
      <form className="signup-email-form">
        <LoginInput
          title="Email"
          placeholder="Enter your email"
          type="text"
          required
        />
        <button className="login-btn signup-btn" type="submit">
          Continue
        </button>
      </form>
      <h3>
        Already have an account? <a onClick={() => navigate("/")}>Log in</a>
      </h3>
    </div>
  );
};

export default Signup;
