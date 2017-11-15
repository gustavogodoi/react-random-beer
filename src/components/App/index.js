import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Home from "../Home";
import Header from "../Header";
import BeerList from "../BeerList";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={BeerList} />
        </Switch>
      </div>
    );
  }
}

export default App;
