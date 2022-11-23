import React from 'react'
import Banner from '../components/common/banners/Banner'

const Testimonials = () => {
  return (
    <div>
      <Banner string="Read our" page="Testimonials"/>

      {/* <!-- ***** Testimonials Item Start ***** --> */}
      <section className="section" id="features">
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6">
              <ul className="features-items">
                <li className="feature-item">
                  <div className="left-icon">
                    <img src="assets/images/features-first-icon.png" alt="First One" />
                  </div>
                  <div className="right-content">
                    <h4>John Doe</h4>
                    <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="left-icon">
                    <img src="assets/images/features-first-icon.png" alt="second one" />
                  </div>
                  <div className="right-content">
                    <h4>John Doe</h4>
                    <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
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
                    <h4>John Doe</h4>
                    <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="left-icon">
                    <img src="assets/images/features-first-icon.png" alt="training fifth" />
                  </div>
                  <div className="right-content">
                    <h4>John Doe</h4>
                    <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Testimonials Item End ***** --></br> */}
    </div>
  )
}

export default Testimonials