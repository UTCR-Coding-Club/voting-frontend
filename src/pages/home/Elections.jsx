import { useNavigate } from "react-router";

import "./Elections.css"


const Elections = ({data}) => {
    
  const navigate = useNavigate();
    

  const handleElection = (e, electionId) => {
    e.preventDefault();
    navigate(`/vote?id=${electionId}`);// temp solution numbers in uri is very bad (encrypting and putting in url would be better, or props 💀💀)
  }

  const electionList = data.map(i => {
    if (Date.parse(i[4]) > Date.now()) {
      return (
        <div key={i.toString()}  className="card">
          <h1><b>{i[1]}</b></h1>
          <p>{i[2]}</p>
          <button onClick={(e) => handleElection(e, i[0])}>vote</button>
          </div>
      );
    }   
  }); 


  return (
    <div>{electionList}</div>
  );
};


export default Elections;
