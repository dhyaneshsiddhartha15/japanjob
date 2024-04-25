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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
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
