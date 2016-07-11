import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute, browserHistory} from 'react-router'

import Home from 'components/Home';
import Hello from 'components/Hello';
import Fire from 'components/Fire';

var YellowDog = React.createClass({
	render: function() {
		return(
			<div>yellow dawg</div>
		)
	}
})

// const App = props => {
// 	return(
// 		<div>
// 			{props.children}
// 		</div>
// 	)
// }


ReactDOM.render(

	<YellowDog />,
	document.getElementById('app')
);