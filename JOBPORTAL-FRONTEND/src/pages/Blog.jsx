import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Banner from '../components/common/banners/Banner'
import PreLoader from '../components/common/preloader/PreLoader'
import { fetchAllBlogs } from '../redux/slice/BlogsSlice'

const Blog = () => {
  const dispatch = useDispatch()
  const { blog_data, loading } = useSelector((state) => state.blogslice)

  useEffect(() => {
    dispatch(fetchAllBlogs())
  }, [dispatch])

  return (
    <div>
      {loading && <PreLoader />}
      <Banner string="Read our" page="Blog" />

      {/* <!-- ***** Blog Start ***** --> */}
      <section className="section" id="our-classes">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-10">
              {
                blog_data?.map((curElm) => {
                  const { id, title, name, date, comments, description } = curElm
                  return (
                    <section className='tabs-content' key={id}>
                      <article>
                        <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                        <h4>{title}</h4>

                        <p><i className="fa fa-user"></i> {name} &nbsp;|&nbsp; <i className="fa fa-calendar"></i> {date} &nbsp;|&nbsp; <i className="fa fa-comments"></i>  {comments}</p>

                        <p>{description}</p>
                        <div className="main-button">
                          <Link to={`/blogdetails/${id}`}>Continue Reading</Link>
                        </div>
                      </article>
                      <br />
                      <br />

                    </section>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Blog End ***** --> */}
    </div>
  )
}

export default Blog