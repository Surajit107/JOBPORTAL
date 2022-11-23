import React from 'react'
import { Link } from 'react-router-dom'

const ReadOurTestimonials = () => {
    return (
        <div>
            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <section className="section" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>Read our <em>Testimonials</em></h2>
                                <img src="assets/images/line-dec.png" alt="waves"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem incidunt alias minima
                                        tenetur nemo necessitatibus?</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="features-items">
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="First One"/>
                                    </div>
                                    <div className="right-content">
                                        <h4>John Doe</h4>
                                        <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                            voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                        </p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="second one"/>
                                    </div>
                                    <div className="right-content">
                                        <h4>John Doe</h4>
                                        <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                            voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="features-items">
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="fourth muscle"/>
                                    </div>
                                    <div className="right-content">
                                        <h4>John Doe</h4>
                                        <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                            voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                        </p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="training fifth"/>
                                    </div>
                                    <div className="right-content">
                                        <h4>John Doe</h4>
                                        <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                            voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <br/>

                        <div className="main-button text-center">
                            <Link to="/testimonials">Read More</Link>
                        </div>
                </div>
            </section>
            {/* <!-- ***** Testimonials Item End ***** --> */}
        </div>
    )
}

export default ReadOurTestimonials