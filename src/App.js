import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 
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
        </p>
      </div>
      </div>
    );
    
  }

}

//Below is simple JS to get the browser's Lat/Lon, this is necessary to pass the data to the DarkSkies API
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);

export default App;
