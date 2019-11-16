import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
function SBGame(props) {
  const [sbApi, setSbApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (sbApi.length === 0) {
      fetchApi();
    }
  });
  function romanize(num) {
    if (isNaN(num)) return NaN;
    let digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX"
      ],
      roman = "",
      i = 3;
    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }

  const url = `http://localhost:8080/superbowls/${props.match.params.id}`;
  const fetchApi = async () => {
    const data = await fetch(url);
    const items = await data.json();
    console.log(items);
    // const superbowls = items.map(item => item);
    setSbApi(items);
    setIsLoading(false);
  };
  return (
    <div>
      {" "}
      {isLoading ? (
        <div
          className="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          .
          <div class="container-fluid d-flex justify-content-center">
            <h1>Superbowl {romanize(sbApi.super_bowl)}</h1>
          </div>
          <div className="name-date container-fluid d-flex justify-content-between">
            <p>
              {sbApi.venue.name},
              <small>
                {" "}
                {sbApi.city}, {sbApi.state}
              </small>
            </p>
            <small>Game Date | {sbApi.date}</small>
          </div>
          <div className="container-fluid d-flex justify-content-around align-items-center">
            {/* Winning Team */}
            <div class="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={sbApi.teams[0].logo}
                alt={sbApi.teams[0].teamName + " Logo"}
              />
              <div class="card-body">
                <h5 class="card-title">{sbApi.teams[0].teamName}</h5>
                <p class="card-text">
                  Total points: {sbApi.winning_pts}
                  <br />
                  Coach: {sbApi.coach_winner}
                  <br />
                  Quarterback: {sbApi.qb_winner[0]}
                </p>
                <button href="#" class="btn btn-primary">
                  See More
                </button>
              </div>
            </div>
            {/* Seperator */}
            <div className="versus">
              <h1>VS</h1>
            </div>
            {/* Losing Team */}
            <div class="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={sbApi.teams[1].logo}
                alt={sbApi.teams[1].teamName + " Logo"}
              />

              <div class="card-body">
                <h5 class="card-title">{sbApi.teams[1].teamName}</h5>
                <p class="card-text">
                  Total points: {sbApi.losing_pts}
                  <br />
                  Coach: {sbApi.coach_loser}
                  <br />
                  Quarterback: {sbApi.qb_loser[0]}
                </p>
                <button href="#" class="btn btn-primary">
                  See More
                </button>
              </div>
            </div>
          </div>
          {/* Game facts */}
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Game Information</h1>
              <p class="lead">
                Superbowl Number: {sbApi.super_bowl}
                <br />
                Total Game Points: {sbApi.combined_pts} | Point Difference:{" "}
                {sbApi.difference_pts}
                <br />
                Network: {sbApi.viewer.network}
                <br />
                Viewer Estimate:{" "}
                {sbApi.viewer.avg_us_viewers
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                people
                <br />
                Average Ad Cost: $
                {sbApi.viewer.ad_cost
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SBGame;
