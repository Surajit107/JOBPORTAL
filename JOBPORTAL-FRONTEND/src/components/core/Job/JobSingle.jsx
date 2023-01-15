import JobSingleBanner from "../../common/banners/JobSingleBanner";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import PreLoader from "../../common/preloader/PreLoader";
import { CURRENCY } from "../../../baseUrl/common";
import { ToastContainer, toast } from 'react-toastify';


const JobSingle = () => {

  const { js_id } = useParams();
  const { loading } = useSelector((state) => state?.jobslice)
  const jobData = JSON.parse(window.localStorage.getItem("data"))
  const jobSingle = jobData?.filter((item) => item.id === js_id)
  const token = JSON.parse(window.localStorage.getItem("token"))

  const onApply = () => {
    toast.success('Appied Successfully 😊', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }



  return (
    <div>
      {loading && <PreLoader />}
      <JobSingleBanner title={jobSingle[0]?.title} />

      {/* <!-- ***** Fleet Ends ***** --> */}
      {jobSingle && (
        <section className="site-section">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="d-flex align-items-center">
                  <div>
                    <h2>{jobSingle[0]?.title}</h2>
                    <div>
                      <span className="ml-0 mr-2 mb-2">
                        <span className="mr-2">
                          <i className="fa fa-briefcase" aria-hidden="true"></i>
                        </span>
                        {jobSingle[0]?.company}
                      </span>
                      <span className="m-2">
                        <span className="mr-2">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {jobSingle[0]?.city}
                      </span>
                      <span className="m-2">
                        <span className=" mr-2">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </span>
                        <span className="text-primary">{jobSingle[0]?.status}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-6">
                    <a href="#!" className="btn btn-block btn-light btn-md">
                      <span className=" mr-2 text-danger">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                      </span>
                      Save Job
                    </a>
                  </div>
                  <div className="col-6">
                    {token ?
                      <Link to="#!" onClick={onApply} className="btn btn-block btn-primary btn-md">
                        Apply Now </Link>
                      :
                      <Link to="/signin" className="btn btn-block btn-primary btn-md">
                        Apply Now
                      </Link>}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="mb-5">
                  <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                    <span className="icon-align-left mr-3">
                      <i className="fa fa-align-left" aria-hidden="true"></i>
                    </span>
                    Job Description
                  </h3>
                  <p>{jobSingle[0]?.desc}</p>
                </div>
                <div className="mb-5">
                  <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                    <span className="icon-rocket mr-3">
                      <i className="fa fa-rocket" aria-hidden="true"></i>
                    </span>
                    Responsibilities
                  </h3>
                  <ul className="list-unstyled m-0 p-0">
                    <li className="d-flex align-items-start mb-2">
                      <span>{jobSingle[0]?.resp}</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-5">
                  <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                    <span className="icon-book mr-3">
                      <i className="fa fa-book" aria-hidden="true"></i>
                    </span>
                    Education + Experience
                  </h3>
                  <ul className="list-unstyled m-0 p-0">
                    <li className="d-flex align-items-start mb-2">
                      <span>{jobSingle[0]?.edu}</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-5">
                  <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                    <span className="icon-turned_in mr-3">
                      <i className="fa fa-cubes" aria-hidden="true"></i>
                    </span>
                    Others
                  </h3>
                  <ul className="list-unstyled m-0 p-0">
                    <li className="d-flex align-items-start mb-2">
                      <span>{jobSingle[0]?.others}</span>
                    </li>
                  </ul>
                </div>
                <div className="row mb-5">
                  <div className="col-6">
                    <a href="#!" className="btn btn-block btn-light btn-md">
                      <span className="icon-heart-o mr-2 text-danger">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                      </span>
                      Save Job
                    </a>
                  </div>
                  <div className="col-6">
                    {token ?
                      <Link to="#!" onClick={onApply} className="btn btn-block btn-primary btn-md">
                        Apply Now
                      </Link>
                      : <Link to="/signin" className="btn btn-block btn-primary btn-md">
                        Apply Now
                      </Link>}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-light p-3 border rounded mb-4">
                  <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                    Job Summary
                  </h3>
                  <ul className="list-unstyled pl-3 mb-0">
                    <li className="mb-2">
                      <strong className="text-black">Published on:</strong>{" "}
                      {jobSingle[0]?.date}
                    </li>
                    <li className="mb-2">
                      <strong className="text-black">Vacancy:</strong> {jobSingle[0]?.vacancy}
                    </li>
                    <li className="mb-2">
                      <strong className="text-black">Employment Status:</strong>{" "}
                      {jobSingle[0]?.status}
                    </li>
                    <li className="mb-2">
                      <strong className="text-black">Experience:</strong> {jobSingle[0]?.exp}
                    </li>
                    <li className="mb-2">
                      <strong className="text-black">Job Location:</strong> {jobSingle[0]?.city}
                    </li>
                    <li className="mb-2">
                      <strong className="text-black">Salary:</strong>
                      {CURRENCY}{jobSingle[0]?.salary_min} -
                      {CURRENCY}{jobSingle[0]?.salary_max}
                    </li>
                    <li className="mb-2">
                      <strong className="text-black">Gender:</strong> {jobSingle[0]?.gender}
                    </li>
                    <li className="mb-2">
                      <strong className="text-black">
                        Application Deadline:
                      </strong>{" "}
                      {jobSingle[0]?.deadline}
                    </li>
                  </ul>
                </div>
                <div className="bg-light p-3 border rounded">
                  <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Share</h3>
                  <div className="px-3">
                    <a href="#!" className="pt-3 pb-3 pr-3 pl-0">
                      <span className="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a href="#!" className="pt-3 pb-3 pr-3 pl-0">
                      <span className="icon-twitter">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a href="#!" className="pt-3 pb-3 pr-3 pl-0">
                      <span className="icon-linkedin">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a href="#!" className="pt-3 pb-3 pr-3 pl-0">
                      <span className="icon-pinterest">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* <!-- ***** Fleet Ends ***** --> */}
      <ToastContainer />
    </div>
  );
};

export default JobSingle;
