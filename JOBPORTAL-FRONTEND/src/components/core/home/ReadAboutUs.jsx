import React from 'react'

const ReadAboutUs = () => {
    return (
        <div>
            {/* <!-- ***** Start Read About Us ***** --> */}

            <section className="section section-bg" id="schedule"
                style={{"backgroundImage": "url(assets/images/about-fullscreen-1-1920x700.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading dark-bg">
                                <h2>Read <em>About Us</em></h2>
                                <img src="assets/images/line-dec.png" alt=""/>
                                    <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor,
                                        ultricies fermentum massa consequat eu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-content text-center">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore deleniti voluptas enim!
                                    Provident consectetur id earum ducimus facilis, aspernatur hic, alias, harum rerum velit
                                    voluptas, voluptate enim! Eos, sunt, quidem.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nulla quo cum officia
                                    laboriosam. Amet tempore, aliquid quia eius commodi, doloremque omnis delectus laudantium
                                    dolor reiciendis non nulla! Doloremque maxime quo eum in culpa mollitia similique eius
                                    doloribus voluptatem facilis! Voluptatibus, eligendi, illum. Distinctio, non!</p>
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