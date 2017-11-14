import * as actions from "../actions";

const initialState = {
  currentBeer: [],
  loading: false
};

const beer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_BEER_REQUEST:
      return Object.assign({}, state, { loading: true });
    case actions.LOAD_BEER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        currentBeer: action.result.currentBeer.data
      });
    default:
      return state;
  }
};

export default beer;
