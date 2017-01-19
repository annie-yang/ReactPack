var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Greeter = require('Greeter');
var Weather = require('Weather');
var Timer = require('Timer');
var Countdown = require('Countdown');

$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="Weather" component={Weather}/>
      <Route path="Timer" component={Timer}/>
      <Route path="Countdown" component={Countdown}/>
      <IndexRoute component={Greeter}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
