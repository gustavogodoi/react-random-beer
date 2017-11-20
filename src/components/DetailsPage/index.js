import React, { Component } from "react";
import { connect } from "react-redux";
import { loadBeerRequest } from "../../actions/";
import BeerDetails from "../BeerDetails";

export class DetailsPage extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      if (this.props.match.params.id) {
        // if list is empty
        this.props.history.push("/");
        // todo: load the beer instead of redirecting to the list
      } else {
        this.props.loadBeerRequest();
      }
    }
  }

  loadNewBeer = () => {
    this.props.loadBeerRequest();
  };

  render() {
    const beerId = this.props.match.params.id;
    let beer = {};
    if (this.props.list.length && beerId) {
      beer = this.props.list.filter(beerFilter => beerFilter.id === beerId)[0];
    } else {
      beer = this.props.currentBeer;
    }

    return (
      <div>
        <BeerDetails currentBeer={beer} loadNewBeer={this.loadNewBeer} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentBeer: state.beer.currentBeer,
    list: state.beer.list
  };
};

const mapDispatchToProps = dispatch => ({
  loadBeerRequest: () => dispatch(loadBeerRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
