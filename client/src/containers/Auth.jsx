import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as mySelectors from '../store/auth/selectors';
import * as myActions from '../store/auth/actions';

import AuthForm from '../components/AuthForm';

const propTypes = {
  signInRequest: PropTypes.func.isRequired,
  registerRequest: PropTypes.func.isRequired,
  emailError: PropTypes.string.isRequired,
  showEmailError: PropTypes.func.isRequired,
  hideEmailError: PropTypes.func.isRequired,
  passwordError: PropTypes.string.isRequired,
  showPasswordError: PropTypes.func.isRequired,
  hidePasswordError: PropTypes.func.isRequired,
};

const Auth = (props) => {
  const {
    signInRequest, registerRequest, emailError, showEmailError, hideEmailError,
    passwordError, showPasswordError, hidePasswordError,
  } = props;
  return (
    <AuthForm
      signInRequest={signInRequest}
      registerRequest={registerRequest}
      emailError={emailError}
      showEmailError={showEmailError}
      hideEmailError={hideEmailError}
      passwordError={passwordError}
      showPasswordError={showPasswordError}
      hidePasswordError={hidePasswordError}
    />
  );
};

Auth.propTypes = propTypes;

const mapStateToProps = createSelector(
  [mySelectors.emailError, mySelectors.passwordError],
  (emailError, passwordError) => ({ emailError, passwordError }),
);

const mapDispatchToProps = dispatch => ({
  signInRequest: (payload) => {
    dispatch(myActions.signInRequest(payload));
  },
  registerRequest: (payload) => {
    dispatch(myActions.registerRequest(payload));
  },
  showEmailError: (payload) => {
    dispatch(myActions.showEmailError(payload));
  },
  hideEmailError: () => {
    dispatch(myActions.hideEmailError());
  },
  showPasswordError: (payload) => {
    dispatch(myActions.showPasswordError(payload));
  },
  hidePasswordError: () => {
    dispatch(myActions.hidePasswordError());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
