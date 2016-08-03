import React, {Component} from 'react'
import {Link} from 'react-router'
import Menu from 'components/Menu'

class Main extends Component {
  meLikeClick(e) {
    console.log('Hi.', e)
  }

  render() {
  	console.log(this.props.routes[0].path)
    return (
      <div className='main-container'>
        <h1>Main component</h1>

        <Link to="/home">
	        <button>
	          Enter
	        </button>
        </Link>
      </div>
    )
  }
}

module.exports = Main;