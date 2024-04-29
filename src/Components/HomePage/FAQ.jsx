import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import HighlightText from '../core/HighLightText';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'faq.costOfLiving',
      answer:
        'faq.costOfLivingAnswer',
    },
    {
      question: 'faq.findJobDifficulty',
      answer:
        'faq.findJobDifficultyAnswer',
    },
    {
      question: 'faq.availableJobs',
      answer:
        'faq.availableJobsAnswer',
    },
  ];

  const toggleActive = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col justify-center items-center w-11/12 m-auto p-6 ">
      <div className="container w-11/12">
        <h1 className="text-5xl  mb-4 text-center p-9">
          <FormattedMessage id="home.frequentlyAskedQuestions" defaultMessage="Frequently Asked Questions" />
        </h1>
        <div className="divide-y divide-gray-200 2">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleActive(index)}
              >
                <h2 className="text-lg font-medium">
                  <FormattedMessage id={faq.question} defaultMessage={faq.question} />
                </h2>
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
                <p className="mt-2 text-gray-600">
                  <FormattedMessage id={faq.answer} defaultMessage={faq.answer} />
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
