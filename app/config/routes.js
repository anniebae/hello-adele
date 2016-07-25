import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Home from 'components/Home';
import Hello from 'components/Hello';
import Fire from 'components/Fire';

var PromptContainer = require('../containers/PromptContainer');

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Home}>
			<IndexRoute component={Hello} />
			<Route path='fire' component={PromptContainer} />
		</Route>
	</Router>
)

export default routes;