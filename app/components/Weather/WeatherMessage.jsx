var React = require('react');

//view - presentational component
var WeatherMessage = React.createClass({
  render: function() {
    var location = this.props.location;
    var temp = this.props.temp;
    return (
      <h3>Il fait {temp}°C à {location}.</h3>
    );
  }
});

module.exports = WeatherMessage;
