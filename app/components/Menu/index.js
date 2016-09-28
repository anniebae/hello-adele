import React, {Component} from 'react'
import {Link} from 'react-router'

class Menu extends Component {
	render() {
		return(
			<ul id="menu">
				<Link to="/artist">
					<li className="home-btn">home</li>
				</Link>

				<Link to="/hello">
					<li className="hello-btn">hello</li>
				</Link>

				<Link to="/fire">
					<li className="fire-btn">fire</li>
				</Link>
			</ul>
		)
	}
}

export default Menu;