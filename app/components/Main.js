import React, {Component} from 'react'
import {Link} from 'react-router'

class Main extends Component {
  meLikeClick(e) {
    console.log('Hi.', e)
  }

  render() {
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