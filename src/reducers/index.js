import * as actions from "../actions";

const initialState = {
  currentBeer: {},
  list: [],
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
    case actions.CLEAR_CURRENT_BEER:
      return Object.assign({}, state, {
        currentBeer: {}
      });
    case actions.LOAD_BEER_LIST:
      const currentList = Object.assign([], state.list);
      currentList.push(action.result.newBeer.data);
      return Object.assign({}, state, {
        list: currentList
      });
    default:
      return state;
  }
};

export default beer;
