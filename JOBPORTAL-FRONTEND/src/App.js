import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import PostJobs from "./pages/PostJobs";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import JobDetails from "./components/core/Job/JobDetails";
import JobSingle from "./components/core/Job/JobSingle";
import BlogDetails from "./components/core/Blog/BlogDetails";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./privateRoute/PrivateRoute";
import { ToastContainer, Flip } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobsingle/:js_id" element={<JobSingle />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobdetails/:jd_id" element={<JobDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails/:bid" element={<BlogDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/postjobs" element={<PostJobs />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer transition={Flip} theme="colored"/>
    </div>
  );
}

export default App;
