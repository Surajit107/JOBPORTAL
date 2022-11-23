import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'
import { fetchPostJobs } from '../redux/slice/PostJobSlice'

// Custom Month Format
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const cmpltDate = `${monthNames[new Date().getMonth()]} ${new Date().getDate()} , ${new Date().getFullYear()}`

// Custom Image
const image = "https://img.freepik.com/premium-psd/we-are-hiring-job-vacancy-square-banner-social-media-post-template_177160-560.jpg?w=2000"

// Initialstate
const initialState = {
  title: "",
  category_1: "",
  category_2: "",
  company: "",
  city: "",
  status: "",
  name: "",
  phone: "",
  email: "",
  date: cmpltDate,
  vacancy: "",
  exp: "",
  salary_min: "",
  salary_max: "",
  gender: "",
  deadline: "",
  website: "",
  about: "",
  desc: "",
  resp: "",
  edu: "",
  others: "",
  image: image
}

const PostJobs = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState(initialState)

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const onButtonClick = () => {
    dispatch(fetchPostJobs(formValue))
    navigate('/')
  }

  return (
    <div>
      <Banner string="Post" page="Jobs" />

      <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>Create <em> Job Requirements</em> Here</h2>
                <img src="assets/images/line-dec.png" alt="waves" />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="contact-form">

                {/* *******Form Start******* */}

                <form onSubmit={handleSubmit}>
                  <div className="row">

                    {/* *****Job Title***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="title"
                          type="text"
                          placeholder="Job Title*"
                          value={formValue.title}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Company Name***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="company"
                          type="text"
                          placeholder="Company Name*"
                          value={formValue.company}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Employer Name***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          placeholder="Employer Name*"
                          value={formValue.name}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Employer Email***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          placeholder="Employer Email*"
                          value={formValue.email}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Contact Number***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Contact Number*"
                          value={formValue.phone}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Employment Status***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="status"
                          type="text"
                          placeholder="Employment Status*"
                          value={formValue.status}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Job Location/city***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="city"
                          type="text"
                          placeholder="Job Location*"
                          value={formValue.city}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Job Vacancy***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="vacancy"
                          type="text"
                          placeholder="Vacancy*"
                          value={formValue.vacancy}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Experience***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="exp"
                          type="text"
                          placeholder="Experience*"
                          value={formValue.exp}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Min. Salary***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="salary_min"
                          type="text"
                          placeholder="Minimum Salary*"
                          value={formValue.salary_min}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Max. Salary***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="salary_max"
                          type="text"
                          placeholder="Maximum Salary*"
                          value={formValue.salary_max}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Category One***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="category_1"
                          type="text"
                          placeholder="Post Job Category Here*"
                          value={formValue.category_1}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Category Two***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="category_2"
                          type="text"
                          placeholder="If Any Other Category Present*"
                          value={formValue.category_2}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Gender***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="gender"
                          type="text"
                          placeholder="Gender*"
                          value={formValue.gender}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Company Website***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="website"
                          type="text"
                          placeholder="Company Website*"
                          value={formValue.website}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Application Dedline***** */}

                    <div className="col-md-4 col-sm-12">
                      <fieldset>
                        <input
                          name="deadline"
                          type="text"
                          placeholder="Application Dedline* [dd-Month-yyyy]"
                          value={formValue.deadline}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Job Description***** */}

                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="desc"
                          rows="12"
                          placeholder="Job Description*"
                          value={formValue.desc}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****About Employer***** */}

                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="about"
                          rows="12"
                          placeholder="About Employer*"
                          value={formValue.about}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Responsibilities***** */}

                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="resp"
                          rows="12"
                          placeholder="Responsibilities*"
                          value={formValue.resp}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Education***** */}

                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="edu"
                          rows="12"
                          placeholder="Education*"
                          value={formValue.edu}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    {/* *****Other Benifits***** */}

                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="others"
                          rows="12"
                          placeholder="Other Benifits*"
                          value={formValue.others}
                          onChange={handleChange} />
                      </fieldset>
                    </div>

                    <div className="col-lg-12">
                      <fieldset>
                        <button onClick={onButtonClick} className="main-button">Submit</button>
                      </fieldset>
                    </div>
                  </div>
                </form>

                {/* *******Form End******* */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PostJobs