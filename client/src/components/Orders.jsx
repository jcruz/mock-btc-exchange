import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputAdornment, InputLabel } from 'material-ui/Input';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';

import { formatNumber } from '../utils';

const styles = theme => ({
  title: {
    marginBottom: theme.spacing.unit,
  },
});

const propTypes = {
  btcusd: PropTypes.number.isRequired,
  btc: PropTypes.number.isRequired,
  usd: PropTypes.number.isRequired,
  updateBalanceRequest: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      error: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    if (/^(0|[1-9]\d*)?(\.\d{0,8})?$/i.test(value)) {
      this.setState({ amount: value });
    }
  }

  handleClickBuy = () => {
    const { btcusd, btc, usd } = this.props;
    const { amount } = this.state;
    const cost = amount * btcusd;
    let error = '';
    if (usd !== 0 && cost <= usd) {
      if (cost !== 0) {
        const payload = { btc: btc + (cost / btcusd), usd: usd - cost };
        this.props.updateBalanceRequest(payload);
      }
    } else {
      error = 'Insufficient funds';
    }
    this.setState({ error });
  }

  handleClickSell = () => {
    const { btcusd, btc, usd } = this.props;
    const { amount } = this.state;
    let error = '';
    if (btc !== 0 && amount <= btc) {
      if (amount !== 0) {
        const payload = { btc: btc - amount, usd: usd + (amount * btcusd) };
        this.props.updateBalanceRequest(payload);
      }
    } else {
      error = 'Insufficient funds';
    }
    this.setState({ error });
  }

  render() {
    const {
      btcusd, btc, usd, classes,
    } = this.props;
    const { amount, error } = this.state;

    const maxBtc = Math.floor((usd / btcusd) * 1e8) / 1e8;
    const maxBuy = `Max ${formatNumber(maxBtc, 8)}`;
    const maxSell = `Max ${formatNumber(btc, 8)}`;

    return (
      <Card>
        <CardContent>
          <Typography className={classes.title}>Market Order</Typography>
          <FormControl error={error !== ''}>
            <InputLabel htmlFor="amount">Amount</InputLabel>
            <Input
              id="amount"
              value={amount}
              placeholder="0"
              autoComplete="off"
              onChange={this.handleChange}
              endAdornment={<InputAdornment position="end">BTC</InputAdornment>}
            />
            {error && (<FormHelperText>{error}</FormHelperText>)}
          </FormControl>
        </CardContent>
        <CardActions>
          <Tooltip title={maxBuy}>
            <Button variant="flat" onClick={this.handleClickBuy}>Buy</Button>
          </Tooltip>
          <Tooltip title={maxSell}>
            <Button variant="flat" onClick={this.handleClickSell}>Sell</Button>
          </Tooltip>
        </CardActions>
      </Card>
    );
  }
}

Orders.propTypes = propTypes;

export default withStyles(styles)(Orders);
