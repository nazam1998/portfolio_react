import React from 'react';
import Logo from '../images/logo.png'
const Nav = () => {

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-transparent container mx-auto">
            <img src={Logo} alt="" className='img-fluid w-25 col-1'/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav row offset-3 col-6 text-center">

                    <a class="col nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
                    <a class="col nav-item nav-link" href="#">About</a>
                    <a class="col nav-item nav-link" href="#">Services</a>
                    <a class="col nav-item nav-link" href="#">Blog</a>
                    <a class="col nav-item nav-link" href="#">Pages</a>
                    <a class="col nav-item nav-link" href="#">Contact</a>

                    <button className='btn btn-primary w-25 col-2 offset-2 float-right'>Contact me</button>
                </div>
            </div>
        </nav>
    )

};

export default Nav
