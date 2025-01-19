import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { URLContext } from '../../Context';
import axios from 'axios';

import "./Vote.css"

const Vote = () => {

  const URL = useContext(URLContext);
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  const location = useLocation();

  const [candidates, setCandidates] = useState([])
  const [election, setElection] = useState([])
  const [selection, setSelection] = useState([0, ""])

  useEffect(() => {
    axios.post(URL + "getelectiondata", {
      "sessionId": cookies.sessionId,
      "electionId": new URLSearchParams(location.search).get("id")
    }, {
      headers: {
      "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.data.success) {
        setElection(response.data.data[0])
        setCandidates(response.data.data[1])
      }
    }).catch((error) => {
      console.error(error)
    });
  }, []);
  // get candidates and election data

  const selectHighlight = (candidateId) => {
    if (selection[0] == candidateId) {
      return "highlight"
    }
    return ""
  }

  const candidateList = candidates.map( i => {
    return (
      <div key={i.toString()} className={"card " + selectHighlight(i[0])}>
        <div className={selectHighlight(i[0])}>
          <div className="title">{i[1]}</div>
          <button onClick={(e) => select(e, i)} >
          select
          </button>
        </div>
      </div>
    );
  });

  

  const select = (e, i) => {
    e.preventDefault()
    setSelection(i)
  }

  const submitVote = (e) => {
    e.preventDefault()
    axios.post(URL + "submitvote", {
      "sessionId": cookies.sessionId,
      "electionId": election[0],
      "candidateId": selection[0]
    },{
      headers: {
      "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response)
      document.getElementById("response").outerHTML = response.data.message
    })
  }

  return (
    <div>
      <h1>{election[1]}</h1>
      <p>{election[2]}</p>
      <p>election end: {election[4]}</p>

      <div className="container">{candidateList}</div>

      <button onClick={submitVote}>submit vote for {selection[1]}</button>
      <br />
      <div id="response"></div>
    </div>
  );
}

export default Vote;
