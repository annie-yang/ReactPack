var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <h5>{message}</h5>
        </div>
      );
    }
});

module.exports = GreeterMessage;
