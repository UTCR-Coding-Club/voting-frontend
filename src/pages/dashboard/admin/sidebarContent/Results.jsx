import ResultsContent from "./ResultsContent";
import { Outlet } from "react-router-dom";
import "./MainElements.css";

const Results = () => {
  return (
    <div className="results-container">
      <Outlet />
      <ResultsContent />
    </div>
  );
};

export default Results;