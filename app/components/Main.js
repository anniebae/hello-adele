import React, {Component} from 'react'
import {Link} from 'react-router'
import Menu from 'components/Menu'
import Styles from '../stylesheets/styles.css'

class Main extends Component {
  meLikeClick(e) {
    console.log('Hi.', e)
  }

  render() {
    return (
      <div className='main-container'>
      	<div className="content">
	        <Link to="/home">
		        <button className="enter">
		          Enter
		        </button>
	        </Link>
      	</div>
      </div>
    )
  }
}

module.exports = Main;