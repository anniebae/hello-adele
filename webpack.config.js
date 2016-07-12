var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

var path = require('path');

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader"
			}
		]
	},
	resolve: {
		alias: {
			components: path.join(__dirname, 'app', 'components')
		}
	},
	plugins: [HtmlWebpackPluginConfig]
}