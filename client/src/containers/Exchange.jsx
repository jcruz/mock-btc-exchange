import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as mySelectors from '../store/exchange/selectors';
import * as myActions from '../store/exchange/actions';
import { formatNumber } from '../utils';

import Ticker from './Ticker';

class Exchange extends Component {
  componentDidMount() {
    this.props.loadBalanceRequest();
  }

  _handleBuySell = () => {
    const { btcusd, btc, usd } = this.props;
    let payload = {btc, usd};
    if (btc === 0) {
      payload = {usd: 0, btc: usd/btcusd};
    } else if (usd === 0) {
      payload = {usd: btc*btcusd, btc: 0};
    }
    this.props.updateBalanceRequest(payload);
  }

  render() {
    const { btc, usd } = this.props;
    const buySellLabel = (btc === 0) ? 'Buy' : 'Sell';
    return (
      <div>
        <p>USD Balance</p>
        <p>${formatNumber(usd, 2)}</p>
        <p>BTC Balance</p>
        <p>{formatNumber(btc, 8)} BTC</p>
        <br />
        <Ticker />
        <button onClick={this._handleBuySell}>
          {buySellLabel}
        </button>
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  [mySelectors.btcusd, mySelectors.btc, mySelectors.usd],
  (btcusd, btc, usd) => ({ btcusd, btc, usd })
);

const mapDispatchToProps = (dispatch) => {
  return {
    loadBalanceRequest: () => {
      dispatch(myActions.loadBalanceRequest());
    },
    updateBalanceRequest: (payload) => {
      dispatch(myActions.updateBalanceRequest(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exchange);
