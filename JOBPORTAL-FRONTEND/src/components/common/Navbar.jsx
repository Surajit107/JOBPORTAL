import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setLogout } from '../../redux/slice/AuthSlice'

const Navbar = () => {
    const navigate = useNavigate()
    const user = JSON.parse(window.localStorage.getItem("user"))
    const token = JSON.parse(window.localStorage.getItem("token"))
    const userType = JSON.parse(window.localStorage.getItem("userType"))
    const dispatch = useDispatch()

    // Logout Function
    const doLogOut = () => {
        dispatch(setLogout())
        toast.success('🙋🏻‍♂️,Loged Out Successfully')
        navigate('/')
    }

    return (
        <div>
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <Link to="/" className="logo">Job <em>Agency</em>.<em>Com</em></Link>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">

                                    <li><Link to="/">Home</Link></li>

                                    <li><Link to="/jobs">Jobs</Link></li>

                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="!#" role="button"
                                            aria-haspopup="true" aria-expanded="false">About</a>

                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/about">About Us</Link>
                                            <Link className="dropdown-item" to="/team">Team</Link>
                                            <Link className="dropdown-item" to="/blog">Blog</Link>
                                            <Link className="dropdown-item" to="/testimonials">Testimonials</Link>
                                        </div>
                                    </li>
                                    {userType === "A" ?
                                        <li > <Link to="/postjobs">Post Jobs</Link></li>
                                        : null}
                                    <li><Link to="/contact">Contact</Link></li>

                                    {token ?
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" data-toggle="dropdown" href="!#" role="button"
                                                aria-haspopup="true" aria-expanded="false">
                                                {user}
                                                <i className="fa fa-user mx-2"></i>
                                            </a>

                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" onClick={doLogOut} to="/">Log Out</Link>
                                            </div>

                                        </li>
                                        : null}
                                    {!token ?
                                        <li><Link to="/signin">Sign In</Link></li>
                                        : null}
                                    {!token ?
                                        <li><Link to="/signup">Sign Up</Link></li>
                                        : null}
                                </ul>
                                <Link className='menu-trigger' to="/">
                                    <span>Menu</span>
                                </Link>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header >
            {/* <!-- ***** Header Area End ***** --> */}
        </div >
    )
}

export default Navbar