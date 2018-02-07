import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as mySelectors from '../store/auth/selectors';
import * as myActions from '../store/auth/actions';

import AuthForm from '../components/AuthForm';

class Auth extends Component {
  renderAuthForm = () => {
    const { signInRequest, registerRequest } = this.props;

    return (
      <AuthForm
        signInRequest={signInRequest}
        registerRequest={registerRequest}
      />
    );
  }

  renderSignOutButton = () => (
    <button onClick={this.props.signOutRequest}>
        Sign Out
    </button>
  )

  render() {
    const { isSignedIn } = this.props;
    return isSignedIn ? this.renderSignOutButton() : this.renderAuthForm();
  }
}

const mapStateToProps = createSelector(
  [mySelectors.isSignedIn],
  isSignedIn => ({ isSignedIn }),
);

const mapDispatchToProps = dispatch => ({
  signInRequest: (payload) => {
    dispatch(myActions.signInRequest(payload));
  },
  registerRequest: (payload) => {
    dispatch(myActions.registerRequest(payload));
  },
  signOutRequest: () => {
    dispatch(myActions.signOutRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
