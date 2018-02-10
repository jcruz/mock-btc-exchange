import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Balance from '../containers/Balance';
import Ticker from '../containers/Ticker';
import Order from '../containers/Order';

const styles = theme => ({
  root: {
    padding: `${2 * theme.spacing.unit}px ${theme.spacing.unit}px`,
  },
  grid: {
    flexGrow: 1,
  },
});

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const Exchange = ({ classes }) => (
  <div className={classes.root}>
    <Grid
      container
      className={classes.grid}
      alignItems="flex-start"
      direction="row"
      justify="center"
    >
      <Grid item xs={12} sm={8} md={3} lg={3}>
        <Balance />
      </Grid>
      <Grid item xs={12} sm={8} md={3} lg={3}>
        <Ticker />
      </Grid>
      <Grid item xs={12} sm={8} md={3} lg={3}>
        <Order />
      </Grid>
    </Grid>
  </div>
);

Exchange.propTypes = propTypes;

export default withStyles(styles)(Exchange);
