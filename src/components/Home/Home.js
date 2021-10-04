import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

import Contact from '../Contact/Contact';
import OurService from '../OurService/OurService';
import Pricing from '../Pricing/Pricing';
import SuccesStudent from '../SuccesStudent/SuccesStudent';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <OurService></OurService>
            <SuccesStudent></SuccesStudent>
            <Pricing></Pricing>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;