import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import { getCategories } from "../redux/actions/categoryActions";
import { getProductsByFilter } from "../redux/actions/filterActions";

const Shope = () => {
  const [text, setText] = useState("");
  const [categoryIds, setCategoryIds] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const handleSearch = (e) => {
    resetState();

    setText(e.target.value);

    dispatch(getProductsByFilter({ type: "text", query: e.target.value }));
  };

  const handleCategory = (e) => {
    resetState();

    const currentCategoryChecked = e.target.value;
    const allCategoriesChecked = [...categoryIds];
    const indexFound = allCategoriesChecked.indexOf(currentCategoryChecked);

    let updatedCategoryIds;
    if (indexFound === -1) {
      // add
      updatedCategoryIds = [...categoryIds, currentCategoryChecked];
      setCategoryIds(updatedCategoryIds);
    } else {
      // remove
      updatedCategoryIds = [...categoryIds];
      updatedCategoryIds.splice(indexFound, 1);
      setCategoryIds(updatedCategoryIds);
    }

    dispatch(
      getProductsByFilter({ type: "category", query: updatedCategoryIds })
    );
  };

  const resetState = () => {
    setText("");
    setCategoryIds([]);
  };
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="/">
                  <i className="fa fa-home" /> Home
                </Link>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="product-shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
              <div className="filter-widget">
                <h4 className="fw-title">Categories</h4>
                <ul className="filter-catagories">
                  {categories &&
                    categories.map((c) => {
                      return (
                        <div key={c._id} className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="category"
                            value={c._id}
                            id="flexCheckChecked"
                            checked={categoryIds.includes(c._id)}
                            onChange={handleCategory}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            {c.category}
                          </label>
                        </div>
                      );
                    })}
                </ul>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Brand</h4>
                <div className="fw-brand-check">
                  <div className="bc-item">
                    <label htmlFor="bc-calvin">
                      Calvin Klein
                      <input type="checkbox" id="bc-calvin" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="bc-item">
                    <label htmlFor="bc-diesel">
                      Diesel
                      <input type="checkbox" id="bc-diesel" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="bc-item">
                    <label htmlFor="bc-polo">
                      Polo
                      <input type="checkbox" id="bc-polo" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="bc-item">
                    <label htmlFor="bc-tommy">
                      Tommy Hilfiger
                      <input type="checkbox" id="bc-tommy" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Price</h4>
                <div className="filter-range-wrap">
                  <div className="range-slider">
                    <div className="price-input">
                      <input type="text" id="minamount" />
                      <input type="text" id="maxamount" />
                    </div>
                  </div>
                  <div
                    className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                    data-min={33}
                    data-max={98}
                  >
                    <div className="ui-slider-range ui-corner-all ui-widget-header" />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default"
                    />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default"
                    />
                  </div>
                </div>
                <Link to="/" className="filter-btn">
                  Filter
                </Link>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Color</h4>
                <div className="fw-color-choose">
                  <div className="cs-item">
                    <input type="radio" id="cs-black" />
                    <label className="cs-black" htmlFor="cs-black">
                      Black
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-violet" />
                    <label className="cs-violet" htmlFor="cs-violet">
                      Violet
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-blue" />
                    <label className="cs-blue" htmlFor="cs-blue">
                      Blue
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-yellow" />
                    <label className="cs-yellow" htmlFor="cs-yellow">
                      Yellow
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-red" />
                    <label className="cs-red" htmlFor="cs-red">
                      Red
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-green" />
                    <label className="cs-green" htmlFor="cs-green">
                      Green
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Size</h4>
                <div className="fw-size-choose">
                  <div className="sc-item">
                    <input type="radio" id="s-size" />
                    <label htmlFor="s-size">s</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="m-size" />
                    <label htmlFor="m-size">m</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="l-size" />
                    <label htmlFor="l-size">l</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="xs-size" />
                    <label htmlFor="xs-size">xs</label>
                  </div>
                </div>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Tags</h4>
                <div className="fw-tags">
                  <a href="/">Towel</a>
                  <a href="/">Shoes</a>
                  <a href="/">Coat</a>
                  <a href="/">Dresses</a>
                  <a href="/">Trousers</a>
                  <a href="/">Men's hats</a>
                  <a href="/">Backpack</a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <div className="product-show-option">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="select-option">
                      <select className="sorting">
                        <option value="">Default Sorting</option>
                      </select>
                      <select className="p-show">
                        <option value="">Show:</option>
                      </select>
                    </div>
                  </div>
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      name="search"
                      value={text}
                      onChange={handleSearch}
                    />
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      disabled={true}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="product-list">
                <div className="row">
                  {products &&
                    products.map((p) => {
                      
                      return (
                        <div className="col-lg-4 col-sm-6" key={p._id}>
                          <div className="product-item">
                            <div className="pi-pic">
                              <img src={`/uploads/${p.fileName}`} alt="" />
                              <div className="sale pp-sale">Sale</div>
                              <div className="icon">
                                <i className="icon_heart_alt" />
                              </div>
                              <ul>
                                <li className="quick-view bg-warning text-white">
                                  <Link to={`/product/${p._id}`}>
                                    + Quick View
                                  </Link>
                                </li>
                                <li className="w-icon">
                                  <a href="/">
                                    <i className="fa fa-random" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="pi-text">
                              <div className="catagory-name">
                                {p.productName}
                              </div>
                              <p>
                                {p.productDesc.length > 60
                                  ? p.productDesc.substring(0, 60) + "..."
                                  : p.productDesc.substring(0, 60)}
                              </p>
                              <div className="product-price">
                                <p className="text-secondary mr-2 text-warning">
                                  {p.productPrice.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="loading-more">
                <i className="icon_loading" />
                <a href="/">Loading More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shope;
