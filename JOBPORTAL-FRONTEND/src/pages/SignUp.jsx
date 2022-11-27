import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Banner from '../components/common/banners/Banner'
import { fetchSignUp } from '../redux/slice/AuthSlice'
import { ToastContainer, toast } from 'react-toastify';

const initialState = {
  user: "",
  email: "",
  password: "",
  type: "U"
}

const SignUp = () => {
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState(initialState)
  const [error, setError] = useState({})


  // Form Validation
  const validation = () => {
    let error = {};
    // for email validate check
    const regex = /^([a-zA-Z0-9-.]+)@([a-z]{2,12}).([a-z]{2,4})(.[a-z]{2,4})?$/;

    if (!formValue.user) {
      error.user = "First Name is Required*";
    }
    if (!formValue.email) {
      error.email = "Email is Required*";
    } else if (!regex.test(formValue.email)) {
      error.email = "Enter a valid Email";
    }

    if (!formValue.password) {
      error.password = "Password is Required*";
    } else if (formValue.password.length < 3) {
      error.password = "Password must be more than 3 characters*";
    } else if (formValue.password.length > 10) {
      error.password = "Password must be less than 10 characters*";
    }
    return error;
  };


  // onChange =>
  const handleChange = (e) => {
    let name, value;
    name = e.target.name
    value = e.target.value

    // user
    if (name === "user") {
      if (value.length === 0) {
        setError({ ...error, user: "Firstname is Required*" });
        setFormValue({ ...formValue, user: "" })
      } else {
        setError({ ...error, user: "" })
        setFormValue({ ...formValue, user: value })
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
        setFormValue({ ...formValue, password: value, type: "U" })
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
        user: formValue.user,
        email: formValue.email,
        password: formValue.password,
        type: formValue.type
      }
      dispatch(fetchSignUp(reg))
      setFormValue(initialState)
      toast.success('Successfully Registered. Please SignIn to Continue 😊', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (
    <div>
      <Banner string="New In Job Agency? " page="Join Now" />

      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-xs-6">
              <div className="contact-form">

                {/* ******From Start****** */}

                <form onSubmit={handleSubmit}>
                  <div className="row">

                    {/* *****First name***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <span className="text-danger">{error.user}</span>
                        <input
                          name="user"
                          type="text"
                          placeholder="Enter your first name*"
                          value={formValue.user}
                          onChange={handleChange}
                        />
                      </fieldset>
                    </div>

                    {/* *****Email***** */}

                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <span className="text-danger">{error.email}</span>
                        <input
                          name="email"
                          type="email"
                          placeholder="Enter a valid email ID*"
                          value={formValue.email}
                          onChange={handleChange}
                        />
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
                          onChange={handleChange}
                        />
                      </fieldset>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-center">
                      <fieldset>
                        <button
                          onClick={onButtonClick}
                          className="main-button">Sign Up</button>
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

      <ToastContainer />
    </div>
  )
}

export default SignUp