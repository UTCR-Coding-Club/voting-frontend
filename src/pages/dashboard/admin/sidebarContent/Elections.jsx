import ElectionsContent from "./ElectionsContent";
import { Outlet } from "react-router-dom";
import "./MainElements.css";

const Elections = () => {
  return (
    <div className="elections-container">
      <Outlet />
      <ElectionsContent />
    </div>
  );
};

export default Elections;