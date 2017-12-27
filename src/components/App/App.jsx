import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Library from '../Library';
import Explore from '../Explore';
import QuizDetails from '../QuizDetails';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/library" component={Library} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/quiz/:id" component={QuizDetails} />
        {/* redirect from unknown paths */}
        <Redirect to="/library" />
      </Switch>
    </Router>
  );
}
