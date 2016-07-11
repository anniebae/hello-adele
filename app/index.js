import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute, browserHistory} from 'react-router'

const App = props => {
	return(
		<div>
			{props.children}
		</div>
	)
}


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
		</Route>
	</Router>,
	document.getElementById('app')
)