import React from 'react';
import DogCards from '../landingPage/dogCards'
import LandingBar from '../landingPage/landingBar'
import '../stylesheets/landingPage.css';

const landingPage = () => {
    return (
        <div>
            <LandingBar />
            <DogCards />
        </div>
    );
}

export default landingPage;