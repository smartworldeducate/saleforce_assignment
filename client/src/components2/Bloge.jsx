import React from "react";
import { Link } from "react-router-dom";

const Bloge = () => {
  return (
    <>
      <div className="container mt-5">
        <h1>The Personality Trait That Makes People Happier</h1>
        <p>
          <span className="text-warning">TRAVEL</span> - May 19, 2019
        </p>
        <div className="row">
          <div className="col-12">
            <img
              src="./images/blog1.jpeg"
              alt="images"
              className="img-fluid w-100"
            />
            <p className="blogp">
              <b>P</b>sum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate.
            </p>
            <div className="d-flex">
              <div class="vl"></div>
              <div className="w-100">
                <h4>
                  “ Technology is nothing. What's important is that you have a
                  faith in people, that they're basically good and smart, and if
                  you give them tools, they'll do wonderful things with them.”
                  <span>- STEVEN JOBS</span>{" "}
                </h4>
              </div>
            </div>
          </div>
          <section className="bg-light py-4 my-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="mb-3 text-secondary">Bloge section</h2>
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
                  </div>
                </div>
              </div>
              <p className="blogp">
                Sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="socialicon">
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/Bloge">Bloge</Link>
                </li>
                <li>
                  <Link to="/Register">Register</Link>
                </li>
                <li>
                  <Link to="/Shope">Shope</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col-md-3 col-12 d-block m-auto float-right">
              <div className="follow-widget">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest-p" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container shadow mt-5">
        <div className="row">
          
          <div className="col-sm-6 border-end border-bottom p-4">
            <div className="row">
              <div className="col-md-3">
                <img
                  src="./images/hero1.jpeg"
                  className="img-thumbnail rounded-circle"
                  alt="User"
                />
              </div>
              <div className="col-md-9">
                <figure>
                  <blockquote className="blockquote mt-3">
                    <p className="fs-6">
                      Lorem Ipsum is simply dummy text of the printing
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    John Son
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-sm-6 border-bottom p-4">
            <div className="row">
             
              <div className="col-md-9">
                <figure>
                  <blockquote className="blockquote mt-3">
                    <p className="fs-6">
                      Lorem Ipsum is simply dummy text of the printing
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    John Son
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-3">
                <img
                  src="./images/gl1.jpeg"
                  className="img-thumbnail rounded-circle"
                  alt="User"
                />
              </div>
            </div>
          </div>
         
          
        </div>
      </div>
      <div className="container ">
        <div className="row">
          
          <div className="col-sm-12 border-end border-bottom p-4">
            <div className="row">
              <div className="col-md-3">
                <img
                  src="./images/hero1.jpeg"
                  className="img-thumbnail rounded-circle"
                  alt="User"
                />
              </div>
              <div className="col-md-9">
                <figure>
                  <blockquote className="blockquote mt-3">
                    <p className="fs-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum the industry's standard dummy text
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    John Son
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          
         
          
        </div>
      </div>


      <section id="book-a-table" className="book-a-table">
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2 className="">Contact now</h2>
       
      </div>
    </div>
    <form action="" method="post" role="form">
      <div className="form-row">
        <div className="col-lg-4 col-md-6 form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="col-lg-4 col-md-6 form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="col-lg-4 col-md-6 form-group">
          <input
            type="number"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Your Phone"
          />
        </div>
        <div className="col-lg-4 col-md-6 form-group">
          <input
            type="date"
            name="date"
            className="form-control"
            id="date"
            placeholder="Date"
          />
        </div>
        <div className="col-lg-4 col-md-6 form-group">
          <input
            type="time"
            className="form-control"
            name="time"
            id="time"
            placeholder="Time"
          />
        </div>
        <div className="col-lg-4 col-md-6 form-group">
          <input
            type="number"
            className="form-control"
            name="people"
            id="people"
            placeholder="No. of people"
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="message"
          placeholder="Message"
          defaultValue={""}
        />
      </div>
      <button type="submit" className="btn btn-warning float-right mt-3">
        SEND Message
      </button>
    </form>
  </div>
</section>

    </>
  );
};

export default Bloge;
