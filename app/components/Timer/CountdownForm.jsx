var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();

    var strSeconds = this.refs.referenceSeconds.value;

    if(strSeconds.match(/^[0-9]*$/)){
      this.refs.referenceSeconds.value = '';

      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render:function(){
    return(
      <div>
        <form ref="referenceForm" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="referenceSeconds" placeholder="Enter time in seconds"></input>
          <button className="button expanded clock-button">Start</button>
        </form>
        <div>
          <br/>
          <h4 className="countdown-form-text">Convert minutes to seconds:</h4>
          <p className="countdown-form-text">Formula: minutes x 60 = seconds</p>
          <p className="countdown-form-text">Example: 30 minutes x 60 = 1800 seconds</p>
        </div>
      </div>
    );
  }
});

module.exports = CountdownForm;
