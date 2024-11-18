// import { useNavigate } from "react-router-dom";

import Login from "./login/Login";

// import logo from "../assets/logos/UTC-reading-logo.png";
import logo2 from "../assets/logos/UTC-text-under-upscaled.png";

import "./Landing.css";

const Landing2 = () => {
  // const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-placeholder-div">
        {/* <img className="landing-logo-text" src={logo} alt="" /> */}
      </div>
      <div className="landing-login">
        <img className="landing-logo-text-under" src={logo2} alt="" />
        <Login />
        <h3>
          Create an account <a href="">here</a>
        </h3>
      </div>
    </div>
  );
};

export default Landing2;
