import React from 'react'

const ReadAboutUs = () => {
    return (
        <div>
            {/* <!-- ***** Start Read About Us ***** --> */}

            <section className="section section-bg" id="schedule"
                style={{ "backgroundImage": "url(assets/images/about-fullscreen-1-1920x700.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading dark-bg">
                                <h2>Read <em>About Us</em></h2>
                                <img src="assets/images/line-dec.png" alt="" />
                                <p>Welcome to Job Agency.com, the world's largest professional network with more than
                                    50K+ members in more than 3 countries and territories worldwide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-content text-center">
                                <p>Job Agency.com is an internationally-acclaimed, award-winning web development company. We offer unique and innovative design, development, and marketing solutions at the disposal of our clients. Founded in 2010, we develop scalable, and convenient websites and apps that win over the global market, explicitly. We deliver top-notch, affordable, and unique services with an impressive user experience. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ***** End Read About Us ***** --> */}
        </div>
    )
}

export default ReadAboutUs