import { call, put, takeLatest, all } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as actions from './actions';

import * as api from '../../api';

function* loadTickerRequest() {
  try {
    const btcusd = yield call(api.getTicker);
    yield put(actions.loadTickerSuccess(btcusd));
  } catch (e) {
    yield put(actions.loadTickerFailure());
  }
}

function* loadBalanceRequest() {
  try {
    const payload = yield call(api.loadBalance);
    yield put(actions.loadBalanceSuccess(payload));
  } catch (e) {
    yield put(actions.loadBalanceFailure());
  }
}

function* updateBalanceRequest(action) {
  try {
    const payload = yield call(api.updateBalance, action.payload);
    yield put(actions.updateBalanceSuccess(payload));
  } catch (e) {
    console.log(e);
  }
}

export default function* saga() {
  yield all([
    takeLatest(actionTypes.LOAD_TICKER_REQUEST, loadTickerRequest),
    takeLatest(actionTypes.LOAD_BALANCE_REQUEST, loadBalanceRequest),
    takeLatest(actionTypes.UPDATE_BALANCE_REQUEST, updateBalanceRequest),
  ]);
}
