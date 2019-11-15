import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import { Route, Switch } from "react-router-dom";
import SBLIst from "./SBList/SBLIst";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/superbowls" exact component={SBLIst}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
