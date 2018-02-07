import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true,
    };
  }

  handleClick = () => {
    const { signIn } = this.state;
    this.setState({ signIn: !signIn });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
    if (this.state.signIn) {
      this.props.signInRequest(payload);
    } else {
      this.props.registerRequest(payload);
    }
  }

  render() {
    const { signIn } = this.state;
    const submitButtonText = signIn ? 'Sign In' : 'Register';
    const switchLabelText = signIn ? 'Need an account?' : 'Already have an account?';
    const switchButtonText = signIn ? 'Register' : 'Sign In';

    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="email">
            Email:
            <br />
            <input
              id="email"
              type="email"
              name="email"
            />
          </label>
          <br /><br />
          <label htmlFor="password">
            Password:
            <br />
            <input
              id="password"
              type="password"
              name="password"
            />
          </label>
          <br /><br />
          <button type="submit">
            {submitButtonText}
          </button>
        </form>
        <p>
          <span>{switchLabelText}&nbsp;</span>
          <button onClick={this.handleClick}>
            {switchButtonText}
          </button>
        </p>
      </div>
    );
  }
}

AuthForm.propTypes = {
  signInRequest: PropTypes.func.isRequired,
  registerRequest: PropTypes.func.isRequired,
};
