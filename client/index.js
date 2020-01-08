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
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  (state = {}) => state,
    applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <Router>
      <App/>
      <Switch>
        <Route exact path="/" component={Greetings} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('app'));
