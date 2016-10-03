var axios = require('axios');

var id = "YOUR_CIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getArtistInfo(artistName) {
	return axios.get('https://api.github.com/users/' + artistName + param)
}

var helpers = {
	getSongInfo: function(artist) {
		return axios.all(artist.map(function (artistName) {
			return getArtistInfo(artistName)
		})).then(function(info) {
			console.log('INFO', info)
		})
		// fetch some data from github
		// npm install axios
	}
};

export default helpers