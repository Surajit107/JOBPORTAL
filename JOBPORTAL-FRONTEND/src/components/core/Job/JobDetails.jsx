import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Banner from '../../common/banners/Banner'
import PreLoader from '../../common/preloader/PreLoader'
import { ToastContainer, toast } from 'react-toastify';
import image from '../../../assets/images/job-image-1-1200x600.jpg'

const JobDetails = () => {

    const { jd_id } = useParams()
    const { loading } = useSelector((state) => state?.jobslice)
    const jobData = JSON.parse(window.localStorage.getItem("data"))
    const singleJob = jobData?.filter((item) => item.id === jd_id)
    const { token } = useSelector((state) => state.authslice)
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
            <Banner string={singleJob[0]?.title} />

            <section className="section" id="trainers">
                <div className="container">
                    <br />
                    <br />

                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>

                        {/* ********* Slider ******* */}

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={image} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={image} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={image} alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>

                    <br />
                    <br />

                    <div className="row" id="tabs">
                        <div className="col-lg-4">
                            <ul>
                                <li><a href='#tabs-1'><i className="fa fa-cog"></i> Job Description</a></li>
                                <li><a href='#tabs-2'><i className="fa fa-info-circle"></i> About Employer</a></li>
                                <li><a href='#tabs-3'><i className="fa fa-phone"></i> Contact Details</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <section className='tabs-content' style={{ "width": "100%" }}>
                                <article id='tabs-1'>
                                    <h4>Job Description</h4>

                                    <p>{singleJob[0]?.desc}</p>
                                </article>

                                <article id='tabs-2'>
                                    <h4>About Employer</h4>

                                    <p className="lead"> <i className="fa fa-map-marker"></i> {singleJob[0]?.city}</p>

                                    <p>{singleJob[0]?.about}</p>
                                </article>

                                <article id='tabs-3'>
                                    <h4>Contact Details</h4>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Name</label>

                                            <p>{singleJob[0]?.name}</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Mobile phone</label>
                                            <p>{singleJob[0]?.phone}</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Email</label>
                                            <p><a href="!#">{singleJob[0]?.email}</a></p>
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Website</label>
                                            <p><a href="#!">{singleJob[0]?.website}</a></p>
                                        </div>
                                    </div>
                                </article>
                            </section>
                            <div className="col-6" style={{ "width": "150px" }}>
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
            </section>
            <ToastContainer />
        </div>
    )
}

export default JobDetails