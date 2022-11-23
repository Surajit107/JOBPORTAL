import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
    return (
        <div>
            {/* <!-- ***** Main Banner Area Start ***** --> */}
            <div className="main-banner" id="top">
                <video autoPlay muted loop id="bg-video">
                    <source src="assets/images/video.mp4" type="video/mp4" />
                </video>

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6>Surajit's Job Portal</h6>
                        <h2>Find the perfect <em>Job</em></h2>
                        <div className="main-button">
                            <form method="post" className="search-jobs-form">
                                <div className="row mb-5">
                                    <div className="col-8 ml-5">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Search Job title..."
                                            style={{ "width": "52vw", "marginLeft" : "80px" }}
                                        />
                                    </div>
                                    <div>
                                        <button type="submit"
                                            className="btn btn-primary btn-lg btn-block text-white btn-search"
                                            style={{ "width": "5vw","marginLeft" : "80px" }}><span
                                                className=" mr-2"><i className="fa fa-search" aria-hidden="true"></i></span></button>
                                    </div>
                                </div>

                            </form>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Main Banner Area End ***** --> */}
        </div>
    )
}

export default HomeBanner