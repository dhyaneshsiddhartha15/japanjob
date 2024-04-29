import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';
import { FormattedMessage } from 'react-intl';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { toggleLanguage } = useLanguage();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'About', path: '/about' },
    { id: 3, text: 'Jobs', path: '/jobs' },
    { id: 4, text: 'Career', path: '/career' },
    { id: 5, text: 'Culture', path: '/culture' },
    { id: 6, text: 'Blogs', path: '/blogs' },
    { id: 7, text: 'Contact', path: '/contact' },
  ];

  return (
    <div className='gap-3 bg-gold-200 flex justify-between items-center h-20 w-full mx-auto px-4 text-black border border-indigo-800'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>JapanCareers
       
      </h1>
      
      <ul className='text-1xl hidden md:flex gap-6 mt-3 border-double p-2 px-4'>
     

        {navItems.map(item => (
          <li
            key={item.id}
            className='p-3 relative'
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={item.path}>{item.text}</Link>
            {hoveredItem === item.id && (
              <div className="bg-teal-500 h-[2px] w-full absolute bottom-0 left-0 transition-all duration-300"></div>
            )}
          </li>
        ))}
         <div className='text-bold bg-blue-400 rounded-md w-20 flex justify-center items-center'>
  <button onClick={toggleLanguage}><FormattedMessage id="toggleLanguageButton" defaultMessage="Lang" /></button>
</div>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
      
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-gray-200 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>JapanCareers</h1>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-blue-400 hover:text-black cursor-pointer border-gray-600 border-b rounded-xl duration-300'
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
        <div className='text-bold bg-blue-400 rounded-md w-full h-11 flex justify-center items-center'>
  <button onClick={toggleLanguage}><FormattedMessage id="toggleLanguageButton" defaultMessage="Lang" /></button>
</div>
      </ul>
    </div>
  );
};
