import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import routerHistory from '../../utils/routerHistory';
import Library from '../Library';
import Explore from '../../containers/Explore';
import QuizDetails from '../../containers/QuizDetails';

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
