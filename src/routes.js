'use strict';

import React from 'react';
import { Route, IndexRoute, BrowserRouter, browserHistory} from 'react-router';
import Welcome from './components/home/welcome.jsx'
import NotFoundPage from './components/notFoundPage.jsx';

const Routes = (
<BrowserRouter>
  	<div>
	<Route path='/welcome' history={browserHistory} component={Welcome} >
   	 	<Route path='/welcome' component={Welcome} />
   	 	<Route path='/notFoundPage' component={NotFoundPage} />
   	</Route> 
 	</div>
</BrowserRouter>
);

export default Routes;
