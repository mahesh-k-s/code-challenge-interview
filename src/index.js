import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

// import styles
import 'tachyons/css/tachyons.css';
import 'font-awesome/css/font-awesome.min.css';
import './style/index.css';

import App from './app/App';
import allReducers from './reducers';
import dataService from './services/data-service';
import loginService from './services/login-service';
import { fetchState } from './services/cache-service';

const middlewares = applyMiddleware(loginService, dataService);
const initialState = fetchState();
const store = createStore(allReducers, initialState, middlewares);

const root = (
  <Provider store={store}>
    <BrowserRouter>
      {React.createElement(withRouter(App))}
    </BrowserRouter>
  </Provider>);

ReactDOM.render(root, document.getElementById('root'));
