import React, { Component } from "react";
import axios from "axios";
import logo from "../../images/nfl-3644686_640.png";
import "./Create.css";

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      super_bowl: null,
      venueName: "",
      city: "",
      state: "",
      teamOne: "",
      teamTwo: ""
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
    console.log(url);
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
      .then(res => {
        console.log(res);
      })
      .then(alert("Game Created"))
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
          <div>
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={date}
              onChange={this.updateStats}
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={this.updateStats}
            />
          </div>
          <div>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={state}
              onChange={this.updateStats}
            />
          </div>
          <div>
            <input
              type="text"
              name="super_bowl"
              placeholder="Super Bowl Number"
              value={super_bowl}
              onChange={this.updateStats}
            />
          </div>
          <div>
            <input
              type="text"
              name="venueName"
              placeholder="Venue"
              value={venueName}
              onChange={this.updateStats}
            />
          </div>
          <div>
            <input
              type="text"
              name="teamOne"
              placeholder="Team One"
              value={teamOne}
              onChange={this.updateStats}
            />
          </div>
          <div>
            <input
              type="text"
              name="teamTwo"
              placeholder="Team Two"
              value={teamTwo}
              onChange={this.updateStats}
            />
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}
