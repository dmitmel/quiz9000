import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducer from '../reducers';
import initialState from './initialState';
import routerHistory from '../utils/routerHistory';

const store = createStore(
  connectRouter(routerHistory)(reducer),
  initialState,
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(routerHistory)))
);

export default store;
