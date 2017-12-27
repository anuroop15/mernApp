import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Welcome from '../components/home/welcome.jsx'
import Home from '../components/home/home.jsx'
import NotFoundPage from '../components/notFoundPage.jsx'
import routes from '../routes';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={Home} />
        <Route exact path="/#welcome" render={Welcome} />
        <Route path="*" component={NotFoundPage} />
      </Router>
    );
  }
}