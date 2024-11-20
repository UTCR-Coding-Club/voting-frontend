import { Link } from "react-router-dom";

import Login from "./login/Login";

import logo2 from "../assets/logos/UTC-text-under-upscaled.png";

import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="landing-placeholder-div"></div>
      <div className="landing-login">
        <img className="landing-logo-text-under" src={logo2} alt="" />
        <Login />
        <h3>
          Create an account{" "}
          <Link to={"/signup"}>
            <a>here</a>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Landing;
