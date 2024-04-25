import React from 'react';
import Footer from './Footer';
import { ResumeTips } from '../Components/core/CareerAdvice/ResumeTips';

export const Career = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto px-5 mt-16">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">Career Advice for Work Opportunities in Japan</h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">Discover valuable insights and tips for finding and succeeding in work opportunities in Japan.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 8h18M3 16h18" />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Language and Cultural Tips</h3>
            <p className="mt-1 text-gray-500">Navigate the Japanese work environment with tips on language and cultural nuances.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Networking Strategies</h3>
            <p className="mt-1 text-gray-500">Learn effective networking strategies for building professional relationships in Japan.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Language and Cultural Tips</h3>
            <p className="mt-1 text-gray-500">Offer language and cultural tips for non-Japanese speakers navigating the Japanese work environment.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Interview Preparation</h3>
            <p className="mt-1 text-gray-500">Share tips on preparing for job interviews in Japan, including common questions and cultural etiquette.</p>
          </div>
          
        </div>
        
      </div>
     
    </div>
    <ResumeTips/> 
    <Footer/>
    </>
  );
};


