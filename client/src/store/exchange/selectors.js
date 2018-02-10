export const btcusd = state => state.getIn(['exchange', 'ticker', 'btcusd']);
export const btc = state => state.getIn(['exchange', 'balances', 'btc']);
export const usd = state => state.getIn(['exchange', 'balances', 'usd']);
export const loadingBalance = state => state.getIn(['exchange', 'balances', 'loading']);
export const loadingTicker = state => state.getIn(['exchange', 'ticker', 'loading']);
