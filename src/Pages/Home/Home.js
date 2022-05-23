import React from 'react';
import Banner from './Banner';
import BSummary from './BSummary';
import Parts from './Parts';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Parts></Parts>
            <BSummary></BSummary>
        </div>
    );
};

export default Home;