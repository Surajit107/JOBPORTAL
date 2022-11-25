import React from 'react'
import image from '../../../assets/images/company-name.png'
import { Link } from 'react-router-dom'

const CardList = ({ curElm }) => {
    const { title, company, city, status, id } = curElm
    return (
        <div>
            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" key={id}>
                <Link to={`/jobsingle/${id}`} className='p-2'></Link>
                <div className="job-listing-logo">
                    <script type="text/javascript" async=""
                        src="https://www.google-analytics.com/analytics.js">
                    </script>
                    <img
                        src={image}
                        alt="iamge"
                        className='mx-3' />
                </div>
                <div className="job-listing-about d-sm-flex custom-width w-100">
                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0 ml-5">
                        <h2>{title}</h2>
                        <strong>{company}</strong>
                    </div>
                    <div className="job-listing-location pt-2 mb-3 mb-sm-0 custom-width w-25">
                        <span className="icon-room"></span> {city}
                    </div>
                    <div className="job-listing-meta pt-2">
                        <span className="badge badge-success">{status}</span>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default CardList