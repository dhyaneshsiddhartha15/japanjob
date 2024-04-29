import React from 'react';
import Footer from "../../Pages/Footer";
import { Review } from '../core/AboutUsComponents/Review';
import { Counter } from '../core/AboutUsComponents/Counter';
import HighlightText from '../core/HighLightText';
import { FormattedMessage } from 'react-intl';
export const AboutUs = () => {
  return (
    <div>
      <div className="py-12 md:max-w-[1480px] m-auto -mt-12 max-w-[500px] p-1 ">
        <section className="dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl text-white"><HighlightText text={<FormattedMessage id="aboutus.title" defaultMessage="About" />} /></h2>
              <p className="mb-4">
                <FormattedMessage
                  id="aboutus.description"
                  defaultMessage="We Are Your Gateway to Exciting Opportunities in Japan
                    At 'Work Opportunities in Japan,' we are passionate about connecting talented individuals with rewarding career prospects in Japan. Our mission is to bridge the gap between job seekers and employers, making the process of finding employment in Japan streamlined and efficient."
                />
              </p>
              <p>
                <FormattedMessage
                  id="aboutus.additional"
                  defaultMessage="We are strategists, designers, and developers. Innovators and problem solvers. Small enough to be simple and quick."
                />
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="office content 2" />
            </div>
          </div>
          <Review />
          <div className='p-12  '>
            <Counter />
          </div>
        
          
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
