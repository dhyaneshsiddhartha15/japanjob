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
      <section>
        <div className="   h-full relative w-full max-w-[2000px] mx-auto pt-4 gap-4 p-9">
          <div className='text-xl md:text-7xl flex justify-center items-center gap-3 p-16 mr-auto sm:text-9xl'>
           Explore <HighlightText text={"Jobs"}/> by Category
          </div>

          <div className="flex flex-row flex-wrap ">
            {firstRow.map((box, index) => (
              <div
                key={index}
                className="p-10 red w-full md:w-1/3 max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-red bg-white outline-double"
              >
                <h3 className="font-mullish text-lg pt-4 text-green-700">{box.title}</h3>
                <p className="font-mullish py-3 text-grayText leading-normal">{box.description}</p>
              </div>
            ))}
          </div>
        
          <div className="flex flex-row flex-wrap">
            {secondRow.map((box, index) => (
              <div
                key={index}
                className="p-10 red w-full md:w-1/3 max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-red bg-white outline-double"
              >
                <h3 className="font-mullish text-lg pt-4 text-green-700">{box.title}</h3>
                <p className="font-mullish py-3 text-grayText leading-normal">{box.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
