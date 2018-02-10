/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
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
  <Provider store={store}>
    <App />
  </Provider>
);
const initialState = fromJS({
  auth: {
    isSignedIn: localStorage.getItem('jwt') !== null,
    emailError: '',
    passwordError: '',
  },
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...reducers,
  }),
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(sagas);
ReactDOM.render(
  createApp(store),
  document.getElementById('root'),
);
registerServiceWorker();
