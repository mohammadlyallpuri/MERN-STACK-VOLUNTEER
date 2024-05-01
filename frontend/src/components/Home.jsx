import React from 'react';
import Members from '../miniComponents/Members';
import Hero from '../miniComponents/Hero';
import Qualities from '../miniComponents/Qualities'; // Corrected import statement

const Home = () => {
  return (
    <>
      <Hero />
      <Members />
      <Qualities /> {/* Rendering the Qualities component */}
    </>
  );
};

export default Home;
