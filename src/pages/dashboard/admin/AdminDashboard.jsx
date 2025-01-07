import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const location = useLocation();
  const isMainDashboard = location.pathname === "/admin" || location.pathname === "/admin/";

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      {isMainDashboard ? <DashboardContent /> : <Outlet />}
    </div>
  );
};

export default AdminDashboard;