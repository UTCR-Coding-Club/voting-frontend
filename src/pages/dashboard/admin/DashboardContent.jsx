import "./DashboardContent.css";

const DashboardContent = () => {
  return (
    <div className="dashboard-content-container">
      <div className="header-container">
        <div className="header-left">
          <h1>Dashboard</h1>
          <h2>Current Overview</h2>
        </div>
        <button className="create-vote-button">
          <span>+</span>
          <span>Create Vote</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardContent;