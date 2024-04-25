import React from 'react';

export const Counter = () => {
  return (
    <div className='bg-blue-700  '>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">

        <div className="flex flex-col justify-center items-center gap-2 border border-double border-black-500 p-4 rounded-md h-32 md:w-full">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-4xl">200+</span>
          </div>
          <span className="font-semibold opacity-70 text-sm text-center">Job Listings</span>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 border border-double border-black-500 p-4 rounded-md h-32 md:w-full">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-4xl">50+</span>
          </div>
          <span className="font-semibold opacity-70 text-sm text-center">Companies</span>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 border border-double border-black-500 p-4 rounded-md h-32 md:w-full">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-4xl">1K+</span>
          </div>
          <span className="font-semibold opacity-70 text-sm text-center">Users Registered</span>
        </div>

        <div className="md:col-start-2 lg:col-auto flex flex-col justify-center items-center gap-2 border border-double border-black-500 p-4 rounded-md h-32 md:w-full">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-4xl">4.8</span>
          </div>
          <span className="font-semibold opacity-70 text-sm text-center">Average Rating</span>
        </div>

      </div>
    </div>
  );
};
