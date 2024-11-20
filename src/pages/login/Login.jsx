import { useState } from "react";

import LoginInput from "./LoginInput";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z]+\.[a-zA-Z]+@utcreading\.org\.uk$/;
    return re.test(email);
  };

  const handleEmail = (em) => {
    if (validateEmail(em)) {
      setEmail(em);
    } else {
      console.log("false");
    }
    console.log(email);
  };

  const handlePassword = (pw) => {
    setPassword(pw);
  };

  return (
    <div className="login">
      <form className="login-input" action="">
        <div className="login-inputs-container">
          <LoginInput
            title="Email"
            placeholder="first.last@utcreading.org.uk"
            type="text"
            handleValue={handleEmail}
          />

          <LoginInput
            title="Password"
            placeholder="Password"
            type="password"
            handleValue={handlePassword}
          />
        </div>

        <a className="forgot-password">Forgot your password?</a>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
