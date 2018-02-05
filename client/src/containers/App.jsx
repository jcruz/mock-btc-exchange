import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as mySelectors from '../store/auth/selectors';

import Auth from './Auth'
import Exchange from './Exchange';

class App extends Component {
  _renderExchange = () => {
    return <Exchange />;
  }

  render() {
    const { isSignedIn } = this.props;
    return (
      <div>
        <Auth />
        {isSignedIn && this._renderExchange()}
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  [mySelectors.isSignedIn],
  (isSignedIn) => ({ isSignedIn })
);

export default connect(mapStateToProps)(App);
