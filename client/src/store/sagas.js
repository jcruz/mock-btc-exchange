import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import exchange from './exchange';

export default function* sagas() {
  yield all([
    fork(auth.saga),
    fork(exchange.saga),
  ]);
}
