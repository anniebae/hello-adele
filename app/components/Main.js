var React = require('react');

var Main = React.createClass({
	render: function() {
		return(
			<div>
				Adele says MAIN
				{this.props.children}
			</div>
		)
	}
});


module.exports = Main;