import React from "react";
import Slider from "../components2/HeroBanner";
import Gallary from "../components2/Gallary";
import SlickLeft from "../components2/SlickLeft";
import Container from "../components2/Container";
import Slick from "../components2/Slick";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <Slider />
      <Gallary />
      <SlickLeft />
      <div className="container">
        <Container />
      </div>

      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-9 col-12 m-auto">
              <ul className="sliocklist">
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>bloge</li>
              </ul>
              <Slick />
            </div>
            <div className="col-md-3 col-lg-3 col-12 m-auto">
              <img
                src="./images/l1.jpg"
                alt="images"
                className="img-fluid h-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="middle-section">
          <div className="post-thumb">
            <img src="./images/l1.jpg" alt="" />
            <div className="caption-text">
              <h2>Hover Effects CSS</h2>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
          <div className="post-thumb">
            <img src="./images/l1.jpg" alt="" />
            <div className="caption-text">
              <h2>Hover Effects CSS</h2>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
          <div className="post-thumb">
            <img src="./images/l1.jpg" alt="" />
            <div className="caption-text">
              <h2>Hover Effects CSS</h2>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
          <div className="post-thumb">
            <img src="./images/l1.jpg" alt="" />
            <div className="caption-text">
              <h2>Hover Effects CSS</h2>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
          <div className="post-thumb">
            <img src="./images/l1.jpg" alt="" />
            <div className="caption-text">
              <h2>Hover Effects CSS</h2>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
          <div className="post-thumb">
            <img src="./images/l1.jpg" alt="" />
            <div className="caption-text">
              <h2>Hover Effects CSS</h2>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-3 text-secondry mt-5">Bootstrap 5 Cards</h2>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card my-3">
                <div className="card-thumbnail">
                  <img
                    src="https://www.markuptag.com/images/image-one.jpg"
                    className="img-fluid"
                    alt="thumbnail"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <Link to="/" className="text-secondary">
                      What is Lorem Ipsum?
                    </Link>
                  </h3>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text
                  </p>
                  <Link to="#" className="btn btn-danger">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card my-3">
                <div className="card-thumbnail">
                  <img
                    src="https://www.markuptag.com/images/image-two.jpg"
                    className="img-fluid"
                    alt="thumbnail"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <Link to="/" className="text-secondary">
                      Why do we use it?
                    </Link>
                  </h3>
                  <p className="card-text">
                    It is Link long established fact that Link reader will be
                    distracted by the readable content of Link page when looking at
                    its layout. The point of using Lorem
                  </p>
                  <Link to="#" className="btn btn-danger">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card my-3">
                <div className="card-thumbnail">
                  <img
                    src="https://www.markuptag.com/images/image-three.jpg"
                    className="img-fluid"
                    alt="thumbnail"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <Link to="/" className="text-secondary">
                      Where does it come from?
                    </Link>
                  </h3>
                  <p className="card-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in Link piece of classical Latin literature
                    from 45 BC, making it
                  </p>
                  <Link to="#" className="btn btn-danger">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card my-3">
                <div className="card-thumbnail">
                  <img
                    src="https://www.markuptag.com/images/image-four.jpg"
                    className="img-fluid"
                    alt="thumbnail"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <Link to="#" className="text-secondary">
                      What is Lorem Ipsum?
                    </Link>
                  </h3>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text
                  </p>
                  <Link to="/" className="btn btn-danger">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card my-3">
                <div className="card-thumbnail">
                  <img
                    src="https://www.markuptag.com/images/image-five.jpg"
                    className="img-fluid"
                    alt="thumbnail"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <Link to="/" className="text-secondary">
                      Why do we use it?
                    </Link>
                  </h3>
                  <p className="card-text">
                    It is Link long established fact that Link reader will be
                    distracted by the readable content of Link page when looking at
                    its layout. The point of using Lorem
                  </p>
                  <Link to="/" className="btn btn-danger">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card my-3">
                <div className="card-thumbnail">
                  <img
                    src="https://www.markuptag.com/images/image-six.jpg"
                    className="img-fluid"
                    alt="thumbnail"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <Link to="/" className="text-secondary">
                      Where does it come from?
                    </Link>
                  </h3>
                  <p className="card-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in Link piece of classical Latin literature
                    from 45 BC, making it
                  </p>
                  <Link to="/" className="btn btn-danger">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* oursevises */}

      <div className="our-services">
        <div className="container">
          <h1 className="text-secondary pb-3">OUR Services</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <div className="row">
                  <div className="col-3">
                    <i className="fa fa-pencil-square-o" aria-hidden="true" />
                  </div>
                  <div className="col-9">
                    <h3>
                      <Link to="/">Web Designing</Link>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="row">
                  <div className="col-3">
                    <i className="fa fa-pencil-square-o" aria-hidden="true" />
                  </div>
                  <div className="col-9">
                    <h3>
                      <Link to="#">Web Designing</Link>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="row">
                  <div className="col-3">
                    <i className="fa fa-pencil-square-o" aria-hidden="true" />
                  </div>
                  <div className="col-9">
                    <h3>
                      <Link to="#">Web Designing</Link>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing 
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      {/* logosectyion */}

    
    </div>
  );
};

export default Home;
