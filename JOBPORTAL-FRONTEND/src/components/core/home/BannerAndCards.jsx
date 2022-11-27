import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllJobs } from '../../../redux/slice/JobSlice'
import ReactPaginate from 'react-paginate'
import CardList from './CardList'


const BannerAndCards = () => {

    const [search, setSearch] = useState("")
    const [pageNumber, setPageNumber] = useState(0)
    const dispatch = useDispatch()
    const { fetch_job_data } = useSelector((state) => state.jobslice)

    useEffect(() => {
        dispatch(fetchAllJobs())
    }, [dispatch])

    const userPerpage = 6
    const pagesVisited = pageNumber * userPerpage
    const jobData = fetch_job_data?.slice(pagesVisited, pagesVisited + userPerpage).reverse()
    const pageCount = Math.ceil(fetch_job_data?.length / userPerpage)

    const changePage = (curPage) => {
        setPageNumber(curPage.selected)
    }


    return (
        <div>

            {/* <!-- ***** Main Banner Area Start ***** --> */}

            <div className="main-banner" id="top">
                <video autoPlay muted loop id="bg-video">
                    <source src="assets/images/video.mp4" type="video/mp4" />
                </video>

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h2>Find the perfect <em>Job</em></h2>
                        <div className="main-button mt-5">
                            <form className="search-jobs-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="row mb-5">
                                    <div className="col-8 ml-5">
                                        <input
                                            type="text"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="form-control form-control-lg"
                                            placeholder="Search Job title..."
                                            style={{ "width": "52vw", "marginLeft": "80px" }}
                                        />
                                    </div>
                                    <div>
                                        <a href='#jobs-container' className="btn btn-primary btn-lg btn-block text-white btn-search"
                                            style={{ "width": "5vw", "marginLeft": "80px" }}><span
                                                className=" mr-2"><i className="fa fa-search" aria-hidden="true"></i></span></a>
                                    </div>
                                </div>

                            </form>
                            <Link to="/jobs">Find Jobs</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ***** Main Banner Area End ***** --> */}


            {/* <!-- ***** Cards Area Start ***** --> */}

            <section className="section" id="trainers">
                <div className="container" id="jobs-container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>{fetch_job_data?.length} Jobs Listed</h2>
                            </div>
                        </div>
                    </div>

                    <ul className="job-listings mb-5">

                        {
                            jobData?.filter((jobs) => {
                                if (search === "") {
                                    return jobs;
                                }
                                return (
                                    jobs.title.toLowerCase().includes(search.toLowerCase())
                                )
                            })
                                .map((curElm) => {
                                    return (
                                        <CardList curElm={curElm} key={curElm.id} />
                                    )
                                })
                        }

                    </ul>
                    <br />
                    <br />

                    {/* <!-- ***** Cards Area Ends ***** --> */}

                    {/******* Pagination Start *******/}

                    <div className="row pagination-wrap">
                        <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                            <span>Showing 1-{fetch_job_data?.length} Of {fetch_job_data?.length} Jobs</span>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <ReactPaginate
                                previousLabel={"Prev"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"row custom-pagination d-flex justify-content-end"}
                                previousLinkClassName={"prev-next"}
                                nextLinkClassName={"prev-next"}
                                activeClassName={"active"}
                                pageClassName={"home-page-item"}
                                pageLinkClassName={"home-page-link"}
                            />
                        </div>
                    </div>

                    {/******* Pagination End *******/}

                </div>
            </section>
        </div>
    )
}

export default BannerAndCards