import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const initialState = fromJS({
  isSignedIn: false,
  emailError: '',
  passwordError: '',
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN_REQUEST:
      return state;
    case actionTypes.SIGN_IN_SUCCESS:
      return state.merge({
        isSignedIn: fromJS(true),
      });
    case actionTypes.SIGN_IN_FAILURE:
      return state.merge({
        emailError: fromJS('Invalid email/password'),
        passwordError: fromJS('Invalid email/password'),
      });
    case actionTypes.REGISTER_REQUEST:
      return state;
    case actionTypes.REGISTER_SUCCESS:
      return state;
    case actionTypes.REGISTER_FAILURE:
      return state.merge({
        emailError: fromJS('Email already taken'),
        passwordError: fromJS(''),
      });
    case actionTypes.SIGN_OUT_REQUEST:
      return state;
    case actionTypes.SIGN_OUT_SUCCESS:
      return state.merge({
        isSignedIn: fromJS(false),
      });
    case actionTypes.SIGN_OUT_FAILURE:
      return state;
    case actionTypes.EMAIL_SHOW_ERROR:
      return state.merge({
        emailError: fromJS(action.payload.emailError),
      });
    case actionTypes.EMAIL_HIDE_ERROR:
      return state.merge({
        emailError: fromJS(''),
      });
    case actionTypes.PASSWORD_SHOW_ERROR:
      return state.merge({
        passwordError: fromJS(action.payload.passwordError),
      });
    case actionTypes.PASSWORD_HIDE_ERROR:
      return state.merge({
        passwordError: fromJS(''),
      });
    default:
      return state;
  }
}
