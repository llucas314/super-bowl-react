import React, { Component } from "react";
import axios from "axios";

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      super_bowl: 53,
      venue: {
        name: ""
      },
      city: "",
      state: ""
    };
    this.updateStats = this.updateStats.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  updateStats = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const url = `http://localhost:8080/superbowls`;
    console.log(url);
    axios
      .post(url, {
        date: this.state.date,
        city: this.state.city,
        state: this.state.state,
        super_bowl: this.state.super_bowl,
        venue: { name: this.state.venue.name }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { date, city, state, super_bowl, venue } = this.state;
    return (
      <div>
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
              placeholder="Super Bowl"
              value={super_bowl}
              onChange={this.updateStats}
            />
          </div>
          <div>
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={venue.name}
              onChange={this.updateStats}
            />
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}
