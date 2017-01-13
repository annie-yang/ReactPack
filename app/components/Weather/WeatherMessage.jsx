var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h3 className="text-center textColor">It's {temp} °F in {location}</h3>
        <br/>
        <h4 className="textColor">How to convert Fahrenheit to Celcius:</h4>
        <p className="textColor">Formula: T(°C) = (n°F - 32) × 5/9 = n°C</p>
        <p className="textColor">Example: If Fahrenheit is 50: (50 - 32) x 5/9 = 13°C</p>
    </div>
  );
}

module.exports = WeatherMessage;
