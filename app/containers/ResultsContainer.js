import React from 'react'
import Results from '../components/Results'


var ResultsContainer = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true,
			scores: []
		}
	},
	render: function() {
		return (
			<Results isLoading={this.state.isLoading} scores={this.state.scores} />
		)
	}
})


export default ResultsContainer;