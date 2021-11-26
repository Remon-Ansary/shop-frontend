import React, { Fragment, useEffect, useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./index";

import { getAllCategory } from "../../admin/categories/FetchApi";
import { getAllProduct, productByPrice } from "../../admin/products/FetchApi";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar2 from "../partials/Navbar2";
const apiURL = process.env.REACT_APP_API_URL;
const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  const location = useLocation();

  const apiURL = process.env.REACT_APP_API_URL;

  const history = useHistory();

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let responseData = await getAllCategory();
      if (responseData && responseData.Categories) {
        setCategories(responseData.Categories);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br />

      <OrderSuccessMessage />
      <body>
        {/* <!--== Header Area Start ==--> */}
        <header id="header-area">
          <div class="ruby-container">
            <div class="row">
              {/* <!-- Logo Area Start --> */}
              <div class="col-3 col-lg-1 col-xl-2 m-auto">
                <a href="index.html" class="logo-area">
                  <img
                    src="https://i.ibb.co/5hXkJ7g/logo2.jpg"
                    alt="Logo"
                    class="img-fluid"
                  />
                </a>
              </div>
              <Navbar2 />
            </div>
          </div>
        </header>
        {/* <!--== Header Area End ==-->

<!--== Search Box Area Start ==--> */}
        <div class="body-popup-modal-area">
          <span class="modal-close">
            <img src="assets/img/cancel.png" alt="Close" class="img-fluid" />
          </span>
          <div class="modal-container d-flex">
            <div class="search-box-area">
              <div class="search-box-form">
                <form action="#" method="post">
                  <input
                    type="search"
                    placeholder="type keyword and hit enter"
                  />
                  <button class="btn" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!--== Search Box Area End ==-->

<!--== Banner // Slider Area Start ==--> */}
        <section id="banner-area">
          <div class="ruby-container">
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src=" https://i.ibb.co/x3krVgT/home3-banner.jpg "
                  alt="First slide"
                />
                <Carousel.Caption>
                  <div class="banner-caption text-center text-lg-left">
                    <h4>New Collection 2021</h4>
                    <h2>Beautiful Dresses</h2>

                    <a href="#" class="btn-long-arrow">
                      Shop Now
                    </a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/BrW5SrW/home8-jewelry-banner1.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <div class="banner-caption text-center text-lg-left">
                    <h2>New Collection 2021</h2>
                    <h2>Beautiful Earrings</h2>

                    <a href="#" class="btn-long-arrow">
                      Shop Now
                    </a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/P9S4dHW/home8-jewelry-banner2.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <div class="banner-caption text-center text-lg-left">
                    <h4>New Collection 2021</h4>
                    <h2>Beautiful Earrings</h2>

                    <a href="#" class="btn-long-arrow">
                      Shop Now
                    </a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        {/* <!--== Banner Slider End ==-->

<!--== About Us Area Start ==--> */}

        {/* <!--== About Us Area End ==-->

<!--== New Collection Area Start ==--> */}

        <section id="new-collection-area" class="p-9">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                {/* <!-- Section Title Start --> */}
                <div class="section-title">
                  <h2>New Collection Products</h2>
                  <p>Best products on sale.</p>
                </div>
                {/* <!-- Section Title End --> */}
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="new-collection-tabs">
                  {/* <!-- Tab Menu Area Start --> */}
                  <ul class="nav tab-menu-wrap" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="active"
                        id="feature-products-tab"
                        data-toggle="tab"
                        href="#feature-products"
                        role="tab"
                        aria-controls="feature-products-tab"
                        aria-selected="true"
                      >
                        Feature Products Category
                      </a>
                    </li>
                  </ul>
                  {/* <!-- Tab Menu Area End -->

                    <!-- Tab Content Area Start --> */}
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="feature-products"
                      role="tabpanel"
                      aria-labelledby="feature-products-tab"
                    >
                      <div class="products-wrapper">
                        {/* <!-- Single Product Item --> */}

                        {/* <!-- Single Product Item -->

                                    <!-- Single Product Item --> */}

                        {/* <!-- Single Product Item -->

                                    <!-- Single Product Item --> */}

                        {/* <!-- Single Product Item --> */}
                      </div>
                    </div>
                  </div>

                  {/* <!-- Tab Content Area End --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== New Collection Area End ==-->

<!--== Products by Category Area Start ==--> */}

        <div id="product-categories-area">
          <div class="ruby-container">
            <div class="row">
              <div class="col-lg-6">
                <div class="large-size-cate">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="single-cat-item">
                        <figure class="category-thumb">
                          <a href="#">
                            <img
                              src="assets/img/women-cat.jpg"
                              alt="Women Category"
                              class="img-fluid"
                            />
                          </a>
                          <div
                          // className={`${
                          //   data.categoryListDropdown ? "" : "hidden"
                          // } my-4`}
                          >
                            {categories && categories.length > 0 ? (
                              categories.map((item, index) => {
                                return (
                                  <Fragment key={index}>
                                    <div
                                      onClick={(e) =>
                                        history.push(
                                          `/products/category/${item._id}`
                                        )
                                      }
                                      className="col-span-1 m-2 flex flex-col items-center justify-center space-y-2 cursor-pointer"
                                    >
                                      <figcaption class="category-name">
                                        <a
                                          onClick={(e) =>
                                            history.push(
                                              `/products/category/${item._id}`
                                            )
                                          }
                                        >
                                          Shop For Women
                                        </a>
                                      </figcaption>
                                      {/* <img
                                        src={`${apiURL}/uploads/categories/${item.cImage}`}
                                        alt="pic"
                                      /> */}
                                      {/* <div className="font-medium">
                                        {item.cName}
                                      </div> */}
                                    </div>
                                  </Fragment>
                                );
                              })
                            ) : (
                              <div className="text-xl text-center my-4">
                                No Category
                              </div>
                            )}
                          </div>
                        </figure>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="single-cat-item">
                        <figure class="category-thumb">
                          <a href="#">
                            <img
                              src="assets/img/men-cat.jpg"
                              alt="Men Category"
                              class="img-fluid"
                            />
                          </a>

                          <figcaption class="category-name">
                            <a href="#">Shop For Men</a>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="small-size-cate">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="single-cat-item">
                        <figure class="category-thumb">
                          <a href="#">
                            <img
                              src="assets/img/jewellery-cat.jpg"
                              alt="Men Category"
                              class="img-fluid"
                            />
                          </a>

                          <figcaption class="category-name">
                            <a href="#">Jewellery</a>
                          </figcaption>
                        </figure>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="single-cat-item">
                        <figure class="category-thumb">
                          <a href="#">
                            <img
                              src="assets/img/women-cat2.jpg"
                              alt="Men Category"
                              class="img-fluid"
                            />
                          </a>

                          <figcaption class="category-name">
                            <a href="#">Kamiz</a>
                          </figcaption>
                        </figure>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="single-cat-item">
                        <figure class="category-thumb">
                          <a href="#">
                            <img
                              src="assets/img/watch-cat.jpg"
                              alt="Men Category"
                              class="img-fluid"
                            />
                          </a>

                          <figcaption class="category-name">
                            <a href="#">watches</a>
                          </figcaption>
                        </figure>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="single-cat-item">
                        <figure class="category-thumb">
                          <a href="#">
                            <img
                              src="assets/img/suit-cat.jpg"
                              alt="Men Category"
                              class="img-fluid"
                            />
                          </a>

                          <figcaption class="category-name">
                            <a href="#">Men Suit</a>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--== Products by Category Area End ==-->

<!--== New Products Area Start ==--> */}
        <section id="new-products-area" class="p-9">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                {/* <!-- Section Title Start --> */}
                <div class="section-title">
                  <h2>Trending Items</h2>
                  <p>Top Trending </p>
                </div>
                {/* <!-- Section Title End --> */}
              </div>

              <div class="shop-page-products-wrap">
                <div class="products-wrapper">
                  <div class="row">
                    <div class="col-lg-4 col-sm-6">
                      {/* <!-- Single Product Item --> */}
                      <div class="single-product-item text-center">
                        <figure class="product-thumb">
                          <a href="single-product.html">
                            <img
                              src="assets/img/new-product-1.jpg"
                              alt="Products"
                              class="img-fluid"
                            />
                          </a>
                        </figure>

                        <div class="product-details">
                          <h2>
                            <a href="single-product.html">
                              Crown Summit Backpack
                            </a>
                          </h2>
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
                            <i class="fa fa-star-o"></i>
                          </div>
                          <span class="price">$52.00</span>
                          <p class="products-desc">
                            Ideal for cold-weathered training worked lorem
                            outdoors, the Chaz Hoodie promises superior warmth
                            with every wear. Thick material blocks out the wind
                            as ribbed cuffs and bottom band seal in body heat.
                          </p>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart"
                          >
                            + Add to Cart
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-whislist"
                          >
                            + Wishlist
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-compare"
                          >
                            + Compare
                          </a>
                        </div>

                        <div class="product-meta">
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#quickView"
                          >
                            <span
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            >
                              <i class="fa fa-compress"></i>
                            </span>
                          </button>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to Wishlist"
                          >
                            <i class="fa fa-heart-o"></i>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          >
                            <i class="fa fa-tags"></i>
                          </a>
                        </div>
                        <span class="product-bedge">New</span>
                      </div>
                      {/* <!-- Single Product Item --> */}
                    </div>

                    <div class="col-lg-4 col-sm-6">
                      {/* <!-- Single Product Item --> */}
                      <div class="single-product-item text-center">
                        <figure class="product-thumb">
                          <a href="single-product.html">
                            <img
                              src="assets/img/new-product-2.jpg"
                              alt="Products"
                              class="img-fluid"
                            />
                          </a>
                        </figure>

                        <div class="product-details">
                          <h2>
                            <a href="single-product.html">
                              Crown Summit Backpack
                            </a>
                          </h2>
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
                            <i class="fa fa-star-o"></i>
                          </div>
                          <span class="price">$52.00</span>
                          <p class="products-desc">
                            Ideal for cold-weathered training worked lorem
                            outdoors, the Chaz Hoodie promises superior warmth
                            with every wear. Thick material blocks out the wind
                            as ribbed cuffs and bottom band seal in body heat.
                          </p>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart"
                          >
                            + Add to Cart
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-whislist"
                          >
                            + Wishlist
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-compare"
                          >
                            + Compare
                          </a>
                        </div>

                        <div class="product-meta">
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#quickView"
                          >
                            <span
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            >
                              <i class="fa fa-compress"></i>
                            </span>
                          </button>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to Wishlist"
                          >
                            <i class="fa fa-heart-o"></i>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          >
                            <i class="fa fa-tags"></i>
                          </a>
                        </div>
                        <span class="product-bedge sale">Sale</span>
                      </div>
                    </div>

                    {/* single prod */}
                    <div class="col-lg-4 col-sm-6">
                      {/* <!-- Single Product Item --> */}
                      <div class="single-product-item text-center">
                        <figure class="product-thumb">
                          <a href="single-product.html">
                            <img
                              src="assets/img/new-product-2.jpg"
                              alt="Products"
                              class="img-fluid"
                            />
                          </a>
                        </figure>

                        <div class="product-details">
                          <h2>
                            <a href="single-product.html">
                              Crown Summit Backpack
                            </a>
                          </h2>
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
                            <i class="fa fa-star-o"></i>
                          </div>
                          <span class="price">$52.00</span>
                          <p class="products-desc">
                            Ideal for cold-weathered training worked lorem
                            outdoors, the Chaz Hoodie promises superior warmth
                            with every wear. Thick material blocks out the wind
                            as ribbed cuffs and bottom band seal in body heat.
                          </p>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart"
                          >
                            + Add to Cart
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-whislist"
                          >
                            + Wishlist
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-compare"
                          >
                            + Compare
                          </a>
                        </div>

                        <div class="product-meta">
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#quickView"
                          >
                            <span
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            >
                              <i class="fa fa-compress"></i>
                            </span>
                          </button>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to Wishlist"
                          >
                            <i class="fa fa-heart-o"></i>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          >
                            <i class="fa fa-tags"></i>
                          </a>
                        </div>
                        <span class="product-bedge sale">Sale</span>
                      </div>
                    </div>

                    {/* single prod */}
                    <div class="col-lg-4 col-sm-6">
                      {/* <!-- Single Product Item --> */}
                      <div class="single-product-item text-center">
                        <figure class="product-thumb">
                          <a href="single-product.html">
                            <img
                              src="assets/img/new-product-2.jpg"
                              alt="Products"
                              class="img-fluid"
                            />
                          </a>
                        </figure>

                        <div class="product-details">
                          <h2>
                            <a href="single-product.html">
                              Crown Summit Backpack
                            </a>
                          </h2>
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
                            <i class="fa fa-star-o"></i>
                          </div>
                          <span class="price">$52.00</span>
                          <p class="products-desc">
                            Ideal for cold-weathered training worked lorem
                            outdoors, the Chaz Hoodie promises superior warmth
                            with every wear. Thick material blocks out the wind
                            as ribbed cuffs and bottom band seal in body heat.
                          </p>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart"
                          >
                            + Add to Cart
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-whislist"
                          >
                            + Wishlist
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-compare"
                          >
                            + Compare
                          </a>
                        </div>

                        <div class="product-meta">
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#quickView"
                          >
                            <span
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            >
                              <i class="fa fa-compress"></i>
                            </span>
                          </button>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to Wishlist"
                          >
                            <i class="fa fa-heart-o"></i>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          >
                            <i class="fa fa-tags"></i>
                          </a>
                        </div>
                        <span class="product-bedge sale">Sale</span>
                      </div>
                    </div>

                    {/* single prod */}
                    <div class="col-lg-4 col-sm-6">
                      {/* <!-- Single Product Item --> */}
                      <div class="single-product-item text-center">
                        <figure class="product-thumb">
                          <a href="single-product.html">
                            <img
                              src="assets/img/new-product-2.jpg"
                              alt="Products"
                              class="img-fluid"
                            />
                          </a>
                        </figure>

                        <div class="product-details">
                          <h2>
                            <a href="single-product.html">
                              Crown Summit Backpack
                            </a>
                          </h2>
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
                            <i class="fa fa-star-o"></i>
                          </div>
                          <span class="price">$52.00</span>
                          <p class="products-desc">
                            Ideal for cold-weathered training worked lorem
                            outdoors, the Chaz Hoodie promises superior warmth
                            with every wear. Thick material blocks out the wind
                            as ribbed cuffs and bottom band seal in body heat.
                          </p>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart"
                          >
                            + Add to Cart
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-whislist"
                          >
                            + Wishlist
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-compare"
                          >
                            + Compare
                          </a>
                        </div>

                        <div class="product-meta">
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#quickView"
                          >
                            <span
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            >
                              <i class="fa fa-compress"></i>
                            </span>
                          </button>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to Wishlist"
                          >
                            <i class="fa fa-heart-o"></i>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          >
                            <i class="fa fa-tags"></i>
                          </a>
                        </div>
                        <span class="product-bedge sale">Sale</span>
                      </div>
                    </div>
                    {/* single prod */}
                    <div class="col-lg-4 col-sm-6">
                      {/* <!-- Single Product Item --> */}
                      <div class="single-product-item text-center">
                        <figure class="product-thumb">
                          <a href="single-product.html">
                            <img
                              src="assets/img/new-product-2.jpg"
                              alt="Products"
                              class="img-fluid"
                            />
                          </a>
                        </figure>

                        <div class="product-details">
                          <h2>
                            <a href="single-product.html">
                              Crown Summit Backpack
                            </a>
                          </h2>
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
                            <i class="fa fa-star-o"></i>
                          </div>
                          <span class="price">$52.00</span>
                          <p class="products-desc">
                            Ideal for cold-weathered training worked lorem
                            outdoors, the Chaz Hoodie promises superior warmth
                            with every wear. Thick material blocks out the wind
                            as ribbed cuffs and bottom band seal in body heat.
                          </p>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart"
                          >
                            + Add to Cart
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-whislist"
                          >
                            + Wishlist
                          </a>
                          <a
                            href="single-product.html"
                            class="btn btn-add-to-cart btn-compare"
                          >
                            + Compare
                          </a>
                        </div>

                        <div class="product-meta">
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#quickView"
                          >
                            <span
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            >
                              <i class="fa fa-compress"></i>
                            </span>
                          </button>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to Wishlist"
                          >
                            <i class="fa fa-heart-o"></i>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          >
                            <i class="fa fa-tags"></i>
                          </a>
                        </div>
                        <span class="product-bedge sale">Sale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="new-products-area" class="p-9">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                {/* <!-- Section Title Start --> */}
                <div class="section-title">
                  <h2>New Products</h2>
                  <p>Trending stunning Unique</p>
                </div>
                {/* <!-- Section Title End --> */}
              </div>
              <div id="category-feature-product" class="pt-9">
                <div class="ruby-container">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="single-featured-product">
                            <a href="#">
                              <img
                                src="assets/img/home_6_cat_1.jpg"
                                alt="Products"
                                class="img-fluid"
                              />
                            </a>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="single-featured-product">
                            <a href="#">
                              <img
                                src="assets/img/home_6_cat_2.jpg"
                                alt="Products"
                                class="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="single-featured-product">
                            <a href="#">
                              <img
                                src="assets/img/home_6_cat_3.jpg"
                                alt="Products"
                                class="img-fluid"
                              />
                            </a>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="single-featured-product">
                            <a href="#">
                              <img
                                src="assets/img/home_6_cat_4.jpg"
                                alt="Products"
                                class="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== New Products Area End ==-->

<!--== Testimonial Area Start ==--> */}
        <section id="testimonial-area">
          <div class="ruby-container">
            <div class="testimonial-wrapper">
              <div class="row">
                <div class="col-lg-12 text-center">
                  {/* <!-- Section Title Start --> */}
                  <div class="section-title">
                    <h2>What People Say</h2>
                    <p>Testimonials</p>
                  </div>
                  {/* <!-- Section Title End --> */}
                </div>
              </div>

              <div class="row">
                <div class="col-lg-7 m-auto text-center">
                  <div class="testimonial-content-wrap">
                    <div class="single-testimonial-item">
                      <p>
                        These guys have been absolutely outstanding. When I
                        needed them they came through in a big way! I know that
                        if you buy this theme, you'll get the one thing we all
                        look for when we buy on Themeforest, and that's real
                        support for the craziest of requests!
                      </p>

                      <h3 class="client-name">Luis Manrata</h3>
                      <span class="client-email">you@email.here</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== Testimonial Area End ==-->

