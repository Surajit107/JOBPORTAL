import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'

const SignIn = () => {
  return (
    <div>
      <Banner string="Please" page="Sign In" />

      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-xs-6">
              <div className="contact-form">
                <form>

                  {/* *****Email***** */}

                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          placeholder="Email*" />
                      </fieldset>
                    </div>

                    {/* *****Password***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="password"
                          type="password"
                          placeholder="Password*" />
                      </fieldset>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-center">
                      <fieldset className='d-flex justify-content-center flex-column'>
                        <button className="main-button ml-5" style={{ "width": "100px" }}>Sign In</button>
                        <Link to="/signup" className='text-center mt-3'><u>New In Job
                          Agency? Join now</u></Link>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignIn