var React = require('react');

var ConfirmLyric = require('../components/ConfirmLyric');

var ConfirmLyricContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
		  isLoading: true,
		  playersInfo: [],
		}
	},

	componentDidMount: function() {
		var query = this.props.location.query;
		// Fetch info from github(genius) then update state
		// console.log('QUERY', query);
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