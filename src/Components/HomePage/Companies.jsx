import React from 'react';
import logo1 from "../../assests/Logo/logo1.jpg"
import logo2 from "../../assests/Logo/logo2.jpg"
import logo3 from "../../assests/Logo/loogo3.png"
import logo4 from "../../assests/Logo/logo4.png"
import logo5 from "../../assests/Logo/logo5.png"
import logo6 from "../../assests/Logo/logo6.png"
export const Companies = () => {
  return (
    <div className='w-full bg-white py-12'>
      <div className='md:max-w-[1480px] mx-auto px-6'>
        <h2 className='text-center text-3xl md:text-4xl font-bold text-gray-900'>
          Trusted by Leading Companies
        </h2>
        <p className='text-center text-blue-300 text-xl mt-2'>
          Over 25,000 teams around the world rely on our platform for job skills
        </p>
        <div className='flex flex-wrap justify-center items-center gap-8 mt-8'>
          <img src={logo1} alt='Company Logo' className='h-12' />
          <img src={logo2} alt='Company Logo' className='h-12' />
          <img src={logo3} alt='Company Logo' className='h-12' />
          <img src={logo4} alt='Company Logo' className='h-12' />
          <img src={logo5} alt='Company Logo' className='h-12' />
          <img src={logo6} alt='Company Logo' className='h-12' />
        </div>
      </div>
    </div>
  );
};
