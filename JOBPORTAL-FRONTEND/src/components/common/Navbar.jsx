import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <Link to="/" className="logo">Surajit's <em>Agency</em></Link>
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
                                    <li><Link to="/postjobs">Post Jobs</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Sign Up</Link></li>
                                </ul>
                                <a className='menu-trigger' href="!#">
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}
        </div>
    )
}

export default Navbar