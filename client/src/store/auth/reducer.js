import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const initialState = fromJS({
  isSignedIn: false,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN_REQUEST:
      return state;
    case actionTypes.SIGN_IN_SUCCESS:
      return state.merge({
        ...state,
        isSignedIn: fromJS(true),
      });
    case actionTypes.SIGN_IN_FAILURE:
      return state;
    case actionTypes.REGISTER_REQUEST:
      return state;
    case actionTypes.REGISTER_SUCCESS:
      return state;
    case actionTypes.REGISTER_FAILURE:
      return state;
    case actionTypes.SIGN_OUT_REQUEST:
      return state;
    case actionTypes.SIGN_OUT_SUCCESS:
      return state.merge({
        ...state,
        isSignedIn: fromJS(false),
      });
    default:
      return state;
  }
}
