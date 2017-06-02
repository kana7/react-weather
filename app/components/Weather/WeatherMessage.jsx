var React = require('react');

//view - presentational component

var WeatherMessage = ({
  temp,
  location
}) => {
  return (
    <h3 className="text-center">It is {temp}°C in {location}.</h3>
  );
};

module.exports = WeatherMessage;
