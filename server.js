var express = require('express')
var app     = express()

var isDevelopment = process.env.NODE_ENV !== 'production'
var port          = process.env.PORT || 3000

if (isDevelopment) {
	var webpack       = require('webpack')
	var webpackConfig = require('./webpack.config.dev')
	var compiler      = webpack(webpackConfig)

	app.use(require('webpack-hot-middleware')(compiler))
	app.use(require('webpack-dev-middleware')(compiler, {
		publicPath : webpackConfig.output.publicPath,
		colors     : true,
		noInfo     : true,
		hot        : true
	}))
}

app.use('/dist', express.static(__dirname + '/dist'))
app.use('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
	if (error) {
		console.error(error)
	} else {
		console.info('==> 🚧  Express server listening on port %s', port)

		if (isDevelopment)
			console.info('==> 🚧  Webpack development server listening on port %s', port)
	}
})
