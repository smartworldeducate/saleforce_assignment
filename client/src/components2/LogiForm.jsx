import React from "react";

const LogiForm = () => {
  return (
    <div className="container mt-5">
      <div className="row">
          <div className="col-md-6 p-4">
          <h1>Contacts Us</h1>
          <div className="col-12 py-2 ">
                <textarea
                  className="form-control shadow bg-light"
                  placeholder="Message"
                  defaultValue={""}
                />
            </div>
            <div className="col-12 py-2 ">
                <textarea
                  className="form-control shadow bg-light"
                  placeholder="Message"
                  defaultValue={""}
                />
            </div>
            <div className="col-12 py-2 ">
                <textarea
                  className="form-control shadow bg-light"
                  placeholder="Message"
                  defaultValue={""}
                />
            </div>
              
              
          </div>
        <div className="col-md-6 border p-4 shadow bg-light">
          <div className="col-12">
            <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">
            Leave A Comment
            </h3>
          </div>
          <form action="">
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6 pb-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>

              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12 mt-5">
                <button
                  type="submit"
                  className="btn btn-warning text-white float-end"
                >
                  SEND Message
                </button>
              </div>
            </div>
          </form>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default LogiForm;
