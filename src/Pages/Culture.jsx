import React from 'react';

export const Culture = () => {
  return (
    <div className="w-11/12 mx-auto bg-white py-6 sm:py-8 lg:py-12">
      <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white mb-8">Japanese Culture</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
          </a>
        </div>
        <div>
          <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img
              src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
          </a>
        </div>
        <div>
          <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img
              src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
          </a>
        </div>
        <div>
          <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
          </a>
          <div className="p-4 bg-gray-100 shadow-lg rounded-lg md:h-80">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Cuisine</h3>
            <p className="text-gray-600 dark:text-gray-300">Discover popular Japanese dishes and dining customs, including sushi, ramen, and donburi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
