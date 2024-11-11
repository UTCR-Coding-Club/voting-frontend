import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="landing-page">
      <img
        className="utc-logo"
        src="./src/assets/UTC-reading-logo.png"
        alt="UTC Reading Logo"
      />
      <div className="btns-container">
        <button className="dashboard-btn">Student Login</button>
        <button className="dashboard-btn">Staff Login</button>
        <button className="dashboard-btn">Sign Up</button>
      </div>
    </div>
  );
}

export default Dashboard;
