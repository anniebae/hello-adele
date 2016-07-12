import React, {Component} from 'react'
import {Link} from 'react-router'

class Fire extends Component {
	render() {
		return(
			<div>Set fire to da rain
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/hello">Hello</Link>
					</li>
					<li>
						<Link to="/fire">Fire</Link>
					</li>
				</ul>
			</div>
		)
	}
}


export default Fire;