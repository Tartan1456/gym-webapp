import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './js/components/components/home';
import Test from './js/components/components/workout_day';
import Exercise from './js/components/components/exercise';

require('./global.scss');

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/workoutDay" component={Test} />
      <Route path="/exercise" component={Exercise} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('react-home'));
