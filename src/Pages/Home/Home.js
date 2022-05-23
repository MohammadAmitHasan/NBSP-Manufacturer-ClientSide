import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Parts></Parts>
        </div>
    );
};

export default Home;