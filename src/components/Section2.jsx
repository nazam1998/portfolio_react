import React from 'react';
import Product from '../images/product.webp';
const Section2 = () => {

    return (
        <div id='section2' className='text-center text-white'>

            <div className='my-5 p-5' id='section-dark-bg'>
                <span>Portfolios</span>
                <h1 className='mt-1 mx-auto'>Some of my awesome<br /> stuffs here</h1>
            </div>
            <div className="container" id='image-area'>

                <div className='row mx-auto text-center justify-content-center'>
                    <div className="image-pro col-lg-4 col-12 my-3"><img src={Product} alt="" className="img-fluid" /><span>Product Design</span></div>
                    <div className="image-pro col-lg-5 col-12 my-3"><img src={Product} alt="" className="img-fluid" /><span>Product Design</span></div>
                    <div className="w-100"></div>
                    <div className="image-pro col-lg-3 col-12 my-3"><img src={Product} alt="" className="img-fluid" /><span>Product Design</span></div>
                    <div className="image-pro col-lg-3 col-12 my-3"><img src={Product} alt="" className="img-fluid" /><span>Product Design</span></div>
                    <div className="image-pro col-lg-3 col-12 my-3"><img src={Product} alt="" className="img-fluid" /><span>Product Design</span></div>
                </div>
                <button className='btn my-5 rounded-0 px-4 py-2'>More Folio</button>
            </div>

        </div>
    )
};
export default Section2
