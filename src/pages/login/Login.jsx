import LoginInput from "./LoginInput";

import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <form className="login-input" action="">
        <div className="login-inputs-container">
          <LoginInput
            title="Email"
            placeholder="example.email@utcreading.org.uk"
            type="text"
          />

          <LoginInput title="Password" placeholder="Password" type="password" />
        </div>

        <a className="forgot-password" href="">
          Forgot your password?
        </a>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
