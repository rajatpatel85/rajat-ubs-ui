import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './Customer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
			Welcome to UBS portal.
          To login to customer portal, click <code>here</code>
		  To login to order portal, click <code>here</code>
        </p>
        <Customer/>
      </div>
    );
  }
}

export default App;
