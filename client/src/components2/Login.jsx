import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="col-md-6 col-lg-4 offset-lg-4 offset-md-3 mt-5">
        <div className="d-flex pt-5">
        <Link to="/" className="px-3">
          Home
        </Link>
        <Link to="/Contact">Contact</Link>
      </div>
    <div className="bg-light p-5 border shadow">
      {/* Login Form */}
      <form>
        <div className="mb-4">
          <input
            type="email"
            className="form-control"
            placeholder="Username/Email"
          />
          <p className="form-text text-end">Enter Valid Username/Email</p>
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
          <p className="form-text text-end">Enter Valid Password</p>
        </div>
        <div className="mb-4 form-check w-100">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" /> Remember Me
          </label>
          <a href="#" className="float-end">
            Reset Password
          </a>
        </div>
        <button type="submit" className="btn btn-primary w-100 my-3 shadow">
          Login
        </button>
        <p className="text-center m-0">
          Not yet account, <a href="#">Please Signup</a>
        </p>
      </form>
      {/* Login Form */}
    </div>
  </div>
  
  )
}

export default Login