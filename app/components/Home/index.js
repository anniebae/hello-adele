import React, {Component} from 'react'
import {Link} from 'react-router'
import Styles from './styles.css'
import Menu from 'components/Menu'

class Home extends Component {
	render() {
		return(
			<div className="home-body">dis mai home
				<Menu />
			</div>
		)
	}
}


export default Home;