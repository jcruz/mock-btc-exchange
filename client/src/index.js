/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/reducers';
import sagas from './store/sagas';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

const createApp = store => (
  <div>
    <Helmet>
      <title>BTC Exchange</title>
      <meta name='description' content='Mock bitcoin exchange.' />
    </Helmet>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
const initialState = fromJS({
  auth: {
    isSignedIn: localStorage.getItem('jwt') !== null,
    emailError: '',
    passwordError: '',
  },
});
const store = createStore(
  combineReducers({
    ...reducers,
  }),
  initialState,
  compose(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(sagas);
ReactDOM.render(
  createApp(store),
  document.getElementById('root'),
);
registerServiceWorker();
