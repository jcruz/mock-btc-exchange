const base = window.location.origin;

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

export const getTicker = () => {
  const token = `Bearer ${localStorage.getItem('jwt')}`;
  return fetch(`${base}/v1/tickers`, {
    headers: {
      Authorization: token,
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((json) => {
      const { last } = json;
      return Number(last);
    });
};

export const signIn = ({ email, password }) => {
  const request = { auth: { email, password } };
  return fetch(`${base}/v1/user_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((json) => {
      const { jwt } = json;
      return jwt;
    });
};

export const register = ({ email, password }) => {
  const request = { email, password };
  return fetch(`${base}/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(json => json);
};

export const loadBalance = () => {
  const token = `Bearer ${localStorage.getItem('jwt')}`;
  return fetch(`${base}/v1/balances`, {
    headers: {
      Authorization: token,
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((json) => {
      const { usd, btc } = json;
      return {
        btc: Number(btc),
        usd: Number(usd),
      };
    });
};

export const updateBalance = (payload) => {
  const token = `Bearer ${localStorage.getItem('jwt')}`;
  return fetch(`${base}/v1/balances`, {
    method: 'PATCH',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((json) => {
      const { usd, btc } = json;
      return {
        btc: Number(btc),
        usd: Number(usd),
      };
    });
};
