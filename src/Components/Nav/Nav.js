import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <nav>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
