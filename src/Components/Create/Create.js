import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import logo from "../../images/nfl-3644686_640.png";
import "./Create.css";

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      super_bowl: 53,
      venueName: "Arrowhead Stadium",
      city: "",
      state: "Alabama",
      teamOne: "Arizona Cardinals",
      teamTwo: "Atlanta Falcons",
      statesList: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      teamsList: [
        "Arizona Cardinals",
        "Atlanta Falcons",
        "Baltimore Ravens",
        "Buffalo Bills",
        "Carolina Panthers",
        "Chicago Bears",
        "Cincinnati Bengals",
        "Cleveland Browns",
        "Dallas Cowboys",
        "Denver Broncos",
        "Detroit Lions",
        "Green Bay Packers",
        "Houston Texans",
        "Indianapolis Colts",
        "Jacksonville Jaguars",
        "Kansas City Chiefs",
        "Los Angeles Chargers",
        "Los Angeles Rams",
        "Miami Dolphins",
        "Minnesota Vikings",
        "New England Patriots",
        "New Orleans Saints",
        "New York Giants",
        "New York Jets",
        "Oakland Raiders",
        "Philadelphia Eagles",
        "Pittsburgh Steelers",
        "San Francisco 49ers",
        "Seattle Seahawks",
        "Tampa Bay Buccaneers",
        "Tennessee Titans",
        "Washington Redskins"
      ],
      stadiums: [
        "Arrowhead Stadium",
        "Everbank Field",
        "Gillette Stadium",
        "Hard Rock Stadium",
        "Heinz Field",
        "Lucas Oil Stadium",
        "M&T Bank Stadium",
        "MetLife Stadium",
        "AFC New Era Field",
        "Nissan Stadium",
        "NRG Stadium",
        "Oakland Coliseum",
        "Paul Brown Stadium",
        "Sports Authority Field",
        "Stubhub Center",
        "AT&T Stadium",
        "Bank of America Stadium",
        "CenturyLink Field",
        "FedEx Field",
        "Ford Field",
        "Lincoln Financial Field",
        "Los Angeles Coliseum",
        "Levi's Stadium",
        "Mercedes-Benz Stadium",
        "Mercedes-Benz Superdome",
        " MetLife Stadium",
        "Raymond James Stadium",
        "Soldier Field",
        "Univeristy of Phoenix Stadium",
        "US Bank Stadium"
      ]
    };

    this.updateStats = this.updateStats.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  updateStats = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const url = `https://super-bowl-api.herokuapp.com/superbowls`;
    axios
      .post(url, {
        venue: {
          name: this.state.venueName,
          img:
            "https://uberblogapi.10upcdn.com/wp-content/uploads/2018/08/nrg-stadium-1080x540.jpg"
        },
        qb_winner: ["TBD", ""],
        qb_loser: ["TBD", ""],

        date: this.state.date,
        super_bowl: this.state.super_bowl,
        city: this.state.city,
        state: this.state.state,
        attendance: 0,
        teams: [
          {
            teamName: this.state.teamOne,
            winner: true,
            logo: logo,
            website: "www.nfl.com"
          },
          {
            teamName: this.state.teamTwo,
            winner: false,
            logo: logo,
            website: "www.nfl.com"
          }
        ],
        winning_pts: 0,
        coach_winner: "",
        losing_pts: 0,
        coach_loser: "",
        combined_pts: 0,
        difference_pts: 0,
        halftimePerformer: [
          {
            super_bowl: this.state.super_bowl,
            musician: "",
            num_songs: 0
          }
        ],

        viewer: {
          super_bowl: this.state.super_bowl,
          network: "",
          avg_us_viewers: 0,
          total_us_viewers: 0,
          rating_household: 0,
          ad_cost: 5000000
        }
      })
      .then(() => {
        alert("Game Created");
        return () => <Redirect to="/superbowls" />;
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      date,
      city,
      state,
      super_bowl,
      venueName,
      teamOne,
      teamTwo
    } = this.state;
    return (
      <div className="create">
        <h1>Create A New Game</h1>
        <form onSubmit={this.submitHandler}>
          <div className="form-container">
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={date}
              onChange={this.updateStats}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={this.updateStats}
              required
            />
            <select
              name="state"
              placeholder="State"
              value={state}
              onChange={this.updateStats}
              required
            >
              {this.state.statesList.map(stateName => (
                <option value={stateName} key={stateName}>
                  {stateName}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="super_bowl"
              placeholder="Super Bowl Number"
              min="1"
              max="100"
              value={super_bowl}
              onChange={this.updateStats}
              required
            />
            <select
              name="venueName"
              placeholder="Venue"
              value={venueName}
              onChange={this.updateStats}
              required
            >
              {this.state.stadiums.map(stadium => (
                <option key={stadium} value={stadium}>
                  {stadium}
                </option>
              ))}
            </select>
            <select
              name="teamOne"
              placeholder="Team One"
              value={teamOne}
              onChange={this.updateStats}
              required
            >
              {this.state.teamsList.map(team => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
            <select
              name="teamTwo"
              placeholder="Team Two"
              value={teamTwo}
              onChange={this.updateStats}
              required
            >
              {" "}
              {this.state.teamsList.map(team => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>

          <input className="submit-button" type="submit" value="Update" />
        </form>
      </div>
    );
  }
}
