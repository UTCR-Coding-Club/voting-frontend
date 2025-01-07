import VoteHistoryContent from "./VoteHistoryContent";
import { Outlet } from "react-router-dom";
import "./MainElements.css";

const VoteHistory = () => {
  return (
    <div className="vote-history-container">
      <Outlet />
      <VoteHistoryContent />
    </div>
  );
};

export default VoteHistory;