var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value; // access property from ref
    var message = this.refs.message.value;

    // if component received valid input
    if (name.length > 0) {
      this.refs.name.value = ''; // clear field

      // calls in function passed from parent (handleNewData)
      updates.name = name; // update state of parent component
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
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

var greet = 'World';

ReactDOM.render(
  <Greeter name={greet}/>,
  document.getElementById('app')
);
