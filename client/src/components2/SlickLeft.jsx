import React from 'react';
import Slick from './Slick';

const SlickLeft = () => {
  return (
    <section className='pt-5'>
        <div className='container'>
            <div className="row">
                <div className='col-md-3 col-lg-3 col-12 m-auto'>
                    <img src="./images/l1.jpg" alt="images" className='img-fluid h-100'/>
                </div>
                <div className='col-md-9 col-lg-9 col-12 m-auto'>
                   
                    <Slick/>
                </div>
            </div>
        </div>
    </section>
    
    
  )
}

export default SlickLeft