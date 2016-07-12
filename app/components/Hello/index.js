import React, {Component} from 'react'
import {Link} from 'react-router'

class Hello extends Component {
	render() {
		return (
			<div> Hello holla hellurrr from the other side
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


export default Hello;