import React from "react";

const Gallary = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="./images/banner-1.jpg" className="img-fluid" alt="images" />
          </div>
          <div className="col-md-4">
            <img src="./images/banner-2.jpg" className="img-fluid" alt="images" />
          </div>
          <div className="col-md-4">
            <img src="./images/banner-3.jpg" className="img-fluid" alt="images" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
