import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Fade from 'material-ui/transitions/Fade';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

import { formatNumber } from '../utils';

const styles = () => ({
  balance: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  symbol: {
    fontSize: 14,
  },
  progress: {
    margin: 'auto',
  },
  content: {
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
  },
});

const propTypes = {
  btc: PropTypes.number.isRequired,
  usd: PropTypes.number.isRequired,
  loadingBalance: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

class Balances extends Component {
  renderOverlayProgress = () => {
    const { classes } = this.props;
    return (
      <div className={classes.overlay}>
        <CircularProgress className={classes.progress} />
      </div>
    );
  }

  renderFade = () => {
    const { loadingBalance } = this.props;
    return (
      <Fade
        in={loadingBalance}
        style={{ transitionDelay: loadingBalance ? '800ms' : '0ms' }}
        unmountOnExit
      >
        {this.renderOverlayProgress()}
      </Fade>
    );
  }

  render() {
    const { btc, usd, classes } = this.props;
    const initialLoad = (btc === 0 && usd === 0);
    return (
      <Card>
        <CardContent className={classes.content}>
          {initialLoad ? this.renderOverlayProgress() : this.renderFade()}
          <Typography>USD Balance</Typography>
          <Typography className={classes.balance}>
            ${formatNumber(usd, 2)}
          </Typography>
          <Typography>BTC Balance</Typography>
          <Typography className={classes.balance}>
            {formatNumber(btc, 8)} <span className={classes.symbol}>BTC</span>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Balances.propTypes = propTypes;

export default withStyles(styles)(Balances);
