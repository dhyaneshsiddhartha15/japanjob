import React from 'react';
const sections = [
  {
    title: 'Rewards of Working in Japan',
    content: [
      'Professional Growth: Highlight the opportunities for professional development and the acquisition of unique skills that are highly valued globally.',
      'Cultural Enrichment: Emphasize the personal growth that comes from experiencing Japan\'s rich cultural heritage and social customs.'
    ]
  },
  {
    title: 'Challenges of Working in Japan',
    content: [
      'Adaptation: Acknowledge the initial challenges of adapting to the work environment, such as understanding business etiquette and long working hours.',
      'Language Barrier: Discuss the importance of learning Japanese for smoother integration into the workplace and society.'
    ]
  },
  {
    title: 'Encouragement and Support',
    content: [
      'Support Networks: Provide information on expat communities, language classes, and cultural assimilation programs that can help newcomers adjust.',
      'Final Encouragement: Offer words of encouragement for those considering the move, emphasizing that the rewards of working in Japan can far outweigh the challenges.'
    ]
  }
];

export const RewardsInJapan = () => {
  return (
    <div className='flex flex-col p-4 md:flex-row'>
      {sections.map((section, index) => (
        <div
          key={index}
          className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400"></span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <h1 className='text-xl font-semibold'>{section.title}<hr/></h1>
              {section.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


