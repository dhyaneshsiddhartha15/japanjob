import React from 'react';

export const ResumeTips = () => {
  const tips = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
      ),
      title: 'Tip 1',
      description: 'Description for Tip 1',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
      ),
      title: 'Tip 2',
      description: 'Description for Tip 2',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
      ),
      title: 'Tip 3',
      description: 'Description for Tip 3',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-5 mt-16">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">Resume Tips</h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">Improve your resume with these tips.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {tips.map((tip, index) => (
          <div key={index} className="flex gap-4 items-start">
            <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              {tip.icon}
            </span>
            <div>
              <h3 className="font-semibold text-xl">{tip.title}</h3>
              <p className="mt-1 text-gray-500">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
