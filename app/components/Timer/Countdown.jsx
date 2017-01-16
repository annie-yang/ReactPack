var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState:function(){
    return{
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer); // clear timer
    this.timer = undefined; // clean up the variable
  },
  startTimer: function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0){
          this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange:function(newStatus){
      this.setState({countdownStatus: newStatus});
  },
  render:function(){
    var {count, countdownStatus} = this.state;

    var renderControlArea =  () => {
      if(countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}></Controls>;
      } else{
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };

    return(
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
{}      </div>
    );
  }
});

module.exports = Countdown;

/*
  NOTES:
    gets fired before the fact
    takes in next props and next state

    componentWillUpdate: function(nextProps, nextState){

    },

    ------------------------------------------------
    component always get fired first
    gets loaded when switching tabs
    component gets rendered to the screen, the component will mount and lifecycle method gets called

    componentWillMount: function(){
      console.log('componentWillMount');
    },

    ------------------------------------------------
    gets fired right after everything gets rendered in the DOM
    gets fired after "componentWillMount"
    access to any refs if want to do any updating

    componentDidmount:function(){
      console.log('componentDidmount');
    },
*/
