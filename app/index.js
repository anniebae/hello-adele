import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute, browserHistory} from 'react-router'

import Home from 'components/Home'
import Hello from 'components/Hello'
import Fire from 'components/Fire'


const App = props => {
	return(
		<div>
			{props.children}
		</div>
	)
}


render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='hello' component={Hello} />
			<Route path='fire' component={Fire} />
		</Route>
	</Router>,
	document.getElementById('app')
)