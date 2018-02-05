export const btcusd = state => state.getIn(['exchange', 'ticker', 'btcusd']);
export const btc = state => state.getIn(['exchange', 'balances', 'btc']);
export const usd = state => state.getIn(['exchange', 'balances', 'usd']);
