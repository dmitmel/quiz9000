import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import LoadingPage from './LoadingPage';
import routerHistory from '../../utils/routerHistory';
import AuthStatus from '../../utils/AuthStatus';

const createPage = loader => Loadable({ loader, loading: LoadingPage });

const SignIn = createPage(() =>
  import(/* webpackChunkName: "SignIn" */ '../SignIn'),
);
const Library = createPage(() =>
  import(/* webpackChunkName: "Library" */ '../../containers/Library'),
);
const Explore = createPage(() =>
  import(/* webpackChunkName: "Explore" */ '../../containers/Explore'),
);
const QuizDetails = createPage(() =>
  import(/* webpackChunkName: "QuizDetails" */ '../../containers/QuizDetails'),
);

const App = ({ authStatus }) => (
  <Router history={routerHistory}>
    {authStatus === AuthStatus.LOADING ? (
      <LoadingPage />
    ) : authStatus === AuthStatus.SIGNED_IN ? (
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
    ) : (
      <SignIn />
    )}
  </Router>
);

App.propTypes = {
  authStatus: PropTypes.string.isRequired,
};

export default compose(
  hot(module),
  connect(state => ({ authStatus: state.auth.status })),
)(App);
