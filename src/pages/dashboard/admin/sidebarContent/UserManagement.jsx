import UserManagementContent from "./UserManagementContent";
import { Outlet } from "react-router-dom";
import "./MainElements.css";

const UserManagement = () => {
  return (
    <div className="user-management-container">
      <Outlet />
      <UserManagementContent />
    </div>
  );
};

export default UserManagement;