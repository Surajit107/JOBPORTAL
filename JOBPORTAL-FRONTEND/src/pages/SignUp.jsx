import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'
import { fetchSignUp } from '../redux/slice/SignUpSlice'

const initialState = {
  email: "",
  mobile: "",
  username: "",
  password: ""
}

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState(initialState)
  const [error, setError] = useState({});


  // Form Validation
  const validation = () => {
    let error = {};
    // for email validate check
    const regex = /^([a-zA-Z0-9-.]+)@([a-z]{2,12}).([a-z]{2,4})(.[a-z]{2,4})?$/;

    if (!formValue.username) {
      error.username = "Username is Required*";
    }

    if (!formValue.mobile) {
      error.mobile = "Mobile Number is Required*";
    }

    if (!formValue.email) {
      error.email = "Email is Required";
    } else if (!regex.test(formValue.email)) {
      error.email = "Enter a valid Email";
    }

    if (!formValue.password) {
      error.password = "Password is Required";
    } else if (formValue.password.length < 3) {
      error.password = "Password must be more than 3 characters*";
    } else if (formValue.password.length > 8) {
      error.password = "Password must be less than 8 characters*";
    }
    return error;
  };


  // onChange=>
  const handleChange = (e) => {
    let name, value;
    name = e.target.name
    value = e.target.value
    // username
    if (name === "username") {
      if (value.length === 0) {
        setError({ ...error, username: "Username is Required*" });
        setFormValue({ ...formValue, username: "" })
      } else {
        setError({ ...error, username: "" })
        setFormValue({ ...formValue, username: value })
      }
    }

    // mobile
    if (name === "mobile") {
      if (value.length === 0) {
        setError({ ...error, mobile: "Mobile Number is Required*" });
        setFormValue({ ...formValue, mobile: "" })
      } else {
        setError({ ...error, mobile: "" })
        setFormValue({ ...formValue, mobile: value })
      }
    }

    // email
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is Required*" });
        setFormValue({ ...formValue, email: "" })
      } else {
        setError({ ...error, email: "" })
        setFormValue({ ...formValue, email: value })
      }
    }

    // password
    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "Password is Required*" });
        setFormValue({ ...formValue, password: "" })
      } else {
        setError({ ...error, password: "" })
        setFormValue({ ...formValue, password: value })
      }
    }
  }


  // onSubmit=>
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  
  // onClick=>
  const onButtonClick = () => {
    const ErrorList = validation()
    setError(validation())
    if (Object.keys(ErrorList).length === 0) {
      let reg = {
        username: formValue.username,
        email: formValue.email,
        mobile: formValue.mobile,
        password: formValue.password
      }
      dispatch(fetchSignUp(reg))
      navigate('/')
      alert("Successfully SignedUp !!!")
    }
  }

  return (
    <div>
      <Banner string="Create Your Account &" page="Sign Up" />
      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-xs-6">
              <div className="contact-form">

                {/* ******From Start****** */}

                <form onSubmit={handleSubmit}>
                  <div className="row">

                    {/* *****Email***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <span className="text-danger">{error.email}</span>
                        <input
                          name="email"
                          type="email"
                          placeholder="Enter a valid email ID*"
                          value={formValue.email}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Phone***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <span className="text-danger">{error.mobile}</span>
                        <input
                          name="mobile"
                          type="tel"
                          placeholder="Enter a valid mobile number*"
                          maxLength={10}
                          value={formValue.mobile}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****User Name***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <span className="text-danger">{error.username}</span>
                        <input
                          name="username"
                          type="text"
                          placeholder="Enter a username*"
                          value={formValue.username}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Password***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <span className="text-danger">{error.password}</span>
                        <input
                          name="password"
                          type="password"
                          placeholder="Enter a password*"
                          value={formValue.password}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-center">
                      <fieldset>
                        <button onClick={onButtonClick} className="main-button">Sign Up</button>
                      </fieldset>
                    </div>
                  </div>
                </form>

                {/* ******From End****** */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp