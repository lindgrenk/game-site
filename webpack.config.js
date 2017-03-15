var path              = require('path')
var webpack           = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer      = require('autoprefixer')
var SvgStore          = require('webpack-svgstore-plugin')

// var rootPath = path.resolve(__dirname)

module.exports = {
	devtool : 'source-map',
	context : path.join(__dirname),
	entry   : {
		app : [
			path.join(__dirname, 'src/main.js')
		]
	},
	output : {
		path       : path.join(__dirname, 'dist'),
		filename   : 'main.js',
		publicPath : '/dist/'
	},
	plugins : [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV' : '"production"'
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize : true,
			compress : { warnings : false }
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin('main.css'),
		new SvgStore('./src/svg/**/*.svg', './svg', {
			name   : 'sprite.svg',
			chunk  : 'app',
			prefix : ''
		})
	],
	module : {
		loaders : [
			{
				test    : /\.js$/,
				loader  : 'babel',
				exclude : /node_modules/,
				query   : {
					presets : ['es2015', 'stage-0', 'react']
				}
			},
			{
				test   : /\.(less)$/,
				loader : ExtractTextPlugin.extract(
					'css?sourceMap&minimize&keepBreaks&keepSpecialComments=0&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!' +
					'postcss!' +
					'less?sourceMap'
				)
			},
			{
				test   : /\.css$/,
				loader : ExtractTextPlugin.extract(
					'css?sourceMap&minimize&keepBreaks&keepSpecialComments=0'
				)
			},
			{
				test   : /\.svg$/,
				loader : 'file-loader?name=svg/[name].[ext]'
			},
			{
				test   : /\.(jpg|jpeg|png|gif|ico)$/,
				loader : 'file-loader?name=img/[name].[ext]'
			}
		]
	},
	postcss : [autoprefixer({ browsers : ['last 2 versions'] })],
	resolve : {
		modules : ['src', 'node_modules']
	}
}
