// Import statements
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Jobs } from './Jobs';
import HighlightText from '../Components/core/HighLightText';
import Footer from "./Footer";

// JobsListing component
export const JobsListing = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Engineer');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  useEffect(() => {
    const fetchJobListings = async () => {
      if (!searchQuery) {
        setJobListings([]); 
        setLoading(false);
        return;
      }

      const api_key = "nBdsRXhhjn3rWFsmxRqLyP63"; 
      const location = "Japan";
      const engine = "google_jobs";
      const startIndex = (currentPage - 1) * jobsPerPage;
      const endIndex = startIndex + jobsPerPage;
      const baseUrl = `/api/v1/search?api_key=${api_key}&engine=${engine}&location=${location}&q=${encodeURIComponent(searchQuery)}`;

      try {
        const response = await axios.get(baseUrl);
        const jobs = response.data.jobs || [];
        setJobListings(jobs.slice(startIndex, endIndex));
      } catch (error) {
        console.error('Error fetching job listings:', error);
        setError(error);
      }

      setLoading(false);
    };

    fetchJobListings();
  }, [searchQuery, currentPage, jobsPerPage]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return  <div class="flex justify-center items-center h-screen">
  <div class="rounded-full h-20 w-20 bg-blue-800 animate-ping"></div>
</div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className='w-11/12 justify-center max-w-4xl mx-auto px-5 mt-5'>
        <div className="text-center">
          <h2 className="font-semibold text-5xl p-2">Explore Exciting Job Opportunities in <HighlightText text={"Japan"} /></h2>
          <p className="max-w-md mx-auto mt-2 text-gray-500">Discover a wide range of job listings in Japan, offering unique career prospects in diverse fields.</p>
        </div>
        <input
          type="text"
          placeholder="Search for a job..."
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-2xl p-2 mb-4 w-full mt-8 shadow-2xl"
        />
        <div>
          <p className='text-xl'>Total Jobs: {jobListings.length}</p>
          <ul className='border-double'>
            {jobListings.map(job => (
              <li key={job.position} className="border-b border-black py-4 hover:shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <img src={job.thumbnail} alt={job.title} className="w-12 h-12 object-cover mr-4" />
                    <div className="inline-block text-lg font-bold text-black">{job.title}</div>
                  </div>
                  <div className="text-sm text-blue-500">{job.company_name}</div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  <a href={job.company_web_results_link} target="_blank" rel="noopener noreferrer">Apply</a>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            {currentPage > 1 && (
              <button onClick={() => paginate(currentPage - 1)} className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400">Previous</button>
            )}
            {jobListings.length === jobsPerPage && (
              <button onClick={() => paginate(currentPage + 1)} className=" mb-7 p-6 px-8 py-2 bg-gray-300 hover:bg-gray-400">Next</button>
            )}
          </div>
        </div>
      </div>
      <Jobs />
      <Footer />
    </>
  );
};