import React, { Component } from "react";
import { connect } from "react-redux";
import { loadBeerListRequest } from "../../actions/";
import BeerCard from "../BeerCardList";

export class Home extends Component {
  componentDidMount() {
    this.props.loadBeerListRequest();
    this.props.loadBeerListRequest();
    this.props.loadBeerListRequest();
  }

  loadMore = () => {
    this.props.loadBeerListRequest();
    this.props.loadBeerListRequest();
    this.props.loadBeerListRequest();
  };

  render() {
    const { list } = this.props;

    return <BeerCard list={list} loadMore={this.loadMore} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { list: state.beer.list };
};

const mapDispatchToProps = dispatch => ({
  loadBeerListRequest: () => dispatch(loadBeerListRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
