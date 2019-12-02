import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  IndexRoute
} from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

render(
  <Router>
    <App/>
    <Switch>
      <Route path="/">
        <Greetings />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signIn">
        <SignIn />
      </Route>
    </Switch>
  </Router>
  , document.getElementById('app'));
