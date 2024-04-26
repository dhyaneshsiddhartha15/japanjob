import React from 'react';

const opportunities = [
  {
    title: 'Unique Opportunities',
    description: 'Explore exciting job listings in Japan that you won\'t find anywhere else.'
  },
  {
    title: 'Cultural Immersion',
    description: 'Immerse yourself in the rich culture of Japan while advancing your career.'
  },
  {
    title: 'Thrilling Challenges',
    description: 'Take on thrilling challenges and grow professionally in the Land of the Rising Sun.'
  },
  {
    title: 'Sushi Breaks',
    description: 'Enjoy delicious sushi breaks while working towards your dream job in Japan.'
  },
  {
    title: 'Zen Work Environment',
    description: 'Experience a zen work environment that promotes productivity and peace of mind.'
  },
  {
    title: 'Cultural Enrichment',
    description: 'Emphasize the personal growth that comes from experiencing Japan\'s rich cultural heritage and social customs.'
  }
]; 

export const Opportunities = () => {
  return (
    <div className="container p-9 mx-auto space-y-3 dark:text-white">
      <div className="flex items-center justify-center">
        <div className="grid gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="w-full max-w-xs text-center">
              <div className="object-cover object-center w-full h-48 mx-auto rounded-lg bg-blue-100 border-4 border-blue-200">
                <div className="p-6">
                  <h5 className="text-2xl font-bold dark:text-black p-2">{opportunity.title}</h5>
                  <span className="font-medium dark:text-black mb-11">{opportunity.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


