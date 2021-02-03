import React from 'react';
import desktopImage from '../../assets/gradient.jpg';

const Banner = () => {

    return (
        <div className="banner-sizing" style={{backgroundImage: `url(${desktopImage})` }}>
            <div className="banner-content">
                <h1>Which doggo would you like to pet? </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna ante, mollis quis felis bibendum.</p>
            </div>
        </div>
    );
};

export default Banner;