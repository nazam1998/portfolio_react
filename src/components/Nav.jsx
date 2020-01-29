import React, { useEffect, useState } from 'react';
import Logo from '../images/logo.png'
const Nav = () => {

    const [navEtat, setNavEtat] = useState('bg-transparent ');


    const change = () => {

        if (window.scrollY > 450) {

            setNavEtat('sticky');

        } else if (window.scrollY > 330) {

            setNavEtat('middle')

        }

        else {

            setNavEtat('bg-transparent');

        }
    }

    useEffect(
        window.onscroll = change
    );

    return (

        <nav className={"navbar navbar-expand-lg navbar-light mx-auto " + navEtat}>
            <img src={Logo} alt="" className='img-fluid w-25 col-lg-1 col-md-1' />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav offset-lg-3 col-lg-6 text-center">

                    <a className="col-lg col nav-item nav-link active" href="#header">Home<span className="sr-only">(current)</span></a>
                    <a className="col-lg col nav-item nav-link" href="#section3">About</a>
                    <a className="col-lg col nav-item nav-link" href="#section1">Services</a>
                    <a className="col-lg col nav-item nav-link" href="#section2">Projects</a>
                    <a className="col-lg col nav-item nav-link" href="#section4">Studies</a>
                    <a className="col-lg col nav-item nav-link" href="#section5">Contact</a>
                    <button className='btn text-white w-25 col-lg-2 col-2 offset-lg-2 offset-1 my-2 rounded-0'>Contact me</button>
                </div>
            </div>
        </nav>
    )

};

export default Nav
