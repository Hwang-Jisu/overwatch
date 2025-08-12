import React from 'react';

const Hero = ({ index }) => {
  const heroStyle = {
    backgroundImage: `url(/images/hero${index}.png)`
  };

  return (
    <div className='hero'>
      <div className='image' style={heroStyle}></div>
    </div>
  );
};

export default Hero;