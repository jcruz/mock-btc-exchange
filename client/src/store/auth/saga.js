import { call, put, takeLatest, all } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as actions from './actions';

import * as api from '../../utils/api';
import * as utils from '../../utils';

function* signInRequest(action) {
  try {
    const jwt = yield call(api.signIn, action.payload);
    yield call(utils.setItemLocalStorage, 'jwt', jwt);
    yield put(actions.signInSuccess(jwt));
  } catch (e) {
    yield put(actions.signInFailure());
  }
}

function* registerRequest(action) {
  try {
    yield call(api.register, action.payload);
    yield put(actions.registerSuccess());
    yield put(actions.signInRequest(action.payload));
  } catch (e) {
    yield put(actions.registerFailure());
  }
}

function* signOutRequest() {
  try {
    yield call(utils.removeItemLocalStorage, 'jwt');
    yield put(actions.signOutSuccess());
  } catch (e) {
    yield put(actions.signOutFailure());
  }
}

export default function* saga() {
  yield all([
    takeLatest(actionTypes.SIGN_IN_REQUEST, signInRequest),
    takeLatest(actionTypes.REGISTER_REQUEST, registerRequest),
    takeLatest(actionTypes.SIGN_OUT_REQUEST, signOutRequest),
  ]);
}
