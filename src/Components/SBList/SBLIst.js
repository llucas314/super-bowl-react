import React, { useState, useEffect } from "react";

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
    <div
      className="container"
      key={superbowl.super_bowl}
      style={{
        backgroundImage: `url(${superbowl.venue.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h4>Super Bowl {romanize(superbowl.super_bowl)}</h4>
      <p>
        {superbowl.venue.name},
        <small>
          {" "}
          {superbowl.city}, {superbowl.state}
        </small>
      </p>
      <div className="container">
        <h5>
          {superbowl.teams[0].teamName}{" "}
          <img
            src={superbowl.teams[0].logo}
            alt={superbowl.teams[0].teamName + " Logo"}
            width="150"
            height="150"
          />{" "}
          VS {superbowl.teams[1].teamName}{" "}
          <img
            src={superbowl.teams[1].logo}
            alt={superbowl.teams[1].teamName + " Logo"}
            width="150"
            height="150"
          />
        </h5>
      </div>
    </div>
  ));

  return <div>{superbowls}</div>;
}

export default SBLIst;
