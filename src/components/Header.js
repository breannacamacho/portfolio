import React from 'react';
//images
import Logo from '../assets/Camacho.png';

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='https://www.breannacamacho.com'>
          <img src={Logo} alt='' />
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>
  );
};

export default Header;
