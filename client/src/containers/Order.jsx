import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as mySelectors from '../store/exchange/selectors';
import * as myActions from '../store/exchange/actions';

import Orders from '../components/Orders';

const propTypes = {
  btcusd: PropTypes.number.isRequired,
  btc: PropTypes.number.isRequired,
  usd: PropTypes.number.isRequired,
  updateBalanceRequest: PropTypes.func.isRequired,
};

const Order = ({
  btcusd, btc, usd, updateBalanceRequest,
}) => (
  <Orders
    btcusd={btcusd}
    btc={btc}
    usd={usd}
    updateBalanceRequest={updateBalanceRequest}
  />
);

Order.propTypes = propTypes;

const mapStateToProps = createSelector(
  [mySelectors.btcusd, mySelectors.btc, mySelectors.usd],
  (btcusd, btc, usd) => ({ btcusd, btc, usd }),
);

const mapDispatchToProps = dispatch => ({
  updateBalanceRequest: (payload) => {
    dispatch(myActions.updateBalanceRequest(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
