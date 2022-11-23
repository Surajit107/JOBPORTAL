import React from 'react'

const Pagination = ({ joblist }) => {
    return (
        <div>
            <div className="row pagination-wrap">
                <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                    <span>Showing 1-{joblist} Of {joblist} Jobs</span>
                </div>
                <div className="col-md-6 text-center text-md-right">
                    <div className="custom-pagination ml-auto">
                        <a href="#!" className="prev">Prev</a>
                        <div className="d-inline-block">
                            <a href="#!" className="active">1</a>
                            <a href="#!">2</a>
                            <a href="#!">3</a>
                            <a href="#!">4</a>
                        </div>
                        <a href="#!" className="next">Next</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination