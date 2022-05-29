import React from 'react'

const Register = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      {/* Sign Up form */}
      <form action="" className="Signup">
        <h3>Sign Up Now!!!</h3>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="name"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            name="email"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            name="psw"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="psw-repeat">Repeat Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Repeat Password"
            name="psw-repeat"
            required=""
          />
        </div>
        <div className="form-group">
          <label>Profile Photo</label>
          <input
            type="file"
            id="Profile-pic"
            name="channel-img"
            className="form-control"
          />
          <label htmlFor="Profile-pic" className="choose-icon">
            <i className="fa fa-camera" aria-hidden="true" />
          </label>
        </div>
        <div className="form-group">
          <label className="term-policy">
            <input type="checkbox" /> By creating an account you agree to our{" "}
            <a href="#">Terms &amp; Privacy</a>.
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Signup
        </button>
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
          Remember me
        </label>
        <hr />
        <div className="form-group">
          <p className="not-yet">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default Register