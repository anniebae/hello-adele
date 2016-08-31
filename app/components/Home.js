var React = require('react');
// var transparentBg = require('../').transparentBg;
var grayBg = require('../styles').grayBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function() {
		return(
			<div className="jumbotron col-sm-12 text-center" style={grayBg}>
				<h1>Github Battle</h1>
				<p className="lead">Some fancy motto</p>
				<Link to="/home">
					<button type="button" className="btn btn-lg btn-success">
						Clique
					</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;
