module.exports = {
  entry: './public/app.js', // where to start processing code
  output:{
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
