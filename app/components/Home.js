import React, {Component} from 'react'
import Menu from 'components/Menu'
import Styles from '../stylesheets/styles.css'

var grayBg = require('../styles').grayBg;

var Home = React.createClass({
	render: function() {
		return (
			<div className="home-body">
	        <Menu />
	        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={grayBg}>
	        <h1>{this.props.route.header}</h1>
	          <div className="col-sm-12">
	            <form onSubmit={this.onSubmitArtist}>
	              <div className="form-group">
	                <input
	                  className="form-control"
	                  placeholder="enter Artist" 
	                  onChange={this.onUpdateArtist}
	                  value={this.state.artistName}
	                  type="text"/>
	              </div>

	              <div className="form-group col-sm-4 col-sm-offset-4">
	                <button
	                  className="btn btn-block btn-success"
	                  type="submit">
	                    Continue
	                </button>
	              </div>
	            </form>
	          </div>
	        </div>
	      </div>
		)
	}
})

export default Home