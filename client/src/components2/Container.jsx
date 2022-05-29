import React from 'react';
import { Link } from 'react-router-dom';


const Container = () => {
  return (
    <section className="hero-banner bg-light py-5">
    <div className="container">
        <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
                <img src="./images/bag.png" className="img-fluid" alt="Web Development"/>
            </div>
            <div className="col-lg-6">
                <h1 className="mt-3">Web Designing & Development</h1>
                <p className="lead text-secondary my-5">It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout. Point of using Lorem Ipsum is that it has Link more-or-less normal distribution of letters.</p>
                
                <Link to="/" className="btn btn-outline-secondary btn-lg border">Order Now</Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default Container