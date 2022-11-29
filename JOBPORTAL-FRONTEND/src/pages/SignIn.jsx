import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'
import { fetchSignIn } from '../redux/slice/AuthSlice'
import { ToastContainer } from 'react-toastify';

const initialState = {
  email: "",
  password: ""
}
const SignIn = () => {
  const [formValue, setFormValue] = useState(initialState)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onButtonClick = () => {
    dispatch(fetchSignIn(formValue))
    setFormValue(initialState)
  }

  return (
    <div>
      <Banner string="Please" page="Sign In" />

      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-xs-6">
              <div className="contact-form">
                <form className='shadow p-3 mb-5 bg-body rounded' onSubmit={handleSubmit}>

                  {/* *****Email***** */}

                  <div className="row my-3">
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          placeholder="Email*"
                          value={formValue.email}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Password***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="password"
                          type="password"
                          placeholder="Password*"
                          value={formValue.password}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-center">
                      <fieldset className='d-flex justify-content-center flex-column'>
                        <button
                          className="main-button"
                          style={{ width: "100px" , marginLeft : "50px" }}
                          onClick={onButtonClick}
                        >Sign In</button>

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
      
      <ToastContainer />
    </div>
  )
}

export default SignIn