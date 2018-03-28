import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import LoadingPage from './LoadingPage';
import routerHistory from '../../utils/routerHistory';

const Library = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Library" */ '../../containers/Library'),
  loading: LoadingPage
});

const Explore = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Explore" */ '../../containers/Explore'),
  loading: LoadingPage
});

const QuizDetails = Loadable({
  loader: () =>
    import(/* webpackChunkName: "QuizDetails" */ '../../containers/QuizDetails'),
  loading: LoadingPage
});

const App = () => (
  <Router history={routerHistory}>
    <Switch>
      <Route exact path="/library" component={Library} />
      <Route exact path="/explore" component={Explore} />
      <Route
        exact
        path="/quiz/:id"
        render={({ match }) => (
          <QuizDetails id={parseInt(match.params.id, 10)} />
        )}
      />
      <Redirect to="/library" />
    </Switch>
  </Router>
);

export default hot(module)(App);
