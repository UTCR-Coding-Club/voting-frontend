import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";

import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default AdminDashboard;
