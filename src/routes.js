'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Welcome from './components/home/welcome.jsx'
import NotFoundPage from './components/notFoundPage';

const Routes = (
  <Route path="/">
    <IndexRoute/>
    <Route path="#welcome" component={Welcome}/>
    <Route path="*" component={NotFoundPage}/>
    <Route path="*" component={NotFoundPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default Routes;
