import React from 'react';
import Banner from './Banner/Banner';
import MoreAbout from './MoreAbour/MoreAbout';
import Services from './Services/Services';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Services></Services>
                  <MoreAbout></MoreAbout>
            </div>
      );
};

export default Home;