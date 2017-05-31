var React = require('react');

//view - presentational component

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>Il fait {temp}°C à {location}.</h3>
  );
};

module.exports = WeatherMessage;
