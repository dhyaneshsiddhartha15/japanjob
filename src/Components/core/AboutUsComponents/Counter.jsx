import React from 'react';

const counters = [
  { label: 'Job Listings', value: '200+' },
  { label: 'Companies', value: '50+' },
  { label: 'Users Registered', value: '1K+' },
  { label: 'Average Rating', value: '4.8' },
];

export const Counter = () => {
  return (
    <div className='bg-white'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
        {counters.map((counter, index) => (
          <div key={index} className="flex flex-col justify-center items-center gap-2 border border-double border-black p-4 rounded-md h-32 md:w-full">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-4xl">{counter.value}</span>
            </div>
            <span className="font-semibold opacity-70 text-sm text-center">{counter.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


