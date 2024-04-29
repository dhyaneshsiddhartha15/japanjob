import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs } from "./Components/HomePage/AboutUs";
import { Companies } from "./Components/HomePage/Companies";
import { ExploreJob } from "./Components/HomePage/ExploreJob";
import { GetJobsAlert } from "./Components/HomePage/GetJobsAlert";
import { Navbar } from "./Components/common/NavBar";
import Footer from "./Pages/Footer";
import { Home } from "./Pages/Home";
import { Career } from "./Pages/Career";
import { Jobs } from "./Pages/Jobs";
import { ContactUs } from "./Pages/ContactUs";
import { Culture } from "./Pages/Culture";
import { Blogs } from "./Pages/Blogs";
import { JobsListing } from "./Pages/JobsListing";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/jobs" element={<JobsListing/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/culture" element={<Culture/>} />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Companies />
              <GetJobsAlert />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}


export default App;
