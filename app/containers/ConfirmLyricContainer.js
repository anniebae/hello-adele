var React = require('react');

var ConfirmLyric = require('../components/ConfirmLyric');

var ConfirmLyricContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		console.log('getInitialState');
		return {
		  isLoading: true,
		  playersInfo: [],
		}
	},
	componentWillMount: function() {
		console.log('componentWillMount');
	},

	componentDidMount: function() {
		var query = this.props.location.query;
		console.log('componentDidMount');
		// Fetch info from github(genius) then update state
		// console.log('QUERY', query);
	},
	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps');
	},
	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},
	render: function () {
		return (
		  <ConfirmLyric 
		  	isLoading={this.state.isLoading}
		  	artistInfo={this.state.artistInfo} />
		)
	}
});

export default ConfirmLyricContainer