import React from 'react'

const ContactInfo = () => {
    return (
        <div>
            {/* <!-- ***** Features Item Start ***** --> */}
            <section className="section" id="features">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>contact <em> info</em></h2>
                                <img src="assets/images/line-dec.png" alt="waves" />

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>

                            <h5><a href="!#">+919876543210</a></h5>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>

                            <h5><a href="!#">companya@gmail.com</a></h5>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>

                            <h5><a href="!#">Eco Intelligent Park,7th Floor, EM Block, Sector V, Bidhannagar, Kolkata 700091</a></h5>

                            <br />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Features Item End ***** --> */}
        </div>
    )
}

export default ContactInfo