import React, { useEffect } from "react";
import JobCard from "./JobCard";
import Banner from "../../components/common/banners/Banner";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs } from "../../redux/slice/JobSlice";


const Jobs = () => {
  const dispatch = useDispatch()
  const { fetch_job_data } = useSelector((state) => state.jobslice)

  useEffect(() => {
    dispatch(fetchAllJobs())
  }, [dispatch]);

  // console.log(fetch_job_data);

  return (
    <>
      <Banner string="Our" page="Jobs" />
      <section className="section" id="trainers">
        <div className="container">
          <>
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  {fetch_job_data?.map((jobItem) => {
                    return <JobCard {...jobItem} key={jobItem.id} />;
                  })}
                </div>
              </div>
            </div>
          </>

          <nav>
            <ul className="pagination pagination-lg justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#!" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Jobs;
