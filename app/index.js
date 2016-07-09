var USER_DATA = {
	name: 'Adele Adkins',
	username: 'anniebae',
	image: 'https://pbs.twimg.com/profile_images/657199367556866048/EBEIl2ol.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function() {
		return <img src={this.props.image} style={{height:100, width:100}} />
	}
})

var ProfileLink = React.createClass({
	render: function() {
		return(
			<div>
				<a href={'https://github.com/' + this.props.username}>
					helloadele
				</a>
			</div>
		)
	}
})

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>{this.props.name}</div>
		)
	}
})

var Avatar = React.createClass({
	render: function() {
		return(
			<div>
				<ProfilePic image={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
})


ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
)