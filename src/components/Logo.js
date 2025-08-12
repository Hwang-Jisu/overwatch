import React from 'react';
import logo from '../assets/images/logo_overwatch.png';

const Logo = () => {
  const year = new Date().getFullYear();

  return (
    <div className='logo'>
      <img src={logo} alt='overwatch' />
      <p>
        Copyright&copy; All Reserved <span>{year}</span>
      </p>
    </div>
  );
};

export default Logo;