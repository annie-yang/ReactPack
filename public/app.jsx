var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
var Greeter = require('Greeter');

var greet = 'World';

ReactDOM.render(
  <Greeter name={greet}/>,
  document.getElementById('app')
);
