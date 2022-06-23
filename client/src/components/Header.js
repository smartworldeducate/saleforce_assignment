import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "../helpers/auth";

const Header = ({ history }) => {
  const handleLogout = (evt) => {
    logout(() => {
      history.push("/signin");
    });
  };

  // views
  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 bg-white">
          <div className="lan-selector"></div>
          {!isAuthenticated() && (
            <Fragment>
              <Link to="/TransactionList" className="nav-link">
                Todo
              </Link>
              <Link to="/Shope" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>

              <li>
                <Link to="/signup" className="mt-5">
                  <i className="fas fa-edit"></i> Signup
                </Link>
              </li>
              <li>
                <Link to="/signin" className="nav-link">
                  <i className="fas fa-sign-in-alt"></i> Signin
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <Fragment>
              <li className="nav-item">
                <button
                  className="btn btn-sm bg-light text-decoration-none pl-0"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );

  // render
  return <header id="header">{showNavigation()}</header>;
};

export default withRouter(Header);
