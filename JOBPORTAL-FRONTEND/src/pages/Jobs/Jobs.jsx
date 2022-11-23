import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Banner from "../../components/common/banners/Banner";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs } from "../../redux/slice/JobSlice";
import ReactPaginate from 'react-paginate';


const Jobs = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const dispatch = useDispatch()
  const { fetch_job_data } = useSelector((state) => state.jobslice)

  useEffect(() => {
    dispatch(fetchAllJobs())
  }, [dispatch])

  const userPerpage = 3
  const pagesVisited = pageNumber * userPerpage
  const jobData = fetch_job_data?.slice(pagesVisited, pagesVisited + userPerpage)
  const pageCount = Math.ceil(fetch_job_data.length / userPerpage)

  const changePage = (data) => {
    // console.log(data);
    setPageNumber(data.selected)
  }

  return (
    <>
      <Banner string="Our" page="Jobs" />
      <section className="section" id="trainers">
        <div className="container">
          <>
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  {jobData.map((jobItem) => {
                    return <JobCard {...jobItem} key={jobItem.id} />
                  })}
                </div>
              </div>
            </div>
          </>

          {/********* Pagination *********/}
          <nav>
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination pagination-lg justify-content-center"}    //<ul> tag className
              pageClassName={"page-item"}     //<li> tag className
              pageLinkClassName={"page-link"}     //<a> tag className
              previousClassName={"page-item"}     //className for previousLabel
              previousLinkClassName={"page-link"}     //Link className for previousLabel
              nextClassName={"page-item"}     //className for nextLabel
              nextLinkClassName={"page-link"}     //Link className for nextLabel
              activeClassName={"active"}
            />
          </nav>

        </div>
      </section>
    </>
  );
};

export default Jobs;
