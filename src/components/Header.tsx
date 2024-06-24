import React from 'react';
import stacklineLogo from '../assets/stackline_logo.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-[#042949] text-white p-4 flex items-center">
      <img src={stacklineLogo} alt="Stackline Logo" className="h-8 mr-2" />
    </header>
  );
};

export default Header;
