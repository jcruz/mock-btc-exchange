import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true
    }
  }

  _handleClick = () => {
    const { signIn } = this.state;
    this.setState({signIn: !signIn});
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }
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
        <form onSubmit={(event) => this._handleSubmit(event)}>
          <label>
            Email:
            <br />
            <input
              id='email'
              type='email'
              name='email' />
          </label>
          <br /><br />
          <label>
            Password:
            <br />
            <input
              id='password'
              type='password'
              name='password' />
          </label>
          <br /><br />
          <button type='submit'>
            {submitButtonText}
          </button>
        </form>
        <br />
        <label>
          {switchLabelText}&nbsp;
        </label>
        <button onClick={this._handleClick}>
          {switchButtonText}
        </button>
      </div>
    );
  }
}
