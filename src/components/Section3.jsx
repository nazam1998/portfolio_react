import React from 'react';
import Bg from '../images/bg.webp';
const Section3 = () => {

    return (

        <div id='section3'>
            <div className="container mx-auto">

                <div className="row align-items-center">
                    <div className="offset-lg-2 col-lg-4 my-5">
                        <h2>About me</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reiciendis blablablablablabalblalbalblalbalbl</p>
                        <button className="btn rounded-0 px-4 py-2">Download CV</button>
                    </div>
                    <div className="col-lg-5"><img src={Bg} alt="" className='img-fluid w-75' /></div>
                </div>
            </div>
        </div>

    )

};

export default Section3
