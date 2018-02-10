import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Input, { InputLabel } from 'material-ui/Input';

const styles = theme => ({
  root: {
    padding: `${2 * theme.spacing.unit}px ${theme.spacing.unit}px`,
  },
  grid: {
    flexGrow: 1,
  },
  emailInput: {
    marginBottom: theme.spacing.unit,
  },
  passwordInput: {
    marginBottom: 2 * theme.spacing.unit,
  },
  submitButton: {
    float: 'right',
  },
  switchButton: {
    marginRight: theme.spacing.unit,
    padding: 0,
  },
});

const propTypes = {
  signInRequest: PropTypes.func.isRequired,
  registerRequest: PropTypes.func.isRequired,
  emailError: PropTypes.string.isRequired,
  showEmailError: PropTypes.func.isRequired,
  hideEmailError: PropTypes.func.isRequired,
  passwordError: PropTypes.string.isRequired,
  showPasswordError: PropTypes.func.isRequired,
  hidePasswordError: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true,
      email: '',
      password: '',
    };
  }

  handleClick = () => {
    const { signIn } = this.state;
    this.setState({ signIn: !signIn });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.hideEmailError();
    this.props.hidePasswordError();
    if (this.validate()) {
      const { email, password } = this.state;
      const payload = { email, password };
      if (this.state.signIn) {
        this.props.signInRequest(payload);
      } else {
        this.props.registerRequest(payload);
      }
    }
  }

  handleChange = (event) => {
    switch (event.target.id) {
      case 'email':
        this.setState({ email: event.target.value });
        break;
      case 'password':
        this.setState({ password: event.target.value });
        break;
      default:
    }
  }

  validate = () => {
    const { email, password } = this.state;
    let emailError = false;
    let passwordError = false;
    if (!email) {
      const payload = { emailError: 'Enter an email address' };
      this.props.showEmailError(payload);
      emailError = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      const payload = { emailError: 'Invalid email address' };
      this.props.showEmailError(payload);
      emailError = true;
    }
    if (!password) {
      const payload = { passwordError: 'Enter a password' };
      this.props.showPasswordError(payload);
      passwordError = true;
    }
    return !emailError && !passwordError;
  }

  renderForm = () => {
    const { emailError, passwordError, classes } = this.props;
    const { signIn } = this.state;
    const submitText = signIn ? 'Sign In' : 'Register';
    const switchText = signIn ? 'Need an account?' : 'Have an account?';

    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl
          className={classes.emailInput}
          error={!!emailError}
          fullWidth
        >
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          {emailError && (<FormHelperText>{emailError}</FormHelperText>)}
        </FormControl>
        <br />
        <FormControl
          className={classes.passwordInput}
          error={!!passwordError}
          fullWidth
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          {passwordError && (<FormHelperText>{passwordError}</FormHelperText>)}
        </FormControl>
        <br />
        <div>
          <Button
            className={classes.switchButton}
            variant="flat"
            disableRipple
            onClick={this.handleClick}
          >
            {switchText}
          </Button>
          <Button type="submit" variant="raised" className={classes.submitButton}>
            {submitText}
          </Button>
        </div>
      </form>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          className={classes.grid}
          alignItems="flex-start"
          direction="row"
          justify="center"
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                {this.renderForm()}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AuthForm.propTypes = propTypes;

export default withStyles(styles)(AuthForm);
