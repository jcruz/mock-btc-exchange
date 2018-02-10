import * as actionTypes from './actionTypes';

export function signInRequest(payload) {
  return {
    type: actionTypes.SIGN_IN_REQUEST,
    payload: { ...payload },
  };
}

export function signInSuccess(jwt) {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: { jwt },
  };
}

export function signInFailure() {
  return {
    type: actionTypes.SIGN_IN_FAILURE,
  };
}

export function registerRequest(payload) {
  return {
    type: actionTypes.REGISTER_REQUEST,
    payload: { ...payload },
  };
}

export function registerSuccess() {
  return {
    type: actionTypes.REGISTER_SUCCESS,
  };
}

export function registerFailure() {
  return {
    type: actionTypes.REGISTER_FAILURE,
  };
}

export function signOutRequest() {
  return {
    type: actionTypes.SIGN_OUT_REQUEST,
  };
}

export function signOutSuccess() {
  return {
    type: actionTypes.SIGN_OUT_SUCCESS,
  };
}

export function signOutFailure() {
  return {
    type: actionTypes.SIGN_OUT_FAILURE,
  };
}

export function showEmailError(payload) {
  return {
    type: actionTypes.EMAIL_SHOW_ERROR,
    payload: { ...payload },
  };
}

export function hideEmailError() {
  return {
    type: actionTypes.EMAIL_HIDE_ERROR,
  };
}

export function showPasswordError(payload) {
  return {
    type: actionTypes.PASSWORD_SHOW_ERROR,
    payload: { ...payload },
  };
}

export function hidePasswordError() {
  return {
    type: actionTypes.PASSWORD_HIDE_ERROR,
  };
}
