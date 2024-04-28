import React from 'react';
import HighlightText from '../core/HighLightText';


export const ExploreJob = () => {
  const boxes = [
    { title: 'Design', description: '235 Jobs Available' },
    { title: 'Finance', description: '235 Jobs Available' },
    { title: 'Engineering', description: '235 Jobs Available' },
    { title: 'Technology', description: '235 Jobs Available' },
    { title: 'Marketing', description: '235 Jobs Available' },
    { title: 'Analyst', description: '235 Jobs Available' },
  ];
  const firstRow = boxes.slice(0, 3);
  const secondRow = boxes.slice(3);

  return (
    <div>
      <section className='w-11/12 ml-auto  py-24'>
        <div className="   h-full relative w-11/12 max-w-[2000px] mx-auto pt-4 gap-4">
          <div className='md:text-7xl  items-center gap-3 justify-center  p-14 mr-48 sm:flex flex-row text-5xl'>
           Explore <HighlightText text={"Jobs"}/> by Category
          </div>

          <div className="flex flex-row flex-wrap  w-11/12">
            {firstRow.map((box, index) => (
              <div
                key={index}
                className="p-4 red w-full md:w-1/3 max-h-[250px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-red bg-white outline-double"
              >
                <h3 className="font-mullish text-2xl pt-4 text-green-700">{box.title}</h3>
                <p className="font-mullish py-3 text-grayText leading-normal">{box.description}</p>
              </div>
            ))}
          </div>
        
          <div className="flex flex-row flex-wrap w-11/12">
            {secondRow.map((box, index) => (
              <div
                key={index}
                className="p-4 red w-full md:w-1/3 max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-red bg-white outline-double"
              >
                <h3 className="font-mullish text-2xl pt-4 text-green-700">{box.title}</h3>
                <p className="font-mullish py-3 text-grayText leading-normal">{box.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