<!--== Blog Area Start ==--> */}
        <section id="blog-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                {/* <!-- Section Title Start --> */}
                <div class="section-title">
                  <h2>From Our Blog</h2>
                  <p>
                    Share your latest posts or best articles will post here.
                  </p>
                </div>
                {/* <!-- Section Title End --> */}
              </div>
            </div>

            <div class="blog-content-wrap">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  {/* <!-- Single Blog Item Start --> */}
                  <div class="single-blog-wrap">
                    <figure class="blog-thumb">
                      <a href="single-blog.html">
                        <img
                          src="assets/img/blog-thumb.jpg"
                          alt="blog"
                          class="img-fluid"
                        />
                      </a>
                      <figcaption class="blog-icon">
                        <a href="single-blog.html">
                          <i class="fa fa-file-image-o"></i>
                        </a>
                      </figcaption>
                    </figure>

                    <div class="blog-details">
                      <h3>
                        <a href="single-blog.html">Mirum est notare quam</a>
                      </h3>
                      <span class="post-date">20/June/2018</span>
                      <p>
                        Mirum est notare quam littera gothica, quam nunc putamus
                        parum claram, anteposuerit litterarum.
                      </p>
                      <a href="single-blog.html" class="btn-long-arrow">
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- Single Blog Item End --> */}
                </div>

                <div class="col-lg-6 col-md-6">
                  {/* <!-- Single Blog Item Start --> */}
                  <div class="single-blog-wrap">
                    <figure class="blog-thumb">
                      <a href="single-blog.html">
                        <img
                          src="assets/img/blog-thumb-2.jpg"
                          alt="blog"
                          class="img-fluid"
                        />
                      </a>
                      <figcaption class="blog-icon">
                        <a href="single-blog.html">
                          <i class="fa fa-file-image-o"></i>
                        </a>
                      </figcaption>
                    </figure>

                    <div class="blog-details">
                      <h3>
                        <a href="single-blog.html">Mirum est notare quam</a>
                      </h3>
                      <span class="post-date">20/June/2018</span>
                      <p>
                        Mirum est notare quam littera gothica, quam nunc putamus
                        parum claram, anteposuerit litterarum.
                      </p>
                      <a href="single-blog.html" class="btn-long-arrow">
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- Single Blog Item End --> */}
                </div>

                <div class="col-lg-3 col-md-6">
                  {/* <!-- Single Blog Item Start --> */}
                  <div class="single-blog-wrap">
                    <figure class="blog-thumb">
                      <a href="single-blog.html">
                        <img
                          src="assets/img/blog-thumb-3.jpg"
                          alt="blog"
                          class="img-fluid"
                        />
                      </a>
                      <figcaption class="blog-icon">
                        <a href="single-blog.html">
                          <i class="fa fa-file-image-o"></i>
                        </a>
                      </figcaption>
                    </figure>

                    <div class="blog-details">
                      <h3>
                        <a href="single-blog.html">Mirum est notare quam</a>
                      </h3>
                      <span class="post-date">20/June/2018</span>
                      <p>
                        Mirum est notare quam littera gothica, quam nunc putamus
                        parum claram, anteposuerit litterarum.
                      </p>
                      <a href="single-blog.html" class="btn-long-arrow">
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- Single Blog Item End --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </Fragment>
  );
};

export default Slider;
