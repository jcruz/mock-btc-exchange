import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import * as mySelectors from '../store/auth/selectors';
import * as myActions from '../store/auth/actions';

import Auth from './Auth';
import Exchange from '../components/Exchange';

const styles = () => ({
  flex: {
    flex: 1,
  },
});

const propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  signOutRequest: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

class App extends Component {
  handleClick = () => {
    this.props.signOutRequest();
  }

  renderSignOut = () => (
    <Button color="inherit" onClick={this.handleClick}>Sign Out</Button>
  )

  render() {
    const { isSignedIn, classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              BTC Exchange
            </Typography>
            {isSignedIn && this.renderSignOut()}
          </Toolbar>
        </AppBar>
        {isSignedIn ? <Exchange /> : <Auth />}
      </div>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = createSelector(
  [mySelectors.isSignedIn],
  isSignedIn => ({ isSignedIn }),
);

const mapDispatchToProps = dispatch => ({
  signOutRequest: () => {
    dispatch(myActions.signOutRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
