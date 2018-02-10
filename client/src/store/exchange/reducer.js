import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const initialState = fromJS({
  ticker: {
    btcusd: 0,
    loading: true,
  },
  balances: {
    btc: 0,
    usd: 0,
    loading: true,
  },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_TICKER_REQUEST:
      return state.mergeDeep({
        ticker: fromJS({
          loading: true,
        }),
      });
    case actionTypes.LOAD_TICKER_SUCCESS:
      return state.merge({
        ticker: fromJS({
          btcusd: action.payload.btcusd,
          loading: false,
        }),
      });
    case actionTypes.LOAD_TICKER_FAILURE:
      return state.mergeDeep({
        ticker: fromJS({
          loading: false,
        }),
      });
    case actionTypes.LOAD_BALANCE_REQUEST:
      return state.mergeDeep({
        balances: fromJS({
          loading: true,
        }),
      });
    case actionTypes.LOAD_BALANCE_SUCCESS:
      return state.merge({
        balances: fromJS({
          ...action.payload,
          loading: false,
        }),
      });
    case actionTypes.LOAD_BALANCE_FAILURE:
      return state.merge({
        balances: fromJS({
          ...action.payload,
          loading: false,
        }),
      });
    case actionTypes.UPDATE_BALANCE_REQUEST:
      return state.mergeDeep({
        balances: fromJS({
          loading: true,
        }),
      });
    case actionTypes.UPDATE_BALANCE_SUCCESS:
      return state.mergeDeep({
        balances: fromJS({
          ...action.payload,
          loading: false,
        }),
      });
    case actionTypes.UPDATE_BALANCE_FAILURE:
      return state.mergeDeep({
        balances: fromJS({
          loading: false,
        }),
      });
    default:
      return state;
  }
}
