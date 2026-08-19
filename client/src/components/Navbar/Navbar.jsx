import "./Navbar.css";
import { FaTrafficLight } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";

function Navbar() {

  const today = new Date();

  return (

    <nav className="navbar">

      <div className="logo">

        <FaTrafficLight size={34} color="#38bdf8"/>

        <div>

          <h2>Smart Traffic AI</h2>

          <span>Traffic Command Center</span>

        </div>

      </div>

      <div className="navbar-right">

        <div className="live-status">

          <span className="live-dot"></span>

          LIVE

        </div>

        <div className="date">

          {today.toLocaleDateString()}

        </div>

        <div className="time">

          {today.toLocaleTimeString()}

        </div>

        <FiBell className="bell"/>

        <div className="admin">

          <MdAdminPanelSettings size={28}/>

          <span>Admin</span>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;