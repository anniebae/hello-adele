import React, {Component} from 'react'
import {Link} from 'react-router'
import Menu from 'components/Menu';

import Styles from '../../stylesheets/styles.css'

class Hello extends Component {
	render() {
		return (
			<div className="hello-body"> Hello holla hellurrr from the other side
				<Menu />
			</div>
		)
	}
}


export default Hello;