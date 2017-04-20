import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      lat:"",
      lon:"",
      temp:"",
      cond:""
    };
    
    this.componentWillMount = this.updateCoordinates.bind(this);
  }

  updateCoordinates() {
    //Below is simple JS to get the browser's Lat/Lon, this is necessary to pass the data to the DarkSkies API
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      function success(pos) {
        var crd = pos.coords;
        this.setState({
          lat: crd.latitude,
          lon: crd.longitude
        });
      };

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
    navigator.geolocation.getCurrentPosition(success.bind(this), error, options);
  }
  componentWillMount(e){
    e.updateCoordinates();
  }
  render() {
    
    return (
      <div className="Wrapper">
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Your local weather</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          test data- lat:{this.state.lat} && lon:{this.state.lon}
        </p>
        <p>
          temperature:{this.state.temp}<br/>
          condition:{this.state.cond}
        </p>
      </div>
      </div>
    );
    
  }

}

export default App;
