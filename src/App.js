import React, { Component } from 'react';
import './App.css';
import LikeOrNotPage from './LikeOrNotPage.js'
import MainRouter from './MainRouter';


class App extends Component {
  render() {
    return (
      <div className="App">
<MainRouter/>      </div>
    );
  }
}

export default App;
