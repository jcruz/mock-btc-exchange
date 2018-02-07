import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import * as mySelectors from '../store/auth/selectors';

import Auth from './Auth';
import Exchange from './Exchange';

const App = ({ isSignedIn }) => (
  <div>
    <Auth />
    {isSignedIn && <Exchange />}
  </div>
);

App.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = createSelector(
  [mySelectors.isSignedIn],
  isSignedIn => ({ isSignedIn }),
);

export default connect(mapStateToProps)(App);
