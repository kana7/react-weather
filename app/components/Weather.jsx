var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');

var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {isLoading: false, errorMessage: undefined}
  },
  handleSearch: function(location) {
    var that = this;
    that.setState({isLoading: true, errorMessage: undefined});
    openweathermap.getTemp(location).then(function(temp) {
      that.setState({location: location, temp: temp, isLoading: false});
    }, function(error) {
      that.setState({isLoading: false, errorMessage: error.message});
    });
  },
  render: function() {

    var {location, temp, isLoading, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching wether...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }
    function renderError() {
      if (typeof errorMessage === "string") {
        return <ErrorModal message={errorMessage}/>
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/> {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
