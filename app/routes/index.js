import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Home from 'components/Home';
import Hello from 'components/Hello';
import Fire from 'components/Fire';

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Home}>
			<Route path='hello' component={Hello} />
			<Route path='fire' component={Fire} />
		</Route>
	</Router>
)

export default routes;