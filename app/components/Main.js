import React from 'react'
import {Link} from 'react-router'
// import AlertContainer from 'react-alert'

var Main = React.createClass({
	render: function() {
		return (
			<div className='main-container'>
				<h1>Main component</h1>
				<button onClick={function() {alert("left")}}>
					Enter
					
				</button>
				
			</div>
		)
	}
});

module.exports = Main;