// import React from 'react';
// import {Route, Router, IndexRoute, browserHistory, hashHistory} from 'react-router';

// import Home from 'components/Home';
// import Hello from 'components/Hello';
// import Fire from 'components/Fire';

// var HelloContainer = require('../containers/HelloContainer');

// const routes = (
// 	<Router history={hashHistory}>
// 		<Route path='/' component={Home}>
// 			<IndexRoute component={Home} />
// 			<Route path='hello' header='HELLO IT ME' component={HelloContainer} />
// 		</Route>
// 	</Router>
// )

// export default routes;


var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
// import Home from 'components/Home';
import Hello from 'components/Hello';
import Fire from 'components/Fire';

var HelloContainer = require('../containers/HelloContainer');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='helloAdele' header='HELLO ADELE' component={HelloContainer} />
			<Route path='playerTwo/:playerOne' header='Player Two' component={HelloContainer} />
		</Route>
	</Router>
);

module.exports = routes;
