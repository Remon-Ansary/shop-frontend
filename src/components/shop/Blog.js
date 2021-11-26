import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Navbar2 from "../shop/partials/Navbar2";
import Navber from "../shop/partials/Navber";
import Footer from "./partials/Footer";
const Blog = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div>
      <Navber />
      <br />
      <br />
      <br />

      <div class="body-popup-modal-area">
        <span class="modal-close">
          <img src="assets/img/cancel.png" alt="Close" class="img-fluid" />
        </span>
        <div class="modal-container d-flex">
          <div class="search-box-area">
            <div class="search-box-form">
              <form action="#" method="post">
                <input type="search" placeholder="type keyword and hit enter" />
                <button class="btn" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--== Search Box Area End ==-->

<!--== Page Title Area Start ==--> */}
      <div id="page-title-area">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <div class="page-title-content">
                <h1>Blog Details</h1>
                <ul class="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="#" class="active">
                      Financial Investment: The Right Way
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--== Page Title Area End ==-->

<!--== Page Content Wrapper Start ==--> */}
      <div id="page-content-wrapper" class="p-9">
        <div class="container">
          <div class="row">
            {/* <!-- Single Blog Page Content Start --> */}
            <div class="col-lg-8">
              <article class="single-blog-content-wrap">
                <div class="post-header">
                  <figure class="post-thumbnail">
                    <img
                      src="assets/img/single-blog.jpg"
                      class="img-fluid"
                      alt="Blog"
                    />
                  </figure>

                  <div class="post-meta">
                    <h2>Financial Investment: The Right Way</h2>
                    <div class="post-info">
                      <a href="#">
                        <i class="fa fa-user"></i> Albert Flores
                      </a>
                      <a href="#">
                        <i class="fa fa-calendar"></i> 04/02/2021
                      </a>
                    </div>
                  </div>
                </div>

                <div class="post-content">
                  <p>
                    Shipping has a huge impact on the success of an eCommerce
                    store. A study conducted by Business Insider discovered that
                    higher shipping costs are the #1 cause of all abandoned
                    shopping carts online. Shipping costs more cart abandonment
                    You would obviously want to select products that you can
                    ship at lower costs or for free. If you only plan to sell
                    digital products (music, video, software, ebook, etc), then
                    you don’t have to worry about shipping because the products
                    will be downloaded by customers online.
                  </p>

                  <p>
                    3. Inventory Do you want to manage inventory and keep
                    products stocked? For that, you will need storage space and
                    inventory management through your eCommerce software.
                    Keeping products in stock will increase your cost of
                    business. On the other hand, drop-shipping solves this
                    problem. You can select products that are shipped directly
                    by the manufacturer or supplier.
                  </p>

                  <blockquote class="blockquote">
                    <p>
                      You’ll need to find products where you can offer a
                      competitive price to your customers. If the product you
                      are selling is more expensive than your competitors, then
                      obviously that would discourage many first time buyers.
                    </p>
                  </blockquote>

                  <p>
                    These are products that everyone needs and are sold by many
                    small and large stores without any difference in quality.
                    For example, everyday products like soap, detergent, cereal,
                    and more. These products are made by some of the largest
                    brands in the retail industry and are available widely with
                    little to no difference in price.
                  </p>

                  <img
                    src="assets/img/home_4_slide_2.jpg"
                    class="img-fluid"
                    alt="Blog"
                  />

                  <p>
                    These are products that are unique or hand-made, available
                    in limited stocks, and from specific suppliers. Think of
                    home-made soaps, novelty t-shirts, ceramics, gift items,
                    software, and countless other products.
                  </p>
                </div>

                <div class="post-footer d-block d-sm-flex justify-content-sm-between align-items-center">
                  <ul class="tags">
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Sale</a>
                    </li>
                    <li>
                      <a href="#">Investment</a>
                    </li>
                  </ul>

                  <div class="post-share mt-3 mt-sm-0">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-reddit"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-digg"></i>
                    </a>
                  </div>
                </div>
              </article>

              {/* <!-- Comment Area Start --> */}
              <div class="comment-area-wrapper">
                <div class="comments-preview-area comment-single-item">
                  <h2>Comments (3)</h2>

                  <div class="single-comment d-block d-md-flex">
                    <div class="comment-author">
                      <a href="#">
                        <img
                          src="assets/img/author-1.jpg"
                          class="img-fluid"
                          alt="Comment User"
                        />
                      </a>
                    </div>
                    <div class="comment-info mt-3 mt-md-0">
                      <div class="comment-info-top d-flex justify-content-between">
                        <h3>Houdai Man</h3>
                        <a href="#" class="btn-add-to-cart">
                          <i class="fa fa-reply"></i> Reply
                        </a>
                      </div>
                      <a href="#" class="comment-date">
                        19 JULY 2021, 10:05 PM
                      </a>
                      <p>
                        There are even unique platforms stores where you can
                        find small vendors who make beautiful products and would
                        love to partner up with other store
                      </p>
                    </div>
                  </div>

                  <div class="single-comment reply d-block d-md-flex">
                    <div class="comment-author">
                      <a href="#">
                        <img
                          src="assets/img/author-2.jpg"
                          class="img-fluid"
                          alt="Comment User"
                        />
                      </a>
                    </div>
                    <div class="comment-info mt-3 mt-md-0">
                      <div class="comment-info-top d-flex justify-content-between">
                        <h3>Alex </h3>
                        <a href="#" class="btn-add-to-cart">
                          <i class="fa fa-reply"></i> Reply
                        </a>
                      </div>
                      <a href="#" class="comment-date">
                        19 JULY 2021, 10:05 PM
                      </a>
                      <p>
                        Since these products are not widely available, they give
                        you a competitive advantage.
                      </p>
                    </div>
                  </div>

                  <div class="single-comment d-block d-md-flex">
                    <div class="comment-author">
                      <a href="#">
                        <img
                          src="assets/img/author-3.jpg"
                          class="img-fluid"
                          alt="Comment User"
                        />
                      </a>
                    </div>
                    <div class="comment-info mt-3 mt-md-0">
                      <div class="comment-info-top d-flex justify-content-between">
                        <h3>Maria</h3>
                        <a href="#" class="btn-add-to-cart">
                          <i class="fa fa-reply"></i> Reply
                        </a>
                      </div>
                      <a href="#" class="comment-date">
                        19 JULY 2017, 10:05 PM
                      </a>
                      <p>
                        On the other hand, we with righteous indignation and
                        dislike men ware sobeguil andlo demized by the charms of
                        pleasure of the moment.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="leave-comment-area comment-single-item">
                  <h2>Leave a Comment</h2>
                  <div class="comment-form-wrap">
                    <form action="#" method="get">
                      <div class="single-input-item">
                        <textarea
                          name="comment"
                          id="comment"
                          cols="30"
                          rows="6"
                          placeholder="Write your Comment"
                        ></textarea>
                      </div>

                      <div class="single-input-item">
                        <input type="url" placeholder="Website" required />
                      </div>

                      <div class="row">
                        <div class="col-lg-6">
                          <div class="single-input-item">
                            <input type="text" placeholder="Name" required />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="single-input-item">
                            <input
                              type="email"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div class="single-input-item">
                        <button type="submit" class="btn-add-to-cart">
                          Submit Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Single Blog Page Content End -->

            <!-- Sidebar Area Start --> */}
            <div class="col-lg-4 mt-5 mt-lg-0">
              <div id="sidebar-area-wrap">
                {/* <!-- Single Sidebar Item Start --> */}
                <div class="single-sidebar-wrap">
                  <h2 class="sidebar-title">Search</h2>
                  <div class="sidebar-body">
                    <div class="sidebar-search">
                      <form action="#">
                        <input type="search" placeholder="type keyword" />
                        <button type="submit">
                          <i class="fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Sidebar Item End -->

                    <!-- Single Sidebar Item Start --> */}
                <div class="single-sidebar-wrap">
                  <h2 class="sidebar-title">Recent Posts</h2>
                  <div class="sidebar-body">
                    <div class="small-product-list recent-post">
                      <div class="single-product-item">
                        <figure class="product-thumb">
                          <a href="#">
                            <img
                              class="img-fluid"
                              src="assets/img/product-2.jpg"
                              alt="Products"
                            />
                          </a>
                        </figure>
                        <div class="product-details">
                          <h2>
                            <a href="single-blog.html">
                              Nothing drives more passion when you build
                              something useful and want others to use it.
                            </a>
                          </h2>
                          <span class="price">20, Aug 2019</span>
                          <a href="#" class="btn-add-to-cart">
                            Read More <i class="fa fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>

                      <div class="single-product-item">
                        <figure class="product-thumb">
                          <a href="#">
                            <img
                              class="img-fluid"
                              src="assets/img/product-3.jpg"
                              alt="Products"
                            />
                          </a>
                        </figure>
                        <div class="product-details">
                          <h2>
                            <a href="#">
                              Set of Sprite Yoga Lorem ipsum dolor sit Straps
                            </a>
                          </h2>
                          <span class="price">20, Aug 2018</span>
                          <a href="#" class="btn-add-to-cart">
                            Read More <i class="fa fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>

                      <div class="single-product-item">
                        <figure class="product-thumb">
                          <a href="#">
                            <img
                              class="img-fluid"
                              src="assets/img/product-4.jpg"
                              alt="Products"
                            />
                          </a>
                        </figure>
                        <div class="product-details">
                          <h2>
                            <a href="single-blog.html">
                              Following your passion allows you to look deeply
                              into products and find ideas that offer real value
                            </a>
                          </h2>
                          <span class="price">20, Aug 2019</span>
                          <a href="#" class="btn-add-to-cart">
                            Read More <i class="fa fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Sidebar Item End -->

                    <!-- Single Sidebar Item Start --> */}
                <div class="single-sidebar-wrap">
                  <h2 class="sidebar-title">Categories</h2>
                  <div class="sidebar-body">
                    <ul class="sidebar-list">
                      <li>
                        <a href="#">Tops &amp; Tees</a>
                      </li>
                      <li>
                        <a href="#">Polo Short Sleeve</a>
                      </li>
                      <li>
                        <a href="#">Graphic T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jackets &amp; Coats</a>
                      </li>
                      <li>
                        <a href="#">Fashion Jackets</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Single Sidebar Item End -->

                    <!-- Single Sidebar Item Start --> */}
                <div class="single-sidebar-wrap">
                  <h2 class="sidebar-title">Popular Tags</h2>
                  <div class="sidebar-body">
                    <ul class="tags">
                      <li>
                        <a href="#">Tops</a>
                      </li>
                      <li>
                        <a href="#">Tees</a>
                      </li>
                      <li>
                        <a href="#">Polo</a>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Pants</a>
                      </li>
                      <li>
                        <a href="#">Necessitatibus</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                      <li>
                        <a href="#">Coats</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Single Sidebar Item End --> */}
              </div>
            </div>
            {/* <!-- Sidebar Area End --> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
