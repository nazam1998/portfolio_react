import React from 'react';
import Logo from '../images/logo.png'
const Nav = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-transparent container mx-auto">
            <img src={Logo} alt="" className='img-fluid w-25 col-1'/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav row offset-3 col-6 text-center">

                    <a className="col nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
                    <a className="col nav-item nav-link" href="#">About</a>
                    <a className="col nav-item nav-link" href="#">Services</a>
                    <a className="col nav-item nav-link" href="#">Blog</a>
                    <a className="col nav-item nav-link" href="#">Pages</a>
                    <a className="col nav-item nav-link" href="#">Contact</a>

                    <button className='btn btn-primary w-25 col-2 offset-2 rounded-0'>Contact me</button>
                </div>
            </div>
        </nav>
    )

};

export default Nav