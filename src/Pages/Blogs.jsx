import React from 'react';
import HighlightText from '../Components/core/HighLightText';
import Footer from './Footer';

const cards = [
  {
    type: "Article",
    title: "Navigating Work Culture in Japan: A Guide for Foreigners",
    description: "Discover the unique work culture of Japan and how to adapt as a foreigner...",
    author: "Takumi Yamamoto",
    authorImage: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "Mar 16, 2020",
    readTime: "6 min read",
    image: "https://plus.unsplash.com/premium_photo-1682094211985-efbd0b19c22f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Video",
    title: "Job Interview Tips for Landing a Job in Japan",
    description: "Learn valuable tips and strategies for acing your job interview in Japan...",
    author: "Yui Tanaka",
    authorImage: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "Mar 10, 2020",
    readTime: "4 min read",
    image: "https://plus.unsplash.com/premium_photo-1682091037319-ae71d02c9d85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Article",
    title: "Exploring Career Paths in Japan",
    description: "Discover the diverse career opportunities available in Japan and how to pursue them...",
    author: "Sakura Tanaka",
    authorImage: "https://randomuser.me/api/portraits/women/1.jpg",
    date: "Mar 16, 2020",
    readTime: "6 min read",
    image: "https://plus.unsplash.com/premium_photo-1682091116913-cee3dac6d3a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Video",
    title: "Job Application Tips for Foreigners in Japan",
    description: "Learn essential tips for applying to jobs in Japan as a foreigner...",
    author: "Kenji Yamamoto",
    authorImage: "https://randomuser.me/api/portraits/men/2.jpg",
    date: "Mar 10, 2020",
    readTime: "4 min read",
    image: "https://plus.unsplash.com/premium_photo-1682093297369-9ed9fe352b6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Case Study",
    title: "Cultural Challenges Faced by Foreign Workers in Japan",
    description: "Explore the cultural challenges that foreign workers often encounter in Japan...",
    author: "Yuki Tanaka",
    authorImage: "https://randomuser.me/api/portraits/women/3.jpg",
    date: "Feb 12, 2020",
    readTime: "11 min read",
    image: "https://plus.unsplash.com/premium_photo-1682094221944-b9b343642790?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Case Study",
    title: "Success Stories: Overcoming Language Barriers in Japanese Workplaces",
    description: "Read inspiring stories of foreigners who have successfully overcome language barriers in Japan...",
    author: "Aiko Sato",
    authorImage: "https://randomuser.me/api/portraits/women/4.jpg",
    date: "Feb 12, 2020",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1573633509389-0e3075dea01b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];



const Card = ({ card }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={card.image} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href="#" className="hover:underline">{card.type}</a>
          </p>
          <a href="#" className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{card.title}</p>
            <p className="mt-3 text-base text-gray-500">{card.description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">{card.author}</span>
              <img className="h-10 w-10 rounded-full" src={card.authorImage} alt="" />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href="#" className="hover:underline">{card.author}</a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={card.date}>{card.date}</time>
              <span aria-hidden="true">·</span>
              <span>{card.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Blogs = () => {
  return (
    <>
      <div>
        <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3"></div>
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight  sm:text-4xl">Insights and Articles on Work in <HighlightText text={"Japan"}/></h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {cards.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};



