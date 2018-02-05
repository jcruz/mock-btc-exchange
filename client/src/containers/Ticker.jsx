import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as mySelectors from '../store/exchange/selectors';
import * as myActions from '../store/exchange/actions';
import { formatNumber } from '../utils';

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null
    };
  }

  componentDidMount() {
    this.props.loadTickerRequest();
    const intervalId = setInterval(this.props.loadTickerRequest, 5000);
    this.setState({intervalId});
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    if (intervalId) clearInterval(intervalId);
  }

  render() {
    const { btcusd } = this.props;
    return (
      <div>
        <p>Bitcoin</p>
        <p>Last Price</p>
        <p>${formatNumber(btcusd, 2)} USD</p>
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  [mySelectors.btcusd],
  (btcusd) => ({ btcusd })
);

const mapDispatchToProps = (dispatch) => {
  return {
    loadTickerRequest: () => {
      dispatch(myActions.loadTickerRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);
