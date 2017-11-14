import { fork, all } from "redux-saga/effects";
import { beerData } from "../sagas/";

export default function* rootSagas() {
  yield all([fork(beerData)]);
}
