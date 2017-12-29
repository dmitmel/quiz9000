import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import routerHistory from '../../utils/routerHistory';
import Library from '../Library';
import Explore from '../Explore';
import QuizDetails from '../../containers/QuizDetails';

export default function App() {
  return (
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
}
