import "./Sidebar.css";

// External Libraries

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidenav">
        <Link to="/">Introduction</Link>
        <Link to="exampledataview">Tutorial</Link>
      </div>
    </>
  );
}

export default Sidebar;