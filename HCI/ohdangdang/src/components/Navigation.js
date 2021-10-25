import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="gnb">
        <Link to="/" className="cover mouse-effect active">
          <span class="material-icons">favorite</span>
        </Link>
        <Link to="/signin" className="issue mouse-effect active">
          <span class="material-icons">account_circle</span>
        </Link>
        <Link to="/about" className="like mouse-effect active">
          <span class="material-icons">help</span>
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
