import React, { Component } from 'react';
import './App.css';
import HeaderTab from './jsx/HeaderTab.jsx';
import BrowserDetection from 'react-browser-detection'; 

class App extends Component { 

  render() {
    const browserHandler = {
      // chrome: () => <div>Chrome is fantastic!</div>,
      // googlebot: () => <div>Hi GoogleBot!</div>,
      // default: (browser) => <div>Hi {browser}!</div>,
      chrome: () => <HeaderTab/>,
      firefox: () => <HeaderTab/>,
      googlebot: () => <div>Hi GoogleBot!</div>,
      default: (browser) => <div>Hi {browser}! <HeaderTab/>,</div>,
    };
    return (
      <div className="App"> 
      <div className="MainHeader" >
        Welcome to Rajat's Portal.
      </div>
        <BrowserDetection>
          { browserHandler }
        </BrowserDetection>        
      </div>
    );
  }
}

export default App;
