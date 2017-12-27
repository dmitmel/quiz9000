import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../reducers';
import initialState from './initialState';
import routerHistory from '../utils/routerHistory';

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(routerHistory)))
);

export default store;
