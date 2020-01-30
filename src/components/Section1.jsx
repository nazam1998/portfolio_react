import React, { useState, useEffect } from 'react';

import Graphic from '../images/graphic.svg'
import Web from '../images/web.svg'
import Mobile from '../images/mobile.svg'

const Section1 = () => {

    return (

        <div id='section1' className='text-center p-5'>
            <div className='mt-5'>
                <hr />
                <p className='mt-4'>Service provided</p>
            </div>
            <div>
                <h2> Build brands campaigns
                    <br /> & digital projects</h2>
            </div>

            <div className="container my-5 mx-auto slide" >
                <div className="row mx-auto">
                    <div className="col-lg col p-4  mx-4 my-3 service">
                        <img className='img-fluid' src={Graphic} alt="" />
                        <h4 className='my-4'>Graphic design</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur itaque nesciunt </p>
                    </div>
                    <div className="col-lg col p-4  mx-4 my-3 service">
                        <img className='img-fluid' src={Web} alt="" />
                        <h4 className='my-4'>Web design</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur itaque nesciunt </p>
                    </div>
                    <div className="col-lg col p-4  mx-4 my-3 service">
                        <img className='img-fluid' src={Mobile} alt="" />
                        <h4 className='my-4'>Mobile app</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur itaque nesciunt </p>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Section1
