import * as actionTypes from './actionTypes';

export function loadTickerRequest() {
  return {
    type: actionTypes.LOAD_TICKER_REQUEST,
  };
}

export function loadTickerSuccess(btcusd) {
  return {
    type: actionTypes.LOAD_TICKER_SUCCESS,
    payload: { btcusd },
  };
}

export function loadTickerFailure() {
  return {
    type: actionTypes.LOAD_TICKER_FAILURE,
  };
}

export function loadBalanceRequest() {
  return {
    type: actionTypes.LOAD_BALANCE_REQUEST,
  };
}

export function loadBalanceSuccess(payload) {
  return {
    type: actionTypes.LOAD_BALANCE_SUCCESS,
    payload: { ...payload },
  };
}

export function loadBalanceFailure() {
  return {
    type: actionTypes.LOAD_BALANCE_FAILURE,
  };
}

export function updateBalanceRequest(payload) {
  return {
    type: actionTypes.UPDATE_BALANCE_REQUEST,
    payload: { ...payload },
  };
}

export function updateBalanceSuccess(payload) {
  return {
    type: actionTypes.UPDATE_BALANCE_SUCCESS,
    payload: { ...payload },
  };
}

export function updateBalanceFailure() {
  return {
    type: actionTypes.UPDATE_BALANCE_FAILURE,
  };
}
