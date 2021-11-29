import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="gnb">
        <Link to="/" className="nav-icon">
          <span className="material-icons">home</span>
        </Link>
        <Link to="/daily" className="nav-icon">
          <span className="material-icons">pets</span>
        </Link>
        <Link to="/ai" className="nav-icon">
          <span className="material-icons">auto_awesome</span>
        </Link>
        <Link to="/calander" className="nav-icon">
          <span className="material-icons">event_available</span>
        </Link>
        <Link to="/signin" className="nav-icon">
          <span className="material-icons">person</span>
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
