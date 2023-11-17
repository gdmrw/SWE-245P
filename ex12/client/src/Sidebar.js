import "./Sidebar.css";

// External Libraries

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidenav">
        <Link to="/">Weather</Link>
        <Link to="seconddataview">Lexus</Link>
        <Link to="thirddataview">Dodge</Link>
      </div>
    </>
  );
}

export default Sidebar;