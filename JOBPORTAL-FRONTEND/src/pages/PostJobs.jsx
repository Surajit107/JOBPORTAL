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
  const [error, setError] = useState({});

  // Form Validation
  const validation = () => {
    let error = {}
    // for email validate check
    const regex = /^([a-zA-Z0-9-.]+)@([a-z]{2,12}).([a-z]{2,4})(.[a-z]{2,4})?$/;

    if (!formValue.title) {
      error.title = "Title is Required*";
    }
    if (!formValue.category_1) {
      error.category_1 = "Kindly Mention Category One*";
    }
    if (!formValue.category_2) {
      error.category_2 = "Kindly Mention Category Two*";
    }
    if (!formValue.company) {
      error.company = "Company is Required*";
    }
    if (!formValue.city) {
      error.city = "City is Required*";
    }
    if (!formValue.status) {
      error.status = "Status is Required*";
    }

    if (!formValue.name) {
      error.name = "Name is Required*";
    }

    if (!formValue.phone) {
      error.phone = "Phone Number is Required*";
    }

    if (!formValue.email) {
      error.email = "Email is Required";
    } else if (!regex.test(formValue.email)) {
      error.email = "Enter a valid Email";
    }

    if (!formValue.vacancy) {
      error.vacancy = "Vacancy Must be Mentioned*";
    }

    if (!formValue.exp) {
      error.exp = "Experience Must be Mentioned*";
    }

    if (!formValue.salary_min) {
      error.salary_min = "Minimum Salary Must be Mentioned*";
    }

    if (!formValue.salary_max) {
      error.salary_max = "Maximum Salary Must be Mentioned*";
    }

    if (!formValue.gender) {
      error.gender = "Gender Must be Mentioned*";
    }

    if (!formValue.deadline) {
      error.deadline = "Deadline Must be Mentioned*";
    }

    if (!formValue.website) {
      error.website = "Website Must be Mentioned*";
    }

    if (!formValue.about) {
      error.about = "About Must be Mentioned*";
    }

    if (!formValue.desc) {
      error.desc = "Description is Required*";
    }

    if (!formValue.resp) {
      error.resp = "Responsibilities Must be Mentioned*";
    }

    if (!formValue.edu) {
      error.edu = "Education is Required*";
    }

    if (!formValue.others) {
      error.others = "Please Mention Something*";
    }

    return error;

  }

  // onChange=>
  const handleChange = (e) => {
    let name, value;
    name = e.target.name
    value = e.target.value
    // title
    if (name === "title") {
      if (value.length === 0) {
        setError({ ...error, title: "Title is Required*" });
        setFormValue({ ...formValue, title: "" })
      } else {
        setError({ ...error, title: "" })
        setFormValue({ ...formValue, title: value })
      }
    }
    // category_1
    if (name === "category_1") {
      if (value.length === 0) {
        setError({ ...error, category_1: "First category is Required*" });
        setFormValue({ ...formValue, category_1: "" })
      } else {
        setError({ ...error, category_1: "" })
        setFormValue({ ...formValue, category_1: value })
      }
    }
    // category_2
    if (name === "category_2") {
      if (value.length === 0) {
        setError({ ...error, category_2: "Second category is aslo Required*" });
        setFormValue({ ...formValue, category_2: "" })
      } else {
        setError({ ...error, category_2: "" })
        setFormValue({ ...formValue, category_2: value })
      }
    }
    // company
    if (name === "company") {
      if (value.length === 0) {
        setError({ ...error, company: "Company is Required*" });
        setFormValue({ ...formValue, company: "" })
      } else {
        setError({ ...error, company: "" })
        setFormValue({ ...formValue, company: value })
      }
    }
    // city
    if (name === "city") {
      if (value.length === 0) {
        setError({ ...error, city: "City is Required*" });
        setFormValue({ ...formValue, city: "" })
      } else {
        setError({ ...error, city: "" })
        setFormValue({ ...formValue, city: value })
      }
    }
    // status
    if (name === "status") {
      if (value.length === 0) {
        setError({ ...error, status: "status is Required*" });
        setFormValue({ ...formValue, status: "" })
      } else {
        setError({ ...error, status: "" })
        setFormValue({ ...formValue, status: value })
      }
    }
    // name
    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "name is Required*" });
        setFormValue({ ...formValue, name: "" })
      } else {
        setError({ ...error, name: "" })
        setFormValue({ ...formValue, name: value })
      }
    }
    // phone
    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "phone is Required*" });
        setFormValue({ ...formValue, phone: "" })
      } else {
        setError({ ...error, phone: "" })
        setFormValue({ ...formValue, phone: value })
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
    // vacancy
    if (name === "vacancy") {
      if (value.length === 0) {
        setError({ ...error, vacancy: "Vacancy is Required*" });
        setFormValue({ ...formValue, vacancy: "" })
      } else {
        setError({ ...error, vacancy: "" })
        setFormValue({ ...formValue, vacancy: value })
      }
    }
    // exp
    if (name === "exp") {
      if (value.length === 0) {
        setError({ ...error, exp: "Experience is Required*" });
        setFormValue({ ...formValue, exp: "" })
      } else {
        setError({ ...error, exp: "" })
        setFormValue({ ...formValue, exp: value })
      }
    }
    // salary_min
    if (name === "salary_min") {
      if (value.length === 0) {
        setError({ ...error, salary_min: "Min. salary is Required*" });
        setFormValue({ ...formValue, salary_min: "" })
      } else {
        setError({ ...error, salary_min: "" })
        setFormValue({ ...formValue, salary_min: value })
      }
    }
    // salary_max
    if (name === "salary_max") {
      if (value.length === 0) {
        setError({ ...error, salary_max: "Max. salary is Required*" });
        setFormValue({ ...formValue, salary_max: "" })
      } else {
        setError({ ...error, salary_max: "" })
        setFormValue({ ...formValue, salary_max: value })
      }
    }
    // gender
    if (name === "gender") {
      if (value.length === 0) {
        setError({ ...error, gender: "Gender is Required*" });
        setFormValue({ ...formValue, gender: "" })
      } else {
        setError({ ...error, gender: "" })
        setFormValue({ ...formValue, gender: value })
      }
    }
    // deadline
    if (name === "deadline") {
      if (value.length === 0) {
        setError({ ...error, deadline: "Deadline is Required*" });
        setFormValue({ ...formValue, deadline: "" })
      } else {
        setError({ ...error, deadline: "" })
        setFormValue({ ...formValue, deadline: value })
      }
    }
    // website
    if (name === "website") {
      if (value.length === 0) {
        setError({ ...error, website: "Website is Required*" });
        setFormValue({ ...formValue, website: "" })
      } else {
        setError({ ...error, website: "" })
        setFormValue({ ...formValue, website: value })
      }
    }
    // about
    if (name === "about") {
      if (value.length === 0) {
        setError({ ...error, about: "About is Required*" });
        setFormValue({ ...formValue, about: "" })
      } else {
        setError({ ...error, about: "" })
        setFormValue({ ...formValue, about: value })
      }
    }
    // desc
    if (name === "desc") {
      if (value.length === 0) {
        setError({ ...error, desc: "Description is Required*" });
        setFormValue({ ...formValue, desc: "" })
      } else {
        setError({ ...error, desc: "" })
        setFormValue({ ...formValue, desc: value })
      }
    }
    // resp
    if (name === "resp") {
      if (value.length === 0) {
        setError({ ...error, resp: "Responsibility is Required*" });
        setFormValue({ ...formValue, resp: "" })
      } else {
        setError({ ...error, resp: "" })
        setFormValue({ ...formValue, resp: value })
      }
    }
    // edu
    if (name === "edu") {
      if (value.length === 0) {
        setError({ ...error, edu: "Education is Required*" });
        setFormValue({ ...formValue, edu: "" })
      } else {
        setError({ ...error, edu: "" })
        setFormValue({ ...formValue, edu: value })
      }
    }
    // others
    if (name === "others") {
      if (value.length === 0) {
        setError({ ...error, others: "Others is Required*" });
        setFormValue({ ...formValue, others: "" })
      } else {
        setError({ ...error, others: "" })
        setFormValue({ ...formValue, others: value })
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
        title: formValue.title,
        category_1: formValue.category_1,
        category_2: formValue.category_2,
        company: formValue.company,
        password: formValue.password,
        city: formValue.city,
        status: formValue.status,
        name: formValue.name,
        phone: formValue.phone,
        email: formValue.email,
        vacancy: formValue.vacancy,
        exp: formValue.exp,
        salary_min: formValue.salary_min,
        salary_max: formValue.salary_max,
        gender: formValue.gender,
        deadline: formValue.deadline,
        website: formValue.website,
        about: formValue.about,
        desc: formValue.desc,
        resp: formValue.resp,
        edu: formValue.edu,
        others: formValue.others,
      }
      dispatch(fetchPostJobs(reg))
      setFormValue(initialState)
      alert("Data submitted successfully !!!")
      navigate('/')
    }
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
                        <span className="text-danger">{error.title}</span>
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
                        <span className="text-danger">{error.company}</span>
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
                        <span className="text-danger">{error.name}</span>
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
                        <span className="text-danger">{error.email}</span>
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
                        <span className="text-danger">{error.phone}</span>
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
                        <span className="text-danger">{error.status}</span>
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
                        <span className="text-danger">{error.city}</span>
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
                        <span className="text-danger">{error.vacancy}</span>
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
                        <span className="text-danger">{error.exp}</span>
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
                        <span className="text-danger">{error.salary_min}</span>
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
                        <span className="text-danger">{error.salary_max}</span>
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
                        <span className="text-danger">{error.category_1}</span>
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
                        <span className="text-danger">{error.category_2}</span>
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
                        <span className="text-danger">{error.gender}</span>
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
                        <span className="text-danger">{error.website}</span>
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
                        <span className="text-danger">{error.deadline}</span>
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
                        <span className="text-danger">{error.desc}</span>
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
                        <span className="text-danger">{error.about}</span>
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
                        <span className="text-danger">{error.resp}</span>
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
                        <span className="text-danger">{error.edu}</span>
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
                        <span className="text-danger">{error.others}</span>
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