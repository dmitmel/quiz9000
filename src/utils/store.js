import { createStore, compose, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducer from '../reducers';
import * as actions from '../actions/creators';
import routerHistory from '../utils/routerHistory';
import * as auth from '../db/auth';

const store = createStore(
  connectRouter(routerHistory)(reducer),
  compose(
    applyMiddleware(thunk, routerMiddleware(routerHistory)),
    devToolsEnhancer({
      name: 'Quiz9000',
      actionCreators: actions,
    }),
  ),
);

auth.connectStateObserver(store.dispatch);

export default store;
