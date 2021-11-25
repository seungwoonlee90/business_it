import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="gnb">
        <Link to="/" className="nav-icon">
          <span className="material-icons">home</span>
        </Link>
        <Link to="/about" className="nav-icon">
          <span className="material-icons">pets</span>
        </Link>
        <Link to="/signin" className="nav-icon">
          <span className="material-icons">account_circle</span>
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
