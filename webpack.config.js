var webpack = require('webpack');

module.exports = {
  entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery',
		foundation: 'Foundation'
	},
  plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
  output:{
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Greeter: 'app/components/Greeter/Greeter.jsx',
      GreeterForm: 'app/components/Greeter/GreeterForm.jsx',
      GreeterMessage: 'app/components/Greeter/GreeterMessage.jsx',
      Weather: 'app/components/Weather/Weather.jsx',
      WeatherForm: 'app/components/Weather/WeatherForm.jsx',
      WeatherMessage: 'app/components/Weather/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/Weather/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss',
      Timer: 'app/components/Timer/Timer.jsx',
      Countdown: 'app/components/Timer/Countdown.jsx',
      Clock: 'app/components/Timer/Clock.jsx',
      CountdownForm: 'app/components/Timer/CountdownForm.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
    {
      loader: 'babel-loader',
      query:{
  	     presets: ['react', 'es2015']
   	  },
  	   test: /\.jsx?$/,
       exclude: /(node_modules|bower_componets)/
      }
    ]
  }
};
