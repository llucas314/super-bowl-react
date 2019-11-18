import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container-fluid home">
      <div className="row title">
        <div className="col-12 d-flex justify-content-center align-items-center sub">
          <div className="text">
            <p>ALL THE</p>
            <b>
              <div className="rotate">
                GAMES!
                <br />
                PERFORMANCES!
                <br />
                STATS!
                <br />
                FUN!
                <br />
              </div>
            </b>
          </div>
        </div>
      </div>
      <div className="row main">
        <div className="col-4 player"></div>
        <div className="col-8 info d-flex justify-content-start ">
          <div className="border-outer">
            <div className="border-inner">
              <h2>THE SUPER BOWL</h2>
              <p>
                The annual championship game of the National Football League has
                been held since 1967. The winning teams from the National
                Football Conference and the American Football Conference compete
                for the coveted Vince Lombardi Trophy. The Super Bowl's
                popularity has turned game days into unofficial holiday in the
                United States that boasts the most-watched television broadcast
                of the year and second-largest day for U.S. food consumption,
                just behind Thanksgiving.
              </p>

              <Link to="/superbowls">
                <button className="btn">See All The Games</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
