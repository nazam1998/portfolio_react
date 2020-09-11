import React from 'react';
import Bg from '../images/bg.webp';
import Square from '../images/square-dotted.png';
import Skills from './Skills';
const Section3 = () => {

    return (

        <div id='section3' className=''>
            <div className="container mx-auto" id='about-me'>

                <div className="row align-items-center">
                    <div className="offset-lg-2 col-lg-4 my-5">
                        <span>About</span>  
                        <h2>About me</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reiciendis blablablablablabalblalbalblalbalbl</p>
                        {window.screen.width >= 800 && <button className="btn rounded-0 px-4 py-2" onClick={() => { "window.location.href= 'MUHAMMAD_Nazam_CV.docx';" }}><i className="fa fa-download"></i> Download CV</button>}
                    </div>

                    <div className="col-lg-5">
                        {window.screen.width > 1000 && <img src={Square} alt="" id='dotted' />}
                        <img src={Bg} alt="" className='img-fluid w-75' />
                    </div>
                    {window.screen.width < 800 && <button className="btn rounded-0 px-4 py-2 my-5" onClick={() => { "window.location.href= 'MUHAMMAD_Nazam_CV.docx';" }}><i className="fa fa-download"></i> Download CV</button>}
                </div>
            </div>
            <div className="container">

                <div className="row my-5" id='skills'>
                    <Skills nom='Html' points={90} color='orange' />
                    <Skills nom='Css' points={75} color='blue' />
                    <Skills nom='Javascript' points={80} color='yellow' />
                    <Skills nom='React' points={60} color='blue' />
                    <Skills nom='Laravel' points={45} color='yellow' />
                    <Skills nom='Bash' points={25} color='black' />
                </div>
            </div>
        </div>

    )

};

export default Section3
