import React, { Component } from 'react';
import kobimarimi from './images/kobimarimi.jpg';
import './LikeOrNotPage.css';

class LikeOrNotPage extends Component {
  render() {
    return (
      <div>

        <div>
          <img className="song-image" src={kobimarimi} alt="kobimarimi" />
        </div>
        <div className="icons-container">
          <div className="heart icon">
            <i className="fas fa-heart fa-5x" />
          </div>
          <div className="x icon">
            <i className="fas fa-times fa-5x" />
          </div>
        </div>

      </div>
    );
  }
}

export default LikeOrNotPage;
