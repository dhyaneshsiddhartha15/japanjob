import React from 'react';
import Footer from './Footer';
import { ResumeTips } from '../Components/core/CareerAdvice/ResumeTips';
import HighlightText from '../Components/core/HighLightText';


export const Career = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-5 mt-16">
        <div className="text-center">
          <h2 className="font-semibold text-5xl p-2">Career Advice for Work Opportunities in <HighlightText text={"Japan"} /></h2>
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
              <h3 className="font-semibold text-xl">Interview Preparation</h3>
              <p className="mt-1 text-gray-500">Share tips on preparing for job interviews in Japan, including common questions and cultural etiquette.</p>
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
              <h3 className="font-semibold text-xl">Work Visa Information</h3>
              <p className="mt-1 text-gray-500">Provide information on the types of work visas available in Japan and the application process for each.</p>
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
              <h3 className="font-semibold text-xl">Industry Insights</h3>
              <p className="mt-1 text-gray-500">Offer insights into specific industries in Japan, including growth sectors, major companies, and key trends.</p>
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
              <h3 className="font-semibold text-xl">Professional Skills Development</h3>
              <p className="mt-1 text-gray-500">Provide resources and tips for developing skills that are in demand in the Japanese job market, such as technology skills or language proficiency.</p>
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
              <h3 className="font-semibold text-xl">Salary and Benefits Guidance</h3>
              <p className="mt-1 text-gray-500">Offer guidance on typical salary ranges and benefits packages in Japan, as well as negotiation tips.</p>
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
              <h3 className="font-semibold text-xl">Job Market Trends</h3>
              <p className="mt-1 text-gray-500">Discuss current job market trends in Japan, including job availability, demand for specific skills, and emerging industries.</p>
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
              <h3 className="font-semibold text-xl">Workplace Etiquette</h3>
              <p className="mt-1 text-gray-500">Provide tips on workplace etiquette in Japan, including communication styles, dress code, and meeting etiquette.</p>
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
              <h3 className="font-semibold text-xl">Career Paths and Advancement</h3>
              <p className="mt-1 text-gray-500">Offer guidance on career paths and advancement opportunities in Japan, including tips for career planning and skill development.</p>
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
              <h3 className="font-semibold text-xl">Legal and Labor Rights</h3>
              <p className="mt-1 text-gray-500">Provide information on labor rights and legal requirements for working in Japan, including working hours, holidays, and health insurance.</p>
            </div>
          </div>
        </div>
      </div>
      <ResumeTips />
      <Footer />
    </>
  );
};

