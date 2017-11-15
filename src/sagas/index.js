import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { getBeer } from "../api/beerApi";
import * as actions from "../actions";

export function* getBeerData() {
  try {
    const currentBeer = yield call(getBeer);
    yield put(actions.loadBeerSuccess({ currentBeer }));
  } catch (error) {}
}

export function* beerData() {
  yield takeLatest(actions.LOAD_BEER_REQUEST, getBeerData);
}

export function* fetchBeerList() {
  try {
    const newBeer = yield call(getBeer);
    yield put(actions.loadBeerList({ newBeer }));
  } catch (error) {}
}

export function* getBeerList() {
  yield takeEvery(actions.LOAD_BEER_LIST_REQUEST, fetchBeerList);
}
