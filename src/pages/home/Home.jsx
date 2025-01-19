import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { URLContext } from "../../Context.jsx";

import axios from "axios";

import Elections from "./Elections.jsx";

import "./Home.css"


const Home = () => {

  const URL = useContext(URLContext);
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  
  const [electionData, setElectionData] = useState([// left for debugging possible errors
  [
    5,
    "Test Election",
    "test description",
    "Thu, 28 Nov 2024 16:51:50 GMT",
    "Sat, 30 Nov 2024 22:51:50 GMT"
  ],
  [
    7,
    "Test Election 2",
    "test description2",
    "Thu, 28 Nov 2024 11:20:00 GMT",
    "Thu, 30 Jan 2025 21:00:00 GMT"
  ]
  ])


  useEffect(() => {
    if (cookies.sessionId == null) {
      navigate("/");
    }

    axios.post(URL + "getelections", {
      "sessionId": cookies.sessionId
    }, {
      headers: {
      "Content-Type": "application/json",
      },
    }).then((response) => {

      if (response.data.success) {
        setElectionData(electionData.concat(response.data.data))
      }
      else if (response.data.message == "invalid session") {
        navigate("/")
      }
      else {
        alert(response.data.message)
      }      
    }).catch((error) => {
      console.error(error)
    })
  }, []);

  return (
    <div>
      <p>current elections</p>
      <Elections data={electionData}/>
    </div>
  );
};


export default Home;
