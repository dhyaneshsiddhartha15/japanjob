import "./App.css";
import { Companies } from "./Components/HomePage/Companies";
import { ExploreJob } from "./Components/HomePage/ExploreJob";
import { GetJobsAlert } from "./Components/HomePage/GetJobsAlert";
import { Navbar } from "./Components/common/NavBar";
import { Home } from "./Pages/Home";

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Companies/>
    <GetJobsAlert/>
    {/* <ExploreJob/> */}
   </div>
  );
}

export default App;
