import React, {Component} from 'react'
import {Link} from 'react-router'

class Home extends Component {
	render() {
		return(
			<div>dis mai home
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


export default Home;