import React from 'react';
import HighlightText from '../Components/core/HighLightText';
import Footer from './Footer';
import {FaArrowRight} from "react-icons/fa"
import { JapanWork } from '../Components/core/CulturePage/JapanWork';
import { CTAButton } from '../Components/core/CTAButton';
import { RewardsInJapan } from '../Components/core/CulturePage/RewardsInJapan';
import { Opportunities } from '../Components/core/CulturePage/Opportunities';


export const Culture = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-5 mt-16">
        <div className="text-center">
          <h2 className="font-semibold text-5xl p-2 space-y-0.5 sm:text-7xl">Understanding the   <HighlightText text={" Japanese "} /> Work  Culture </h2>
          <p className="max-w-md mx-auto mt-2 text-gray-500">Explore the nuances of Japan's unique work environment.</p>
        </div>
        <div>
          <div className='w-11/12 flex flex-col sm:flex-row gap-7 text-white max-w-4xl mx-auto mt-16 ml-0 sm:ml-72'>
            <CTAButton active={true} linkto={"/jobs"} className="w-full sm:w-auto">
              <div className='flex items-center gap-3'>
                Jobs Listings
                <FaArrowRight />
              </div>
            </CTAButton>
            <CTAButton active={false} linkto={"/about"} className="w-full sm:w-auto">
              <div>
                Learn more
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
      <JapanWork/>
      <RewardsInJapan/>
      <Opportunities/>
      <Footer />
     
      
    </>
  );
};
