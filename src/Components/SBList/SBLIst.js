import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SBList.css";

function SBLIst() {
  const [sbApi, setSbApi] = useState([]);
  useEffect(() => {
    if (sbApi.length === 0) {
      fetchApi();
    }
  });
  const url = "http://localhost:8080/superbowls";
  const fetchApi = async () => {
    const data = await fetch(url);
    const items = await data.json();
    console.log(items);
    const superbowls = items.map(item => item);
    setSbApi(superbowls);
  };
  const sortedBowls = sbApi.sort(function(a, b) {
    return a.super_bowl < b.super_bowl ? 1 : -1;
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
  const superbowls = sortedBowls.map(superbowl => (
    <Link to={"/superbowls/games/" + superbowl._id}>
      <div
        className="container-fluid background"
        key={superbowl.super_bowl}
        style={{
          backgroundImage: `url(${superbowl.venue.img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="info">
          {" "}
          <h4>
            Super Bowl {romanize(superbowl.super_bowl)} | '
            {superbowl.date.substr(2, 2)}
          </h4>
          <p>
            {superbowl.venue.name},
            <small>
              {" "}
              {superbowl.city}, {superbowl.state}
            </small>
          </p>
        </div>
        <div className="container teams d-flex justify-content-center align-items-center">
          <div className="col-5 winner d-flex flex-column align-items-end">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h5>{superbowl.teams[0].teamName} </h5>
              <img
                className="left-img"
                src={superbowl.teams[0].logo}
                alt={superbowl.teams[0].teamName + " Logo"}
                width="150"
                height="150"
              />
            </div>{" "}
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center versus">
            <h2>VS</h2>
          </div>
          <div className="col-5 loser d-flex flex-column align-items-start">
            <div className="d-flex flex-column justify-content-center align-items-center">
              {" "}
              <h5>{superbowl.teams[1].teamName} </h5>
              <img
                className="right-img"
                src={superbowl.teams[1].logo}
                alt={superbowl.teams[1].teamName + " Logo"}
                width="150"
                height="150"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  ));

  return <div className="sbList">{superbowls}</div>;
}

export default SBLIst;
