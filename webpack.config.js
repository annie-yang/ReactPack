module.exports = {
  entry: './app/app.jsx',
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
      GreeterMessage: 'app/components/Greeter/GreeterMessage.jsx'
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
