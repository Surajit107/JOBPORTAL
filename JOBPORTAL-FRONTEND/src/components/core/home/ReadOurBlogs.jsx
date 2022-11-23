import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllBlogs } from '../../../redux/slice/BlogsSlice'

const ReadOurBlogs = () => {
    const dispatch = useDispatch()
    const { blog_data } = useSelector((state) => state.blogslice)
    useEffect(() => {
        dispatch(fetchAllBlogs())
    }, [dispatch])
    return (
        <div>
            {/* <!-- ***** Blog Start ***** --> */}
            <section className="section" id="our-classes">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>Read our <em>Blog</em></h2>
                                <img src="assets/images/line-dec.png" alt="" />
                                <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor,
                                    ultricies fermentum massa consequat eu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="tabs">
                        <div className="col-lg-4">
                            {
                                blog_data?.map((curElm) => {
                                    return (
                                        <ul key={curElm.id}>
                                            <li className='mb-2'><a href='#tabs-1'>{curElm.title}</a></li>
                                        </ul>
                                    )
                                }).reverse().slice(0, 3)
                            }
                            <div className="main-rounded-button mt-2"><Link to="/blog">Read More</Link></div>
                        </div>
                        <div className="col-lg-8">
                            {
                                blog_data?.map((curElm) => {
                                    return (
                                        <section className='tabs-content' key={curElm.id}>
                                            <article id='tabs-1'>
                                                <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                                                <h4>{curElm.title}</h4>

                                                <p><i className="fa fa-user"></i> {curElm.name} &nbsp;|&nbsp; <i className="fa fa-calendar"></i> {curElm.date} &nbsp;|&nbsp; <i className="fa fa-comments"></i>  {curElm.comments}</p>

                                                <p>{curElm.description}</p>
                                                <div className="main-button">
                                                    <Link to={`/blogdetails/${curElm.id}`}>Continue Reading</Link>
                                                </div>
                                            </article>
                                        </section>
                                    )
                                }).reverse().slice(0,1)
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Blog End ***** --> */}
        </div>
    )
}

export default ReadOurBlogs