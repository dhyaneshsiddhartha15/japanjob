import React from 'react';
import Footer from "../../Pages/Footer";
import { Review } from '../core/AboutUsComponents/Review';
import { Counter } from '../core/AboutUsComponents/Counter';
export const AboutUs = () => {
  return (
    <div>
       <div className=" py-12 md:max-w-[1480px] m-auto  -mt-12 max-w-[500px] p-1 "> 
 <section class=" dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
            <p class="mb-4">We Are Your Gateway to Exciting Opportunities in Japan
At "Work Opportunities in Japan," we are passionate about connecting talented individuals with rewarding career prospects in Japan. Our mission is to bridge the gap between job seekers and employers, making the process of finding employment in Japan streamlined and efficient.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
        {/* <div className='justify-center items-center w-11/12 '>
    <h2 class="   mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Vision</h2>
     <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div> */}
    
   
    </div>
    <Review/>
    <div className='p-12  '>
    <Counter/>
    </div>
    
</section>

    </div> 
    <Footer/>
    </div>
    
   
  );
};

