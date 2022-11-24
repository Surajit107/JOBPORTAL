import React from 'react';
import BannerAndCards from '../components/core/home/BannerAndCards'
import ReadAboutUs from '../components/core/home/ReadAboutUs'
import ReadOurBlogs from '../components/core/home/ReadOurBlogs'
import ReadOurTestimonials from '../components/core/home/ReadOurTestimonials'
import SendUsMsg from '../components/core/home/SendUsMsg'

const Home = () => {

  return (
    <div>

      {/* Card section start */}
      <BannerAndCards />
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