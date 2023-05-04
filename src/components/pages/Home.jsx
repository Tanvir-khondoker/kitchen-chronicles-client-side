/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../component/Hero';
import Chefs from '../component/Chefs';
import VideoGraphy from '../component/VideoGraphy';
import CookingTips from '../component/CookingTips';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Chefs/>
            <VideoGraphy/>
            <CookingTips/>
        </div>
    );
};

export default Home;