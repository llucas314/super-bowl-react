import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../images/lombardi.png";

function Nav() {
  return (
    <div className="nav d-flex align-items-center">
      <nav>
        <Link to="/" className="link d-flex align-items-center">
          <img src={logo} alt="Super Bowl Center Logo" />
          <h2>Super Bowl Center</h2>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
