import React, {Component} from 'react'
import {Link} from 'react-router'
import Menu from 'components/Menu'
import Styles from '../stylesheets/styles.css'
import Hover from '../stylesheets/hover.css'
var blueBg = require('../stylesheets').blueBg;

class Main extends Component {
  
  render() {
    return (
      <div className='main-container'>
	        <Link to="/artist">
		        <button className="enter hvr-bounce-to-right" style={blueBg}>
		          Clique
		        </button>
	        </Link>
	    <div className="overlay"></div>
      </div>
    )
  }

  componentDidMount() {
  	var elem = React.findDOMNode(this);
  	console.log("elem: " + elem);
  	alert(elem);
  	elem.style.opacity = 0;
  	window.requestAnimcationFrame(function() {
  		elem.style.transition = "opacity 250ms";
  		elem.style.opacity = 1;
  	});
  }
}

export default Main