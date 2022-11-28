import React from 'react'
import Banner from '../components/common/banners/Banner'

const Testimonials = () => {
  return (
    <div>
      <Banner string="Read our" page="Testimonials" />

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
        </div>
      </section>
      {/* <!-- ***** Testimonials Item End ***** --></br> */}
    </div>
  )
}

export default Testimonials