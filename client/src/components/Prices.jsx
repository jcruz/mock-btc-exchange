import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import { CircularProgress } from 'material-ui/Progress';
import Fade from 'material-ui/transitions/Fade';
import Typography from 'material-ui/Typography';

import { formatNumber } from '../utils';

const styles = () => ({
  balance: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
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
  btcusd: PropTypes.number.isRequired,
  loadingTicker: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

class Prices extends Component {
  renderOverlayProgress = () => {
    const { classes } = this.props;
    return (
      <div className={classes.overlay}>
        <CircularProgress className={classes.progress} />
      </div>
    );
  }

  renderFade = () => {
    const { loadingTicker } = this.props;
    return (
      <Fade
        in={loadingTicker}
        style={{ transitionDelay: loadingTicker ? '800ms' : '0ms' }}
        unmountOnExit
      >
        {this.renderOverlayProgress()}
      </Fade>
    );
  }

  render() {
    const { btcusd, classes } = this.props;
    const initialLoad = btcusd === 0;
    return (
      <Card>
        <CardContent className={classes.content}>
          {initialLoad ? this.renderOverlayProgress() : this.renderFade()}
          <Typography>Bitcoin</Typography>
          <Typography>Last Price</Typography>
          <Typography className={classes.balance}>
            ${formatNumber(btcusd, 2)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Prices.propTypes = propTypes;

export default withStyles(styles)(Prices);
