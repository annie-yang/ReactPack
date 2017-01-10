var React = require('react');

var WeatherMessage = React.createClass({
  render:function(){
    var {temp, location} = this.props;

    return(
      <div>
        <h3>It's {temp} °F in {location}</h3>
          <h2>How to convert Fahrenheit to Celcius:</h2>
          <p>Formula: T(°C) = (n°F - 32) × 5/9 = n°C</p>
          <p>Example: Fahrenheit: 50 </p>
          <p> (50 - 32) x 5/9 = 13°C</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
