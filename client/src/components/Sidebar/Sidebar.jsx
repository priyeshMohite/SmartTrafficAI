import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>MENU</h3>

      <ul>
        <li>Dashboard</li>
        <li>Live Traffic</li>
        <li>Traffic Police</li>
        <li>Ambulance Routes</li>
        <li>Parking Lots</li>
        <li>Alternate Routes</li>
        <li>Accident Management</li>
        <li>Pothole Detection</li>
        <li>Analytics</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;