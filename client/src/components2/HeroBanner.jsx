import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="heroanimation">
          <Fade bottom>
            <div className="col-lg-5">
              <span className="text-warning">Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <Link to="/Shope" className="primary-btn">
                Shop Now
              </Link>
            </div>
          </Fade>
        </div>
        <img
          className="d-block w-100"
          height="600px"
          src="./images/hero-1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <div className="heroanimation">
          <Fade bottom>
            <div className="col-lg-5">
              <span className="text-warning">Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <Link to="/Shope" className="primary-btn">
                Shop Now
              </Link>
            </div>
          </Fade>
        </div>
        <img
          className="d-block w-100"
          height="600px"
          src="./images/hero-2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <div className="heroanimation">
          <Fade bottom>
            <div className="col-lg-5">
              <span className="text-warning">Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <Link to="/Shope" className="primary-btn">
                Shop Now
              </Link>
            </div>
          </Fade>
        </div>
        <img
          className="d-block w-100"
          height="600px"
          src="./images/hero-1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <div className="heroanimation">
          <Fade bottom>
            <div className="col-lg-5 col-12 d-block">
              <span className="text-warning">Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <Link to="/Shope" className="primary-btn">
                Shop Now
              </Link>
            </div>
          </Fade>
        </div>
        <img
          className="d-block w-100"
          height="600px"
          src="./images/hero-2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <div className="heroanimation">
          <Fade bottom>
            <div className="col-lg-5">
              <span className="text-warning">Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <Link to="/Shope" className="primary-btn">
                Shop Now
              </Link>
            </div>
          </Fade>
        </div>
        <img
          className="d-block w-100"
          height="600px"
          src="./images/hero-1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
