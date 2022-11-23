import React from 'react'
import HomeBanner from '../components/common/banners/HomeBanner'
import Cards from '../components/core/home/Cards'
import ReadAboutUs from '../components/core/home/ReadAboutUs'
import ReadOurBlogs from '../components/core/home/ReadOurBlogs'
import ReadOurTestimonials from '../components/core/home/ReadOurTestimonials'
import SendUsMsg from '../components/core/home/SendUsMsg'

const Home = () => {
  return (
    <div>

      {/* Banner section start */}
      <HomeBanner />
      {/* Banner section end */}



      {/* Card section start */}
      <Cards />
      {/* Card section end */}



      {/* Read about us section start */}
      <ReadAboutUs />
      {/* Read about us section end */}



      {/* Read our blogs section start */}
      <ReadOurBlogs />
      {/* Read our blogs section end */}



      {/* Send us msg. section start */}
      <SendUsMsg />
      {/* Read about us section end */}



      {/* Read testiomonials section start */}
      <ReadOurTestimonials />
      {/* Read testiomonials section end */}


    </div>
  )
}

export default Home