import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <h1>Super Bowl Center</h1>
      </div>
      <div className="row d-flex justify-content-center">
        <p>All the games! All the performances! All in one place!</p>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center space-evenly">
          <h2>See all games</h2>
          <Link to="/superbowls">
            <h2 className="btn btn-success">Search</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
