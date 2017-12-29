import { createStore, compose, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducer from './reducers';
import * as actions from './actions';
import routerHistory from './utils/routerHistory';

const store = createStore(
  connectRouter(routerHistory)(reducer),
  compose(
    devToolsEnhancer({
      name: 'Quiz9000',
      actionCreators: actions
    }),
    applyMiddleware(thunk, routerMiddleware(routerHistory))
  )
);

export default store;
