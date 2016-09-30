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

  render: function () {
    return (
      <ConfirmLyric />
    )
  }
});

export default ConfirmLyricContainer