import React, { Fragment, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../home/slider.css";

import { logout } from "./Action";
import { LayoutContext } from "../index";
import { isAdmin } from "../auth/fetchApi";

function Nabvar2() {
  const history = useHistory();
  const location = useLocation();

  const { data, dispatch } = useContext(LayoutContext);

  const navberToggleOpen = () =>
    data.navberHamburger
      ? dispatch({ type: "hamburgerToggle", payload: false })
      : dispatch({ type: "hamburgerToggle", payload: true });

  const loginModalOpen = () =>
    data.loginSignupModal
      ? dispatch({ type: "loginSignupModalToggle", payload: false })
      : dispatch({ type: "loginSignupModalToggle", payload: true });

  const cartModalOpen = () =>
    data.cartModal
      ? dispatch({ type: "cartModalToggle", payload: false })
      : dispatch({ type: "cartModalToggle", payload: true });
  return (
    <div class="col-3 col-lg-9 col-xl-8 m-auto">
      <div class="main-menu-wrap">
        <nav id="mainmenu">
          <ul>
            <li class="dropdown-show">
              <a onClick={(e) => history.push("/")}>Home</a>
            </li>
            <li class="dropdown-show">
              <a onClick={(e) => history.push("/shop")}>Shop</a>
            </li>
            <li class="dropdown-show">
              <a href="#">Menu</a>
              <ul class="dropdown-nav">
                <li>
                  <a onClick={(e) => cartModalOpen()}>Shopping Cart</a>
                </li>

                <li>
                  <a onClick={(e) => history.push("/wish-list")}>Wishlist</a>
                </li>
                <li>
                  <a onClick={(e) => loginModalOpen()}>Login & Register</a>
                </li>
                <li>
                  <a onClick={(e) => history.push("/user/profile")}>
                    My Account
                  </a>
                </li>
              </ul>
            </li>
            <li class="dropdown-show">
              <a href="#">Men</a>
              <ul class="mega-menu-wrap dropdown-nav">
                <li class="mega-menu-item">
                  <a href="shop-left-full-wide.html" class="mega-item-title">
                    Shirt
                  </a>
                  <ul>
                    <li>
                      <a href="shop.html">Tops & Tees</a>
                    </li>
                    <li>
                      <a href="shop.html">Polo Short Sleeve</a>
                    </li>
                    <li>
                      <a href="shop.html">Graphic T-Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Jackets & Coats</a>
                    </li>
                    <li>
                      <a href="shop.html">Fashion Jackets</a>
                    </li>
                  </ul>
                </li>

                <li class="mega-menu-item">
                  <a href="shop-left-full-wide.html" class="mega-item-title">
                    Jeans
                  </a>
                  <ul>
                    <li>
                      <a href="shop.html">Crochet</a>
                    </li>
                    <li>
                      <a href="shop.html">Sleeveless</a>
                    </li>
                    <li>
                      <a href="shop.html">Stripes</a>
                    </li>
                    <li>
                      <a href="shop.html">Sweaters</a>
                    </li>
                    <li>
                      <a href="shop.html">Hoodies</a>
                    </li>
                  </ul>
                </li>

                <li class="mega-menu-item">
                  <a href="shop-left-full-wide.html" class="mega-item-title">
                    Shoes
                  </a>
                  <ul>
                    <li>
                      <a href="shop.html">Tops & Tees</a>
                    </li>
                    <li>
                      <a href="shop.html">Polo Short Sleeve</a>
                    </li>
                    <li>
                      <a href="shop.html">Graphic T-Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Jackets & Coats</a>
                    </li>
                    <li>
                      <a href="shop.html">Fashion Jackets</a>
                    </li>
                  </ul>
                </li>

                <li class="mega-menu-item">
                  <a href="shop-left-full-wide.html" class="mega-item-title">
                    Watches
                  </a>
                  <ul>
                    <li>
                      <a href="shop.html">Crochet</a>
                    </li>
                    <li>
                      <a href="shop.html">Sleeveless</a>
                    </li>
                    <li>
                      <a href="shop.html">Stripes</a>
                    </li>
                    <li>
                      <a href="shop.html">Sweaters</a>
                    </li>
                    <li>
                      <a href="shop.html">Hoodies</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown-show">
              <a href="shop-left-full-wide.html">Women</a>
              <ul class="mega-menu-wrap dropdown-nav">
                <li class="mega-menu-item">
                  <a href="shop-left-full-wide.html" class="mega-item-title">
                    Kamiz
                  </a>
                  <ul>
                    <li>
                      <a href="shop.html">Tops & Tees</a>
                    </li>
                    <li>
                      <a href="shop.html">Polo Short Sleeve</a>
                    </li>
                    <li>
                      <a href="shop.html">Graphic T-Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Jackets & Coats</a>
                    </li>
                    <li>
                      <a href="shop.html">Fashion Jackets</a>
                    </li>
                  </ul>
                </li>

                <li class="mega-menu-item">
                  <a href="shop-left-full-wide.html" class="mega-item-title">
                    Life Style
                  </a>
                  <ul>
                    <li>
                      <a href="shop.html">Crochet</a>
                    </li>
                    <li>
                      <a href="shop.html">Sleeveless</a>
                    </li>
                    <li>
                      <a href="shop.html">Stripes</a>
                    </li>
                    <li>
                      <a href="shop.html">Sweaters</a>
                    </li>
                    <li>
                      <a href="shop.html">Hoodies</a>
                    </li>
                  </ul>
                </li>

                <li class="mega-menu-item">
                  <a href="shop-left-full-wide.html" class="mega-item-title">
                    Shoes
                  </a>
                  <ul>
                    <li>
                      <a href="shop.html">Tops & Tees</a>
                    </li>
                    <li>
                      <a href="shop.html">Polo Short Sleeve</a>
                    </li>
                    <li>
                      <a href="shop.html">Graphic T-Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Jackets & Coats</a>
                    </li>
                    <li>
                      <a href="shop.html">Fashion Jackets</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown-show">
              <a href="#">Blog</a>
              <ul class="dropdown-nav">
                <li>
                  <a href="blog.html">Blog Right Sidebar</a>
                </li>
                <li>
                  <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                </li>
                <li>
                  <a href="blog-grid.html">Blog Grid Layout</a>
                </li>
                <li>
                  <a href="single-blog.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={(e) => history.push("/contact")}>Contact US</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nabvar2;
