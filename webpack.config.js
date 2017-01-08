module.exports = {
  Entry: '.public/app.js',
  Output:{
    Path: __dirname,
    Filename: './public/bundle.js'
  },
  Resolve: {
    Extensions: ['', '.js', '.jsx']
  }
};
