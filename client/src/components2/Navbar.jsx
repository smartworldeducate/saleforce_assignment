import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector(state => state.cart);
  console.log(cart)
  return (
    <>




      <header className="header-section">
  {/* <div className="header-top">
    <div className="container">
      <div className="ht-left">
        <div className="mail-service">
          <i className=" fa fa-envelope" />
          hello.colorlib@gmail.com
        </div>
        <div className="phone-service">
          <i className=" fa fa-phone" />
          +65 11.188.888
        </div>
      </div>
      <div className="ht-right">
        <Link to="#" className="login-panel">
          <i className="fa fa-user" />
          Login
        </Link>
        <div className="lan-selector">
          <select
            className="language_drop"
            name="countries"
            id="countries"
            style={{ width: 100 }}
          >
            <option
              value="yt"
              data-image="./images/flag-1.jpg"
              data-imagecss="flag yt"
              data-title="English"
            />
            English
            <option
              value="yu"
              data-image="./images/flag-2.jpg"
              data-imagecss="flag yu"
              data-title="Bangladesh"
            >
              German{" "}
            </option>
          </select>
        </div>
        <div className="top-social">
          <Link to="/">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          </Link>
          <Link to="/">
          <i className="fa fa-twitter" aria-hidden="true"></i>
          </Link>
          <Link to="/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          </Link>
          <a href="/">
          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div> */}
  <div className="container">
    <div className="inner-header">
      <div className="row">
        <div className="col-lg-2 col-md-2">
          <div className="logo">
            <Link to="/">
              <img src="./images/logo.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="col-lg-7 col-md-7">
          <div className="advanced-search">
            <button type="button" className="category-btn">
              All Categories
            </button>
            <div className="input-group">
              <input type="text" placeholder="What do you need?" />
              <button type="button">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 text-right col-md-3">
          <ul className="nav-right">
            <li className="heart-icon">
              <Link to="/">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <span>1</span>
              </Link>
            </li>
            <li className="cart-icon">
              <Link to="/cart">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <span>{cart.length}</span>
              </Link>
              <div className="cart-hover">
                <div className="select-items">
                  <table>
                    <tbody>
                      <tr>
                        <td className="si-pic">
                          <img src="./images/select-product-1.jpg" alt="" />
                        </td>
                        <td className="si-text">
                          <div className="product-selected">
                            <p>$60.00 x 1</p>
                            <h6>Kabino Bedside Table</h6>
                          </div>
                        </td>
                        <td className="si-close">
                          <i className="ti-close" />
                        </td>
                      </tr>
                      <tr>
                        <td className="si-pic">
                          <img src="./images/select-product-2.jpg" alt="" />
                        </td>
                        <td className="si-text">
                          <div className="product-selected">
                            <p>$60.00 x 1</p>
                            <h6>Kabino Bedside Table</h6>
                          </div>
                        </td>
                        <td className="si-close">
                          <i className="ti-close" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="select-total">
                  <span>total:</span>
                  <h5>$120.00</h5>
                </div>
                <div className="select-button">
                  <Link to="/" className="primary-btn view-card">
                    VIEW CARD
                  </Link>
                  <Link to="/" className="primary-btn checkout-btn">
                    CHECK OUT
                  </Link>
                </div>
              </div>
            </li>
            <li className="cart-price">$150.00</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="nav-item">
    <div className="container">
      <div className="nav-depart">
        <div className="depart-btn">
          <i className="ti-menu" />
          <span>All departments</span>
          <ul className="depart-hover">
            <li className="active">
              <Link to="/">Women’s Clothing</Link>
            </li>
            <li>
              <Link to="/">Men’s Clothing</Link>
            </li>
            <li>
              <Link to="/">Underwear</Link>
            </li>
            <li>
              <Link to="/">Kid's Clothing</Link>
            </li>
            <li>
              <Link to="/">Brand Fashion</Link>
            </li>
            <li>
              <Link to="/">Accessories/Shoes</Link>
            </li>
            <li>
              <Link to="/">Luxury Brands</Link>
            </li>
            <li>
              <Link to="/">Brand Outdoor Apparel</Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="nav-menu mobile-menu">
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shope">Shop</Link>
          </li>
          <li>
            <Link to="/">Collection</Link>
            <ul className="dropdown">
              <li>
                <Link to="/">Men's</Link>
              </li>
              <li>
                <Link to="/">Women's</Link>
              </li>
              <li>
                <a href="/">Kid's</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Bloge">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Pages</Link>
            <ul className="dropdown">
              <li>
                <Link to="/BlogeDetail">Blog Details</Link>
              </li>
              <li>
                <Link to="/Shoping">Shopping Cart</Link>
              </li>
              <li>
                <Link to="/Shoping">Checkout</Link>
              </li>
              <li>
                <Link to="/">Faq</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="mobile-menu-wrap" />
    </div>
  </div>
</header>

    </>
  );
};

export default Navbar;
