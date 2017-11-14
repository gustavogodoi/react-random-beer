import { call, put, takeLatest } from "redux-saga/effects";
import { getBeer } from "../api/beerApi";
import * as actions from "../actions/index";

export function* getBeerData({ params }) {
  try {
    const currentBeer = yield call(getBeer);
    yield put(actions.loadBeerSuccess({ currentBeer }));
  } catch (error) {}
}

export function* beerData() {
  yield takeLatest(actions.LOAD_BEER_REQUEST, getBeerData);
}
