import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/images/company-name.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllJobs } from '../../../redux/slice/JobSlice'
import ReactPaginate from 'react-paginate'


const Cards = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const dispatch = useDispatch()
    const { fetch_job_data } = useSelector((state) => state.jobslice)

    useEffect(() => {
        dispatch(fetchAllJobs())
    }, [dispatch])

    const userPerpage = 3
    const pagesVisited = pageNumber * userPerpage
    const jobData = fetch_job_data?.slice(pagesVisited, pagesVisited + userPerpage).reverse()
    const pageCount = Math.ceil(fetch_job_data?.length / userPerpage)

    const changePage = (data) => {
        // console.log(data);
        setPageNumber(data.selected)
    }

    return (
        <div>
            <section className="section" id="trainers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>{fetch_job_data?.length} Jobs Listed</h2>
                            </div>
                        </div>
                    </div>

                    <ul className="job-listings mb-5">

                        {
                            jobData?.map((curElm) => {
                                const { title, company, city, status, id } = curElm
                                return (
                                    <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" key={id}>
                                        <Link to={`/jobsingle/${id}`} className='p-2'></Link>
                                        <div className="job-listing-logo">
                                            <script type="text/javascript" async=""
                                                src="https://www.google-analytics.com/analytics.js">
                                            </script>
                                            <img
                                                src={image}
                                                alt="iamge"
                                                className='mx-3' />
                                        </div>
                                        <div className="job-listing-about d-sm-flex custom-width w-100">
                                            <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0 ml-5">
                                                <h2>{title}</h2>
                                                <strong>{company}</strong>
                                            </div>
                                            <div className="job-listing-location pt-2 mb-3 mb-sm-0 custom-width w-25">
                                                <span className="icon-room"></span> {city}
                                            </div>
                                            <div className="job-listing-meta pt-2">
                                                <span className="badge badge-success">{status}</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <br />
                    <br />

                    {/******* Pagination *******/}

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
                </div>
            </section>
        </div>
    )
}

export default Cards