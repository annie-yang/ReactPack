var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./components/GreeterMessage');
var GreeterForm = require('./components/GreeterForm');
var Greeter = require('./components/Greeter');

var greet = 'World';

ReactDOM.render(
  <Greeter name={greet}/>,
  document.getElementById('app')
);
