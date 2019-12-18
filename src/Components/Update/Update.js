import React, { Component } from "react";
import axios from "axios";
import "./Update.css";

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: props.match.params.id,
      date: "",
      city: ""
    };
    this.updateStats = this.updateStats.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }
  updateStats = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const url = `https://super-bowl-api.herokuapp.com/superbowls/${this.state._id}`;
    console.log(url);
    axios
      .put(url, {
        date: this.state.date,
        city: this.state.city
      })
      .then(res => {
        console.log(res);
      })
      .then(alert("Game Updated"))
      .catch(err => console.log(err));
  };
  deleteHandler = e => {
    e.preventDefault();
    fetch(`https://super-bowl-api.herokuapp.com/superbowls/${this.state._id}`, {
      method: "DELETE"
    })
      .then(response => {
        console.log("response", response);
      })
      .then(alert("Game Deleted"))
      .catch(error => {
        console.log("error", error);
      });
  };
  render() {
    const { date, city } = this.state;
    return (
      <div className="update">
        <div>
          <h1>Update the Game</h1>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={date}
                onChange={this.updateStats}
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={this.updateStats}
              />
            </div>

            <button type="submit">Update</button>
          </form>
        </div>
        <div>
          <h1>Delete the Game</h1>
          <form onSubmit={this.deleteHandler}>
            <button type="submit">Delete</button>
          </form>
        </div>
      </div>
    );
  }
}
