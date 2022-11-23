import React from 'react'
import Banner from '../components/common/banners/Banner'

const Login = () => {
  return (
    <div>
      <Banner string="Please" page="Login" />

      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-xs-6">
              <div className="contact-form">
                <form>

                  {/* *****User Name***** */}

                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="username"
                          type="text"
                          placeholder="Username*" />
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
                      <fieldset>
                        <button type="submit" id="form-submit" className="main-button">Login</button>
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

export default Login