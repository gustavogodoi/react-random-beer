import React, { Component } from "react";
import { connect } from "react-redux";
import { loadBeerRequest } from "../../actions/";
import Header from "../Header";
import BeerDetails from "../BeerDetails";

export class Home extends Component {
  componentWillMount() {
    this.props.loadBeerRequest();
  }

  loadNewBeer = () => {
    this.props.loadBeerRequest();
  };

  render() {
    const { currentBeer } = this.props;

    return (
      <div>
        <Header />

        <BeerDetails currentBeer={currentBeer} loadNewBeer={this.loadNewBeer} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { currentBeer: state.beer.currentBeer };
};

const mapDispatchToProps = dispatch => ({
  loadBeerRequest: () => dispatch(loadBeerRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
