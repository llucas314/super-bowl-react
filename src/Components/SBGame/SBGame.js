import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./SBGame.css";
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
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="games">
          <div className="name-date container-fluid d-flex justify-content-between">
            <div className="col-4 d-flex justify-content-center align-items-center">
              <p>
                {sbApi.venue.name},
                <small>
                  {" "}
                  {sbApi.city}, {sbApi.state}
                </small>
              </p>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <h1 className="title">Superbowl {romanize(sbApi.super_bowl)}</h1>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <small className="date">Game Date | {sbApi.date}</small>
            </div>
          </div>
          <div className="container-fluid d-flex justify-content-around align-items-center">
            {/* Winning Team */}
            <div className="col-5 d-flex justify-content-between align-items-center">
              <div className="card-body">
                <h5 className="card-title">{sbApi.teams[0].teamName}</h5>
                <p className="card-text">
                  Total points: {sbApi.winning_pts}
                  <br />
                  Coach: {sbApi.coach_winner}
                  <br />
                  Quarterback: {sbApi.qb_winner[0]}
                </p>
                <button href="#" className="btn ">
                  See More
                </button>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={sbApi.teams[0].logo}
                  alt={sbApi.teams[0].teamName + " Logo"}
                />
              </div>
            </div>
            {/* Seperator */}
            <div className="col-2 d-flex justify-content-center versus">
              <h1>VS</h1>
            </div>
            {/* Losing Team */}
            <div className="col-5 d-flex justify-content-between align-items-center">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={sbApi.teams[1].logo}
                  alt={sbApi.teams[1].teamName + " Logo"}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{sbApi.teams[1].teamName}</h5>
                <p className="card-text">
                  Total points: {sbApi.losing_pts}
                  <br />
                  Coach: {sbApi.coach_loser}
                  <br />
                  Quarterback: {sbApi.qb_loser[0]}
                </p>
                <button href="#" className="btn ">
                  See More
                </button>
              </div>
            </div>
          </div>
          {/* Game facts */}
          <div className="jumbotron jumbotron-fluid facts">
            <div className="container">
              <h1 className="display-4">Game Information</h1>
              <div className="d-flex justify-content-around align-items-center">
                <p className="lead">
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
                {sbApi.halftimePerformer.length > 1 ? (
                  <p className="lead">
                    Pregame & Halftime Performers:{" "}
                    <div className=" performers">
                      {" "}
                      {sbApi.halftimePerformer.map(performance => (
                        <>
                          {performance.musician}
                          <br />
                        </>
                      ))}
                    </div>
                  </p>
                ) : (
                  <p>
                    Halftime Performer: {sbApi.halftimePerformer[0].musician}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SBGame;
