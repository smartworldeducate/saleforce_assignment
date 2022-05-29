import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { showLoading } from "../helpers/loading";
import { getNewArrivals } from "../redux/actions/filterActions";
import { useDispatch, useSelector } from "react-redux";

const Slick = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewArrivals());
  }, [dispatch]);

  const { newArrivals } = useSelector((state) => state.filters);
  const { loading } = useSelector((state) => state.loading);
  return (
    <section id="blog">
      <div className="container">
        {loading ? (
          <div className="text-center">{showLoading()}</div>
        ) : (
          <div className="row">
            {newArrivals.map((a) => {
              return (
                <div className="col-lg-4 col-sm-6" key={a._id}>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src={`/uploads/${a.fileName}`} alt="" />
                      <div className="sale pp-sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="quick-view bg-warning text-white">
                          <Link to={`/product/${a._id}`}>+ Quick View</Link>
                        </li>
                        <li className="w-icon">
                          <a href="/">
                            <i className="fa fa-random" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">{a.productName}</div>
                      <p>
                        {a.productDesc.length > 60
                          ? a.productDesc.substring(0, 60) + "..."
                          : a.productDesc.substring(0, 60)}
                      </p>
                      <div className="product-price">
                        <p className="text-secondary mr-2 text-warning">
                          {a.productPrice.toLocaleString("en-US", {
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
        )}
      </div>
    </section>
  );
};

export default Slick;
