import React, { useState, useEffect } from 'react';
import HighlightText from '../Components/core/HighLightText';
import Footer from './Footer';

export const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=jp&' +
      'apiKey=766c3ecc68634e20ab85b350db2cce1f';
    const req = new Request(url);

    fetch(req)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && (
        <div class="flex justify-center items-center h-screen">
        <div class="rounded-full h-20 w-20 bg-blue-800 animate-ping"></div>
      </div>
      )}

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="text-center">
          <h1 className="p-6 text-3xl md:text-4xl lg:text-5xl">Latest News & Blogs from <HighlightText text={" Japan "}/></h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 cursor-pointer">
              <img className="w-full h-48 object-cover object-center" src={article.urlToImage} alt={article.title} />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{new Date(article.publishedAt).toLocaleString()}</p>
                <p className="text-gray-800">{article.content}</p>
                <a href={article.url} className="text-blue-500 mt-4 inline-block">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};
