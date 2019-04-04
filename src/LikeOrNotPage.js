import React, { Component } from 'react';
import kobimarimi from './images/kobimarimi.jpg';
import './LikeOrNotPage.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class LikeOrNotPage extends Component {
    state = {
        imageSrc:'https://upload.wikimedia.org/wikipedia/he/thumb/e/eb/Home_single_cover_art.jpg/250px-Home_single_cover_art.jpg'
    }
  render() {
    return (
      <div className="row">
          <div className="col-sm-3 col-md-3">
              <i className="fas fa-heart fa-5x" />
            </div>
          <div className="col-sm-6 col-md-6" id="like-or-not-image">
              <img className="song-image" src={this.state.imageSrc} alt="kobimarimi" />
          </div>
          <div className="col-sm-3 col-md-3">
              <i className="fas fa-times fa-5x" />
        </div>


        {/*<div className="icons-container">*/}
        {/*  <div className="heart icon">*/}
        {/*    <i className="fas fa-heart fa-5x" />*/}
        {/*  </div>*/}
        {/*  <div className="x icon">*/}
        {/*    <i className="fas fa-times fa-5x" />*/}
        {/*  </div>*/}
        {/*</div>*/}

      </div>
    );
  }
}

export default LikeOrNotPage;
