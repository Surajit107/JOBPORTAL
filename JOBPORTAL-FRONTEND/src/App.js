import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs/Jobs";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import PostJobs from "./pages/PostJobs";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import JobDetails from "./pages/JobDetails";
import JobSingle from "./pages/JobSingle/JobSingle";
import BlogDetails from "./pages/BlogDetails";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobsingle/:id" element={<JobSingle />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobdetails/:id" element={<JobDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails/:id" element={<BlogDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/postjobs" element={<PostJobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
