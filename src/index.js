import React from 'react';
import {render} from 'react-dom';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import routes from './routes';
import appstate from './reducers';

const store = createStore(
  combineReducers({
    appstate,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(
      thunkMiddleware, // enables dispatch() calls
      routerMiddleware(history) // logs actions
    )
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app')
);
