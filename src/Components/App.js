import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
