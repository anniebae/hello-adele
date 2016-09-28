var React = require('react');

var ConfirmBattle = require('../components/ConfirmLyric');

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

  render: function () {
    return (
      <ConfirmLyric />
    )
  }
});

module.exports = ConfirmLyricContainer;