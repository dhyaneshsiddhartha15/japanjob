import React from 'react';
import heroImg from '../assests/research.png';
import HighlightText from '../Components/core/HighLightText';
import { Companies } from '../Components/HomePage/Companies';
import { ExploreJob } from '../Components/HomePage/ExploreJob';
import { GetJobsAlert } from '../Components/HomePage/GetJobsAlert';
import { FAQ } from '../Components/HomePage/FAQ';

export const Home = () => {
  return (
    <>
     <div className='w-11/12 mx-auto bg-white py-24'>
      <div className=' md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[500px]'>
        <div className=' 2 flex flex-col justify-start gap-4  md:mt-0 md:ml-32'>
          <p className='py-2 text-2xl text-white font-medium'>Unlock Your Future</p>
          <h1 className='py-4 md:text-6xl text-5xl font-semibold'>Discover Job Opportunities in <HighlightText text={'JAPAN'} /></h1>
          <p className='py-5 text-base text-gray-300'>Explore a new world of career possibilities in the land of the rising sun.</p>
          <div className='relative w-full bg-white p-2 rounded-3xl mt-8 outline-double search-container'>
            <section className='w-full h-10 flex items-center relative'>
              <span className='w-10 h-full flex items-center'></span>
              <input type='text' className='w-full h-full font-medium md:pl-2 focus:outline-none' placeholder='Search Your Job' />
              <button className='w-24 md:w-60 h-full bg-blue-800 flex justify-center items-center rounded-2xl text-white font-medium'>
                Search
              </button>
            </section>
          </div>
          <div className='ml-3 text-white font-kanit flex justify-between items-center w-full'>
            Tags:Digital Marketing,UI/UX Designer,Data Analyst
          </div>
        </div>
        <img className='md:order-last  order-first ' src={heroImg} alt='Hero' />
      
      </div>
      </div>
      <ExploreJob/>
  <FAQ/>
       
    </>
   
      
    
      
    
   
  );
};
