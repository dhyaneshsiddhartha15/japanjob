// api/search-api.js
export default async function handler(req, res) {
    const { searchQuery, currentPage, jobsPerPage } = req.query;
    const location = "Japan";
    const engine = "google_jobs";
    const startIndex = (parseInt(currentPage) - 1) * parseInt(jobsPerPage);
    const endIndex = startIndex + parseInt(jobsPerPage);
    const api_key = process.env.REACT_APP_JOB_API_KEY;
    const baseUrl = `https://www.searchapi.io/api/v1/search?api_key=${process.env.REACT_APP_JOB_API_KEY}&engine=${engine}&location=${location}&q=${encodeURIComponent(searchQuery)}`;
  
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      console.log(response);
      console.log(data);
      const jobs = data?.jobs || [];
      res.status(200).json(jobs.slice(startIndex, endIndex));
    } catch (error) {
      console.error('Error fetching job listings:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  