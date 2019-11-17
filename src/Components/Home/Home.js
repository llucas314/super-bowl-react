import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container-fluid home">
      <div className="row">
        <div className="col-12 d-flex justify-content-center title">
          <h1>Super Bowl Center</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center sub">
          <h5>All the games! All the performances! All in one place!</h5>
        </div>
      </div>
      <div className="row main">
        <div className="col-4 player"></div>
        <div className="col-8 info d-flex justify-content-center">
          <h2>The Super Bowl</h2>
          <p>
            The annual championship game of the National Football League has
            been held since 1967. The winning teams from the National Football
            Conference and the American Football Conference compete for the
            coveted Vince Lombardi Trophy. The Super Bowl's popularity has
            turned game days into unofficial holiday in the United States that
            boasts the most-watched television broadcast of the year and
            second-largest day for food consumption in the U.S, just behind
            Thanksgiving.
          </p>

          <Link to="/superbowls">
            <button className="btn btn-success">See All The Games</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
