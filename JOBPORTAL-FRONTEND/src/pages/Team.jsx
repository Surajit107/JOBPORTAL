import React from 'react'
import Banner from '../components/common/banners/Banner'

const Team = () => {
  return (
    <div>
      <Banner string="Meet our" page="Team"/>

      <section className="section" id="trainers">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src="assets/images/team-image-1-646x680.jpg" alt="" />
                </div>
                <div className="down-content">
                  <span>CEO</span>
                  <h4>John Doe</h4>
                  <p>Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur.</p>
                  <ul className="social-icons">
                    <li><a href="!#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="!#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="!#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="!#"><i className="fa fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src="assets/images/team-image-2-646x680.jpg" alt="" />
                </div>
                <div className="down-content">
                  <span>Customer Support</span>
                  <h4>Jane Smith</h4>
                  <p>Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur.</p>
                  <ul className="social-icons">
                    <li><a href="!#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="!#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="!#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="!#"><i className="fa fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src="assets/images/team-image-3-646x680.jpg" alt="" />
                </div>
                <div className="down-content">
                  <span>Customer Support</span>
                  <h4>Kate Johnson</h4>
                  <p>Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur.</p>
                  <ul className="social-icons">
                    <li><a href="!#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="!#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="!#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="!#"><i className="fa fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src="assets/images/team-image-4-646x680.jpg" alt="" />
                </div>
                <div className="down-content">
                  <span>Customer Support</span>
                  <h4>Mark Green</h4>
                  <p>Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur.</p>
                  <ul className="social-icons">
                    <li><a href="!#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="!#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="!#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="!#"><i className="fa fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Team