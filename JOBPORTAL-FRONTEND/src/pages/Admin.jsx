import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Banner from '../components/common/banners/Banner'
import { fetchAdmin } from '../redux/slice/AuthSlice'
import { ToastContainer } from 'react-toastify';

const initialState = {
    email: "",
    password: ""
}
const Admin = () => {
    const [formValue, setFormValue] = useState(initialState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onButtonClick = () => {
        dispatch(fetchAdmin(formValue))
        setFormValue(initialState)
    }

    return (
        <div>
            <Banner string="Admin" page="Panel" />

            <section className="section" id="contact-us" style={{ "marginTop": "0" }}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-md-6 col-xs-6">
                            <div className="contact-form">
                                <form onSubmit={handleSubmit}>

                                    {/* *****Admin Email***** */}

                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <fieldset>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    placeholder="Admin Email*"
                                                    value={formValue.email}
                                                    onChange={handleChange} />
                                            </fieldset>
                                        </div>

                                        {/* *****Admin Password***** */}

                                        <div className="col-md-12 col-sm-12">
                                            <fieldset>
                                                <input
                                                    name="password"
                                                    type="password"
                                                    placeholder="Admin Password*"
                                                    value={formValue.password}
                                                    onChange={handleChange} />
                                            </fieldset>
                                        </div>

                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <fieldset className='d-flex justify-content-center flex-column'>
                                                <button
                                                    className="main-button ml-5"
                                                    style={{ "width": "100px" }}
                                                    onClick={onButtonClick}
                                                >Sign In</button>
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

export default Admin