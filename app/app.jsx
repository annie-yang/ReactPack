var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Greeter = require('Greeter');
var Weather = require('Weather');

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="greeter" component={Greeter}/>
      <Route path="Weather" component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
