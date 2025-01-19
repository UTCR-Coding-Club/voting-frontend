import { useState, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import axios from "axios";

import { URLContext } from "../../Context.jsx";
import LoginInput from "./LoginInput";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const URL = useContext(URLContext);
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.sessionId != null) {
      navigate("/home");
    }
  }, []);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z]+\.[a-zA-Z]+@utcreading\.org\.uk$/;
    return re.test(email);
  };

  const handleEmail = (em) => {
    setEmail(em);
    if (!validateEmail(em)) {
      console.log("false");
    }
    console.log(email);
  };

  const handlePassword = (pw) => {
    setPassword(pw);
  };

  const handleSubmit = (e) => {// change to not allow submit if email invalid
    e.preventDefault()

    axios.post(URL + "generatesession", {
      "email": email,
      "password": password
    }, {
      headers: {
      "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.data.success) {
        setCookie("sessionId", response.data.data, {
          maxAge: response.data.expires * 3600
        });
        navigate("/home");
      }
    }).catch((error) => {
      console.error(error);
    });
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
        <button className="login-btn" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
