import React, { Component } from "react";
import { Switch, Route } from "react-router";
import DetailsPage from "../DetailsPage";
import Header from "../Header";
import BeerList from "../BeerList";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={BeerList} />
          <Route path="/beer/:id?" component={DetailsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
