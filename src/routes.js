import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import VideosPage from './components/cats/VideosPage';
import AboutPage from './components/about/AboutPage';
import LogInPage from './components/LogInPage';
import auth from './auth/authenticator';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/login" component={LogInPage} />
    <Route path="/videos" component={VideosPage} onEnter={requireAuth}>
    </Route>
    <Route path="/about" component={AboutPage} />
  </Route>
);

function requireAuth(nextState, replace) {
  console.log(auth.loggedIn());
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
