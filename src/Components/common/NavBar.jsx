import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Jobs' },
    { id: 4, text: 'Career ' },
    { id: 5, text: 'Culture' },
    { id: 6, text: 'Companies' },
    { id: 7, text: 'Contact' },
  ];

  return (
    <div className='gap-8 bg-blue-700 flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
    
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>WOIJ</h1>


      <ul className='text-1xl hidden md:flex  gap-6 mt-3'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-6 hover:bg-[#00df9a] rounded-xl m-5 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

     
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

     
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-blue-700 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
       
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>WOIJ.</h1>

  
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
