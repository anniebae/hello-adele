import React, {Component, PropTypes} from 'react'
import Menu from 'components/Menu'
import Styles from '../stylesheets/styles.css'

var grayBg = require('../styles').grayBg;

// functional stateless components
function Home (props) {
	return (
		<div className="home-body">
        <Menu />
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={grayBg}>
        <h1>{props.header}</h1>
          <div className="col-sm-12">
            <form onSubmit={props.onSubmitArtist}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="enter Artist" 
                  onChange={props.onUpdateArtist}
                  value={props.artistName}
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

Home.protoTypes = {
	header: PropTypes.string.isRequired,
	onUpdateArtist: PropTypes.func.isRequired,
	onSubmitArtist: PropTypes.func.isRequired,
	artistName: PropTypes.string.isRequired
}


export default Home