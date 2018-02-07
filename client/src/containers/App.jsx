import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as mySelectors from '../store/auth/selectors';

import Auth from './Auth';
import Exchange from './Exchange';

const App = ({ isSignedIn }) => (
  <div>
    <Auth />
    {isSignedIn && <Exchange />}
  </div>
);

const mapStateToProps = createSelector(
  [mySelectors.isSignedIn],
  isSignedIn => ({ isSignedIn }),
);

export default connect(mapStateToProps)(App);
