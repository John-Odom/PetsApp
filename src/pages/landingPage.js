import React, { Component } from 'react';
import DogCards from '../landingPage/dogCards'
import LandingBar from '../landingPage/landingBar'
import '../stylesheets/landingPage.css';

class landingPage extends Component {
    render(){
        return (
            <div>
                <LandingBar />
        
                <DogCards />
            </div>
        );
    }
}

export default landingPage;