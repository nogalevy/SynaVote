import React, { Component } from 'react';
import './App.css';
import LikeOrNotPage from './LikeOrNotPage.js';
import CoverPage from './CoverPage';
import { BrowserRouter as Router, Route } from "react-router-dom";


class MainRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/cover"
                            component={
                                CoverPage
                                // this.state.displayCoverPage ?
                                //     CoverPage
                                //     :
                                //     HomePage
                            } />
                        <Route exact path="/"
                            component={LikeOrNotPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default MainRouter;
