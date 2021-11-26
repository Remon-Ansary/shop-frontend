import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer id="footer-area">
        {/* <!-- Footer Call to Action Start --> */}
        <div class="footer-callto-action">
          <div class="ruby-container">
            <div class="callto-action-wrapper">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  {/* <!-- Single Call-to Action Start --> */}
                  <div class="single-callto-action d-flex">
                    <figure class="callto-thumb">
                      <img
                        src="assets/img/air-plane.png"
                        alt="WorldWide Shipping"
                      />
                    </figure>
                    <div class="callto-info">
                      <h2>Free Shipping Worldwide</h2>
                      <p>On order over $150 - 7 days a week</p>
                    </div>
                  </div>
                  {/* <!-- Single Call-to Action End --> */}
                </div>

                <div class="col-lg-3 col-md-6">
                  {/* <!-- Single Call-to Action Start --> */}
                  <div class="single-callto-action d-flex">
                    <figure class="callto-thumb">
                      <img src="assets/img/support.png" alt="Support" />
                    </figure>
                    <div class="callto-info">
                      <h2>24/7 CUSTOMER SERVICE</h2>
                      <p>Call us 24/7 at 000 - 123 - 456k</p>
                    </div>
                  </div>
                  {/* <!-- Single Call-to Action End --> */}
                </div>

                <div class="col-lg-3 col-md-6">
                  {/* <!-- Single Call-to Action Start --> */}
                  <div class="single-callto-action d-flex">
                    <figure class="callto-thumb">
                      <img src="assets/img/money-back.png" alt="Money Back" />
                    </figure>
                    <div class="callto-info">
                      <h2>MONEY BACK Guarantee!</h2>
                      <p>Send within 30 days</p>
                    </div>
                  </div>
                  {/* <!-- Single Call-to Action End --> */}
                </div>

                <div class="col-lg-3 col-md-6">
                  {/* <!-- Single Call-to Action Start --> */}
                  <div class="single-callto-action d-flex">
                    <figure class="callto-thumb">
                      <img src="assets/img/cog.png" alt="Guide" />
                    </figure>
                    <div class="callto-info">
                      <h2>SHOPPING GUIDE</h2>
                      <p></p>
                    </div>
                  </div>
                  {/* <!-- Single Call-to Action End --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Call to Action End -->

    <!-- Footer Follow Up Area Start --> */}
        <div class="footer-followup-area">
          <div class="ruby-container">
            <div class="followup-wrapper">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <div class="follow-content-wrap">
                    <a href="index.html" class="logo">
                      <img
                        src="https://i.ibb.co/5hXkJ7g/logo2.jpg"
                        alt="logo"
                      />
                    </a>
                    <p>
                      Best online shopping store for all your fashion needs.
                    </p>

                    <div class="footer-social-icons">
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-flickr"></i>
                      </a>
                    </div>

                    <a href="#">
                      <img src="assets/img/payment.png" alt="Payment Method" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Follow Up Area End -->

    <!-- Footer Image Gallery Area Start --> */}
        <div class="footer-image-gallery">
          <div class="ruby-container">
            <div class="image-gallery-wrapper">
              <div class="row">
                <div class="col-lg-12">
                  <div class="imgage-gallery-carousel owl-carousel">
                    <div class="gallery-item">
                      <a href="#">
                        <img src="assets/img/gallery-img-1.jpg" alt="Gallery" />
                      </a>
                    </div>
                    <div class="gallery-item">
                      <a href="#">
                        <img src="assets/img/gallery-img-2.jpg" alt="Gallery" />
                      </a>
                    </div>
                    <div class="gallery-item">
                      <a href="#">
                        <img src="assets/img/gallery-img-3.jpg" alt="Gallery" />
                      </a>
                    </div>
                    <div class="gallery-item">
                      <a href="#">
                        <img src="assets/img/gallery-img-4.jpg" alt="Gallery" />
                      </a>
                    </div>
                    <div class="gallery-item">
                      <a href="#">
                        <img src="assets/img/gallery-img-3.jpg" alt="Gallery" />
                      </a>
                    </div>
                    <div class="gallery-item">
                      <a href="#">
                        <img src="assets/img/gallery-img-2.jpg" alt="Gallery" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Image Gallery Area End -->
<!--== Newsletter Area Start ==--> */}
        <section id="newsletter-area" class="p-9">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                {/* <!-- Section Title Start --> */}
                <div class="section-title">
                  <h2>Join The Newsletter</h2>
                  <p>Sign Up for Our Newsletter</p>
                </div>
                {/* <!-- Section Title End --> */}
              </div>
            </div>

            <div class="row">
              <div class="col-lg-8 m-auto">
                <div class="newsletter-form-wrap">
                  <form
                    id="subscribe-form"
                    // action="https://d29u17ylf1ylz9.cloudfront.net/ruby-v2/ruby/assets/php/subscribe.php"
                    method="post"
                  >
                    <input
                      id="subscribe"
                      type="email"
                      name="email"
                      placeholder="Enter your Email  Here"
                      required
                    />
                    <button type="submit" class="btn-long-arrow">
                      Subscribe
                    </button>
                    <div id="result"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== Newsletter Area End ==--> */}
        {/* 

    <!-- Copyright Area Start --> */}
        <div class="copyright-area">
          <div class="ruby-container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="copyright-text">
                  <p>Copyright &copy; 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Copyright Area End --> */}
      </footer>
      {/* <!-- Footer Area End --> */}
    </Fragment>
  );
};

export default Footer;
