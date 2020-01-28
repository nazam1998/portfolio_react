import React, { useState } from 'react';
import Product from '../images/product.webp';
import Bootstrap from '../images/site_bootstrap.png';
import Emporium from '../images/site-emporium.png';

const Section4 = () => {
    const [left, setLeft] = useState(-200);
    const [bottom, setBottom] = useState(0);
    const move = () => {
        if (left < 0) {

            setLeft(left + 100);

        } else {

            setLeft(-200);

        }
    }

    return (

        <div id='section4'>
            <div className="carousel w-50 mx-auto text-center">
                <div className="row flex-nowrap mx-auto" style={{ left: `${left}%`, bottom: `${bottom}%` }}>
                    <div className="carousel-content col-12"><img src={Product} className='img-fluid' alt="" /></div>
                    <div className="carousel-content col-12"><img src={Product} className='img-fluid' alt="" /></div>
                    <div className="carousel-content col-12"><img src={Product} className='img-fluid' alt="" /></div>
                </div>
            </div>
            <button onClick={move}>Move</button>
        </div>

    )
};

export default Section4
