import React from 'react'
import Banner from '../components/common/banners/Banner'
import SendUsMsg from '../components/core/home/SendUsMsg'

const AboutUs = () => {
  return (
    <div>
      <Banner string="Learn more" page="About Us" />

      {/* <!-- ***** Our Classes Start ***** --> */}
      <section className="section" id="our-classes">
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row" id="tabs">
            <div className="col-lg-4">
              <ul>
                <li><a href='#tabs-1'><i className="fa fa-soccer-ball-o"></i> Our Goals</a></li>
                <li><a href='#tabs-2'><i className="fa fa-briefcase"></i> Our Work</a></li>
                <li><a href='#tabs-3'><i className="fa fa-heart"></i> Our Passion</a></li>
              </ul>
            </div>
            <div className="col-lg-8">
              <section className='tabs-content'>
                <article id='tabs-1'>
                  <img src="assets/images/about-image-1-940x460.jpg" alt="" />
                  <h4>Our Goals</h4>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aspernatur natus dignissimos eos quod, odio.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate ullam exercitationem molestiae illum? Nam magni, saepe sint maiores vitae!</p>

                  <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit commodi impedit unde accusantium nam incidunt tenetur, libero maiores enim! Nisi ex odit, totam nihil doloribus. Nemo ut, eos consequatur libero aut quas dolorum ipsa, quidem, totam dicta id possimus dolores distinctio laboriosam doloribus voluptates tenetur consectetur inventore aliquid dolorem?</p>
                </article>
                <article id='tabs-2'>
                  <img src="assets/images/about-image-2-940x460.jpg" alt="" />
                  <h4>Our Work</h4>
                  <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ut accusantium cum! Ad quisquam, aut praesentium magni pariatur ipsa! Soluta deserunt accusantium repellendus ratione quam hic facere, cupiditate iste obcaecati a, officiis ipsum aspernatur in?</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla a necessitatibus eos vitae quibusdam quo sunt officiis rerum voluptatibus non natus eius placeat officia vel quaerat, reprehenderit obcaecati, eaque? Repudiandae ad facere culpa accusamus aliquam ab assumenda reiciendis corrupti cum nemo, cumque molestiae corporis deserunt!</p>
                </article>
                <article id='tabs-3'>
                  <img src="assets/images/about-image-3-940x460.jpg" alt="" />
                  <h4>Our Passion</h4>
                  <p>Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aut beatae commodi repudiandae distinctio, magnam blanditiis reiciendis vitae velit voluptatum natus, fugit quis eos dolores!</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic adipisci reiciendis quaerat qui earum aut, atque esse quisquam quis exercitationem sapiente, dolorum consequatur consequuntur voluptatibus ipsam, fuga magnam beatae optio nam. Recusandae ut aliquid, eligendi.</p>
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Our Classes End ***** --> */}

      <SendUsMsg />
    </div>
  )
}

export default AboutUs