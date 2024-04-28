import React from 'react';

export const GetJobsAlert = () => {
  return (
    <div className='w-full bg-blue-700 py-12 justify-center items-center'>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[500px] ml-2'>
        <div className='flex flex-col justify-start gap-4 md:mt-0 md:ml-32'>
          <p className='py-2 text-4xl text-white font-medium'>Get Jobs Alert</p>
          <p className='py-2 text-base text-gray-300'>Stay updated with the latest job opportunities in Japan. Subscribe to our job alerts and be the first to know about new openings in your field.</p>
          <div className='flex flex-row gap-1'>
            <label className='block w-full'>
              <input
                type='email'
                name='email'
                className='mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'
                placeholder='you@example.com'
              />
            </label>
            <button className='p-2 bg-black text-white shadow-md hover:shadow-lg rounded-md w-48 h-11'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
