import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import * as mySelectors from '../store/exchange/selectors';
import * as myActions from '../store/exchange/actions';

import Prices from '../components/Prices';

const propTypes = {
  btcusd: PropTypes.number.isRequired,
  loadTickerRequest: PropTypes.func.isRequired,
  loadingTicker: PropTypes.bool.isRequired,
};

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
    };
  }

  componentWillMount() {
    this.props.loadTickerRequest();
    const intervalId = setInterval(this.props.loadTickerRequest, 5000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    if (intervalId) clearInterval(intervalId);
  }

  render() {
    const { btcusd, loadingTicker } = this.props;
    return <Prices btcusd={btcusd} loadingTicker={loadingTicker} />;
  }
}

Ticker.propTypes = propTypes;

const mapStateToProps = createSelector(
  [mySelectors.btcusd, mySelectors.loadingTicker],
  (btcusd, loadingTicker) => ({ btcusd, loadingTicker }),
);

const mapDispatchToProps = dispatch => ({
  loadTickerRequest: () => {
    dispatch(myActions.loadTickerRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);
