import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'
import ContactInfo from '../components/core/contact/ContactInfo'
import { fetchContact } from '../redux/slice/ContactSlice'

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
}

const Contact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState(initialState)
  const [error, setError] = useState({});



  // Form Validation
  const validation = () => {
    let error = {};
    // for email validate check
    const regex = /^([a-zA-Z0-9-.]+)@([a-z]{2,12}).([a-z]{2,4})(.[a-z]{2,4})?$/;
    if (!formValue.name) {
      error.name = "Name is Required*";
    }

    if (!formValue.subject) {
      error.subject = "Subject is Required*";
    }

    if (!formValue.message) {
      error.message = "Feedback is Required*";
    }

    if (!formValue.email) {
      error.email = "Email is Required";
    } else if (!regex.test(formValue.email)) {
      error.email = "Enter a valid Email";
    }
    return error;
  }



  // onChange =>
  const handleChange = (e) => {
    let name, value;
    name = e.target.name
    value = e.target.value

    // name
    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "Name is Required*" });
        setFormValue({ ...formValue, name: "" })
      } else {
        setError({ ...error, name: "" })
        setFormValue({ ...formValue, name: value })
      }
    }

    // subject
    if (name === "subject") {
      if (value.length === 0) {
        setError({ ...error, subject: "Subject Number is Required*" });
        setFormValue({ ...formValue, subject: "" })
      } else {
        setError({ ...error, subject: "" })
        setFormValue({ ...formValue, subject: value })
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

    // message
    if (name === "message") {
      if (value.length === 0) {
        setError({ ...error, message: "Message is Required*" });
        setFormValue({ ...formValue, message: "" })
      } else {
        setError({ ...error, message: "" })
        setFormValue({ ...formValue, message: value })
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
        name: formValue.name,
        email: formValue.email,
        subject: formValue.subject,
        message: formValue.message
      }
      dispatch(fetchContact(reg))
      navigate('/')
      alert("Thanks For Feedback :)")
    }
  }

  return (
    <div>
      <Banner string="Feel free to" page="Contact Us" />
      <ContactInfo />

      {/* <!-- ***** Contact Us Area Starts ***** --> */}
      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.103998600563!2d88.42524581460412!3d22.575213338564737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1668614059719!5m2!1sen!2sin" width="680" height="600" style={{ "border": "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="contact-form section-bg" style={{ "backgroundImage": "url(assets/images/contact-1-720x480.jpg)" }}>

                <form onSubmit={handleSubmit}>
                  <div className="row">

                    {/* ****Name**** */}
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <span className="text-danger">{error.name}</span>
                        <input
                          name="name"
                          type="text"
                          placeholder="Your Name*"
                          value={formValue.name}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* ****Email**** */}
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <span className="text-danger">{error.email}</span>
                        <input
                          name="email"
                          type="email"
                          placeholder="Your Email*"
                          value={formValue.email}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* ****Subject**** */}
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <span className="text-danger">{error.subject}</span>
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject*"
                          value={formValue.subject}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* ****Message**** */}
                    <div className="col-lg-12">
                      <fieldset>
                        <span className="text-danger">{error.message}</span>
                        <textarea
                          name="message"
                          rows="6"
                          placeholder="Message*"
                          value={formValue.message}
                          onChange={handleChange}></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button className="main-button" onClick={onButtonClick}>Send Message</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Contact Us Area Ends ***** --> */}
    </div>
  )
}

export default Contact