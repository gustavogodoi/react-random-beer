export const LOAD_BEER_REQUEST = "LOAD_BEER_REQUEST";
export const LOAD_BEER_SUCCESS = "LOAD_BEER_SUCCESS";

export const loadBeerRequest = () => ({
  type: LOAD_BEER_REQUEST
});

export const loadBeerSuccess = result => ({
  type: LOAD_BEER_SUCCESS,
  result
});
