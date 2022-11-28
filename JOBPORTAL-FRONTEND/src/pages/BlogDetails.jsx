import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'
import PreLoader from '../components/common/preloader/PreLoader'
import { fetchSingleBlog } from '../redux/slice/SingleBlogSlice'
import image from '../assets/images/features-first-icon.png'

const BlogDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { blog_data } = useSelector((state) => state.blogslice)
    const { single_blog_data, loading } = useSelector((state) => state.singleblogslice)
    const { title, description, name, date, cmnt_count } = single_blog_data;

    useEffect(() => {
        dispatch(fetchSingleBlog(id))
    }, [dispatch, id])

    return (
        <div>
            {loading && <PreLoader />}
            <Banner string="Single" page="blog post" />

            {/* <!-- ***** Blog Start ***** --> */}
            <section className="section" id="our-classes">
                <div className="container">
                    <br />
                    <br />
                    <section className='tabs-content'>
                        <article>
                            <h4>{title}</h4>

                            <p><i className="fa fa-user"></i> {name} &nbsp;|&nbsp; <i className="fa fa-calendar"></i> {date} &nbsp;|&nbsp; <i className="fa fa-comments"></i>  {cmnt_count} comments</p>

                            <div><img src="assets/images/blog-image-fullscren-1-1920x700.jpg" alt="" /></div>

                            <br />

                            <p>{description}</p>

                            <ul className="social-icons">
                                <li>Share this:</li>
                                <li><a href="#!"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#!"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#!"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#!"><i className="fa fa-behance"></i></a></li>
                            </ul>
                        </article>
                    </section>
                    <br />
                    <br />
                    <br />
                    <section className='tabs-content'>
                        <div className="row">
                            <div className="col-md-8">
                                <h4>Comments</h4>
                                <ul className="features-items">
                                    {
                                        blog_data?.map((curElm) => {
                                            return (
                                                <li key={curElm.id}>
                                                    <div className="feature-item" style={{ "marginBottom": "15px" }}>
                                                        <div className="left-icon">
                                                            <img src={image} alt="First One" />
                                                        </div>
                                                        <div className="right-content">
                                                            <h4>{curElm.username} </h4>
                                                            <p><em>"{curElm.comments}"</em></p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }).slice(0,3).reverse()
                                    }
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            {/* <!-- ***** Blog End ***** --> */}
            <br />
        </div>
    )
}

export default BlogDetails
