import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const initialState = fromJS({
  ticker: {
    btcusd: 0,
  },
  balances: {
    btc: 0,
    usd: 0,
  },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_TICKER_REQUEST:
      return state;
    case actionTypes.LOAD_TICKER_SUCCESS:
      return state.merge({
        ...state,
        ticker: fromJS({
          btcusd: action.payload.btcusd,
        }),
      });
    case actionTypes.LOAD_TICKER_FAILURE:
      return state;
    case actionTypes.LOAD_BALANCE_REQUEST:
      return state;
    case actionTypes.LOAD_BALANCE_SUCCESS:
      return state.merge({
        ...state,
        balances: fromJS({
          ...action.payload,
        }),
      });
    case actionTypes.LOAD_BALANCE_FAILURE:
      return state;
    case actionTypes.UPDATE_BALANCE_REQUEST:
      return state;
    case actionTypes.UPDATE_BALANCE_SUCCESS:
      return state.merge({
        ...state,
        balances: fromJS({
          ...action.payload,
        }),
      });
    default:
      return state;
  }
}
