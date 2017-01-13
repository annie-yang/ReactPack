var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h3 className="text-center">It's {temp} °F in {location}</h3>
        <br/>
        <h4>How to convert Fahrenheit to Celcius:</h4>
        <p>Formula: T(°C) = (n°F - 32) × 5/9 = n°C</p>
        <p>Example: If Fahrenheit is 50: (50 - 32) x 5/9 = 13°C</p>
    </div>
  );
}

module.exports = WeatherMessage;
