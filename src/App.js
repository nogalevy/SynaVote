import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeOrNotPage from './LikeOrNotPage.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LikeOrNotPage />
        </header>
      </div>
    );
  }
}

export default App;
