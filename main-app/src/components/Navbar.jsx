import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center bg-gradient-to-r from-[#280065] to-[#754bdd] text-white h-24 max-w-[1536px] mx-auto px-4'>

      <h1 className='mx-auto'>
        <Link to="/"> 
        <img className='w-[200px] my-4' src={Logo} alt="/" />
        </Link>
        </h1>

      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="/">Home</Link></li>
        <li className='p-4'><Link to="/schedule">Schedule</Link></li>
        <li className='p-4'><Link to="/movi">Movies</Link></li>
        <li className='p-4'><Link to="/resources">Locations</Link></li>
        <li className='p-4'><Link to="/contact">About</Link></li>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <li className='p-4 border-b border-gray-600'><Link to="/">Home</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/schedule">Schedule</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/movies">Movies</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/locations">Location</Link></li>
          <li className='p-4'><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;