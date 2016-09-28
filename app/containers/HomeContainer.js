import React, {Component} from 'react'
import {Link} from 'react-router'
import Menu from 'components/Menu'
import Home from 'components/Home'
import Styles from '../stylesheets/styles.css'

var blueBg = require('../stylesheets').blueBg;
var grayBg = require('../styles').grayBg;

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState:function() {
    return {
      artistName: ''
    }
  },
  onUpdateArtist: function(e) {
    this.setState({
      artistName: e.target.value
    })
  }, 
  onSubmitArtist: function(e) {
    e.preventDefault();
    var artistName = this.state.artistName;
    this.setState({
      artistName: ''
    });
  
    if (this.props.routeParams.artist) {
      this.context.router.push({
        pathname: '/lyrics',
        query: {
          artist: this.props.routeParams.artist,
          song: this.state.artistName
        }
      })
      // go to lyrics
    } else {
      console.log(this.context)
      this.context.router.push('/song/' + this.state.artistName)
      // go to song title
    }

  },
  render:function() {
    return(
      <Home />
    )
  }
})



export default HomeContainer