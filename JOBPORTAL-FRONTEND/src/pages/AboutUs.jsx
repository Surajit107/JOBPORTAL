import React from 'react'
import Banner from '../components/common/banners/Banner'
import SendUsMsg from '../components/core/home/SendUsMsg'

const AboutUs = () => {
  return (
    <div>
      <Banner string="Learn more" page="About Us" />

      {/* <!-- ***** Our Classes Start ***** --> */}
      <section className="section" id="our-classes">
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row" id="tabs">
            <div className="col-lg-4">
              <ul>
                <li><a href='#tabs-1'><i className="fa fa-soccer-ball-o"></i> Training and Guidance</a></li>
                <li><a href='#tabs-2'><i className="fa fa-briefcase"></i> Work-Life Balance</a></li>
                <li><a href='#tabs-3'><i className="fa fa-heart"></i> Celebrating Together</a></li>
              </ul>
            </div>
            <div className="col-lg-8">
              <section className='tabs-content'>
                <article id='tabs-1'>
                  <img src="assets/images/about-image-1-940x460.jpg" alt="" />
                  <h4>Training and Guidance</h4>

                  <p>Our team leads ensure to provide proper training and guidance to the new and junior team members. It keeps them abreast with the latest evolvement of the market and also improves their proficiency.</p>
                </article>

                <article id='tabs-2'>
                  <img src="assets/images/about-image-2-940x460.jpg" alt="" />
                  <h4>Work-Life Balance</h4>
                  <p>We ensure to provide our employees with a proper work-life balance. Our management encourages our team to take their time offs and manage a proper balance between their personal and professional life.</p>
                </article>

                <article id='tabs-3'>
                  <img src="assets/images/about-image-3-940x460.jpg" alt="" />
                  <h4>Celebrating Together</h4>
                  <p>Be it an achievement or a celebration, a team that celebrates together stays together. We believe in this culture, and hence, our team celebrates every occasion together. It creates a strong bond between us.</p>
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Our Classes End ***** --> */}

      <SendUsMsg />
    </div>
  )
}

export default AboutUs