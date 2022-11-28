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
                                <img src="assets/images/line-dec.png" alt="waves" />
                                <p>With our decade-long experience in software development and digital marketing, wehave garnered an excellent reputation and have covered several milestones inthe market.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="features-items">
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="First One" />
                                    </div>
                                    <div className="right-content">
                                        <h4>Surajit Pal</h4>
                                        <p><em>"It’s really really great information. Keep sharing, Thanks"</em>
                                        </p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="second one" />
                                    </div>
                                    <div className="right-content">
                                        <h4>Chandan Halder</h4>
                                        <p><em>"I read this post your post so nice and very informative post thanks for sharing this post"</em>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="features-items">
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="fourth muscle" />
                                    </div>
                                    <div className="right-content">
                                        <h4>Debarati Das</h4>
                                        <p><em>"Useful post . It’s really really great information. Keep sharing, Thanks"</em>
                                        </p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="training fifth" />
                                    </div>
                                    <div className="right-content">
                                        <h4>Tapas Paral</h4>
                                        <p><em>"Relevance, Quality, Diversity, Volume, Consistency – thank you so much for these guidelines, I’ll always remember these when posting comments on blogs."</em>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <br />

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