import React, {Component} from 'react'
import {Link} from 'react-router'

class Menu extends Component {
	render() {
		return(
			<ul id="menu">
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
		)
	}
}

export default Menu;