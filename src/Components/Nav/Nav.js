import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
