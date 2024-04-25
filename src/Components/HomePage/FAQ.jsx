import React, { useState } from 'react';
import HighlightText from '../core/HighLightText';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the cost of living in Japan?',
      answer:
        'The cost of living in Japan varies depending on the city and lifestyle. On average, you can expect to spend around $1,000 to $2,000 per month on rent, food, transportation, and other expenses.',
    },
    {
      question: 'Is it difficult to find a job in Japan as a foreigner?',
      answer:
        'Finding a job in Japan as a foreigner can be challenging, but it is not impossible. It is essential to have a strong grasp of the Japanese language and understand the cultural nuances of the job market.',
    },
    {
      question: 'What types of jobs are available in Japan?',
      answer:
        'There is a wide range of job opportunities available in Japan, including positions in IT, engineering, finance, education, and more. The key is to find a job that aligns with your skills and interests.',
    },
  ];

  const toggleActive = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="container w-11/12">
        <h1 className="text-5xl font-bold mb-4 text-center p-9">Frequently <HighlightText text={"Asked"}/> Questions</h1>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleActive(index)}
              >
                <h2 className="text-lg font-medium">{faq.question}</h2>
                <svg
                  className={`w-6 h-6 transition-transform transform ${
                    activeIndex === index ? 'rotate-90' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      activeIndex === index
                        ? 'M19 9l-7 7-7-7'
                        : 'M9 5l7 7-7 7'
                    }
                  />
                </svg>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
