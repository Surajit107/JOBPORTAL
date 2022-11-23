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
                                <img src="assets/images/line-dec.png" alt="waves"/>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>

                            <h5><a href="!#">+1 333 4040 5566</a></h5>

                            <br/>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>

                            <h5><a href="!#">contact@company.com</a></h5>

                            <br/>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>

                            <h5>212 Barrington Court New York</h5>

                            <br/>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Features Item End ***** --> */}
        </div>
    )
}

export default ContactInfo