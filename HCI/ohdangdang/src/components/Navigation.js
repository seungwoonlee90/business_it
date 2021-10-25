import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="gnb">
        <Link to="/" className="cover mouse-effect active">
          <img
            src="https://raw.githubusercontent.com/anjihhg/billy_htmlcss/2c3e87f182df920a4eb166e0dbda6658dc6fa0eb/img/icon/like.svg"
            alt="cover"
          />
        </Link>
        <Link to="/signin" className="issue mouse-effect">
          <img
            src="https://raw.githubusercontent.com/anjihhg/billy_htmlcss/2c3e87f182df920a4eb166e0dbda6658dc6fa0eb/img/icon/issue.svg"
            alt="issue"
          />
        </Link>
        <Link to="/about" className="like mouse-effect">
          <img
            src="https://raw.githubusercontent.com/anjihhg/billy_htmlcss/2c3e87f182df920a4eb166e0dbda6658dc6fa0eb/img/icon/cover.svg"
            alt="issue"
          />
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
