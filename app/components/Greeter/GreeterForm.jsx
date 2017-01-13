var React = require('react');
var ReactDOM = require('react-dom');

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.referenceToName.value; // access property from ref
    var message = this.refs.referenceToMessage.value;

    // if component received valid input
    if (name.length > 0) {
      this.refs.referenceToName.value = ''; // clear field

      // calls in function passed from parent (handleNewData)
      updates.name = name; // update state of parent component
    }

    if (message.length > 0) {
      this.refs.referenceToMessage.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="search" ref="referenceToName" placeholder="Enter your name"/>
        </div>
        <div>
          <br/>
          <textarea rows="4" cols="50" ref="referenceToMessage" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button className="button hollow">Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;
