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
          <h1 className="text-center text-success">Welcome to Saleforce Technology</h1>
          <h1 className="text-center text-success">we are calling api to perform different task</h1>
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
                <h4 className="fw-title">Filter</h4>
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
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <div className="product-show-option">
                <div className="row">
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
                             
                              <div className="icon">
                                <i className="icon_heart_alt" />
                              </div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shope;
