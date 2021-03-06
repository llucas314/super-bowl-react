import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import { Route, Switch } from "react-router-dom";
import SBLIst from "./SBList/SBLIst";
import SBGame from "./SBGame/SBGame";
import Update from "./Update/Update";
import Create from "./Create/Create";

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/superbowls" exact component={SBLIst}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route
            path="/superbowls/games/:id"
            render={props => <SBGame {...props} />}
          ></Route>
          <Route
            path="/superbowls/update/:id"
            render={props => <Update {...props} />}
          ></Route>
          <Route
            path="/superbowls/create"
            render={props => <Create {...props} />}
          ></Route>
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
