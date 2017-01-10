var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'World',
      message: 'Watch me change by simply typing in the box!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        message: this.props.message
    };
  },
  // parent component
  // sets state
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;
