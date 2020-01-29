import React from 'react';

const Footer = () => {  

    return (

        <footer>
            <div className="container p-5">
                <div className="row text-white justify-content-around text-center">
                    <div className="col-lg-4 row justify-content-around">
                        <span href="#section2" className="col-lg col-12">About</span>
                        <span href="#section1" className="col-lg col-12">Services</span>
                        <span href="#header" className="col-lg col-12">Portfolio</span>
                    </div>
                    <div className="col-lg-4 row justify-content-around align-items-center">
                        <i className="col-lg col-6 fab fa-facebook-f"></i>
                        <i className="col-lg col-6 fab fa-twitter"></i>
                        <i className="col-lg col-6 fab fa-instagram"></i>
                        <i className="col-lg col-6 fab fa-google-plus-g"></i>
                    </div>
                </div>
            </div>
            <hr className='separator' />
            <div className="copyright text-center text-white p-3">
                <span>Copyright ©2020 All rights reserved | This Website is made with <span id='heart'>&hearts;</span> by <a href="#">Nazam</a></span>
            </div>
        </footer>

    )

};

export default Footer
