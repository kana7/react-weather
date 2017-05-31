var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');

var Weather = React.createClass({
  getInitialState: function() {
    return {isLoading: false}
  },
  handleSearch: function(location) {
    var that = this;
    that.setState({isLoading: true});
    openweathermap.getTemp(location).then(function(temp) {
      that.setState({location: location, temp: temp, isLoading: false});
    }, function(errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  },
  render: function() {
    var {location, temp, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching wether...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/> {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
