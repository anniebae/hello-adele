var React = require('react');

var ConfirmLyric = require('../components/ConfirmLyric');
var githubHelpers = require('../utils/githubHelpers');

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
		githubHelpers.getSongInfo([query.artist, query.artistName])
			// below is a promise
			.then(function (artist) {
				// console.log('ARTIST', artist);
				this.setState({
					isLoading: false,
					artistInfo: [artist[0], artist[1]]
				})
			})
		// Fetch info from github(genius) then update state
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