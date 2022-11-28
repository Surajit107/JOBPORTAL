import React from 'react'

const Banner = ({ string, page, text }) => {
    return (
        <div>
            <section className="section section-bg" id="call-to-action" style={{ "backgroundImage": "url(assets/images/banner-image-1-1920x500.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cta-content">
                                <br />
                                <br />
                                <h2>{string} <em>{page}</em></h2>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner