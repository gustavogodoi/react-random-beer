import { fork, all } from "redux-saga/effects";
import { beerData, getBeerList } from "../sagas/";

export default function* rootSagas() {
  yield all([fork(beerData), fork(getBeerList)]);
}
