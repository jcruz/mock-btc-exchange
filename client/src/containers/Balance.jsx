import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as mySelectors from '../store/exchange/selectors';
import * as myActions from '../store/exchange/actions';

import Balances from '../components/Balances';

const propTypes = {
  btc: PropTypes.number.isRequired,
  usd: PropTypes.number.isRequired,
  loadBalanceRequest: PropTypes.func.isRequired,
  loadingBalance: PropTypes.bool.isRequired,
};

class Balance extends Component {
  componentWillMount() {
    this.props.loadBalanceRequest();
  }

  render() {
    const { btc, usd, loadingBalance } = this.props;
    return <Balances btc={btc} usd={usd} loadingBalance={loadingBalance} />;
  }
}

Balance.propTypes = propTypes;

const mapStateToProps = createSelector(
  [mySelectors.btc, mySelectors.usd, mySelectors.loadingBalance],
  (btc, usd, loadingBalance) => ({ btc, usd, loadingBalance }),
);

const mapDispatchToProps = dispatch => ({
  loadBalanceRequest: () => {
    dispatch(myActions.loadBalanceRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
