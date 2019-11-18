import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../images/lombardi.png";

function Nav() {
  return (
    <div className="row nav">
      <nav className=" container d-flex align-items-center justify-content-between">
        <Link to="/" className="link d-flex align-items-center">
          <img src={logo} alt="Super Bowl Center Logo" />
          <h2>Super Bowl Center</h2>
        </Link>

        <div className="d-flex justify-content-around align-items-center">
          <Link to="/superbowls" className="link d-flex align-items-center">
            <h2>Games</h2>
          </Link>{" "}
          <h2>|</h2>
          <Link
            to="/superbowls/create"
            className="link d-flex align-items-center"
          >
            <h2>Add A New Game</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
