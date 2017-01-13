var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Greeter = require('Greeter');
var Weather = require('Weather');

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="Weather" component={Weather}/>
      <IndexRoute component={Greeter}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
