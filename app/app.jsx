var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Greeter = require('Greeter');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="greeter" component={Greeter}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
