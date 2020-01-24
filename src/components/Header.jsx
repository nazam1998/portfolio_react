import React from 'react';
import Nav from './Nav';
import Circle from '../images/circle.png'
const Header = () => {
    return (

        <div id='header'>
            <Nav />
            <img src={Circle} alt="" id='circle'/>
        </div>
    )
};
export default Header
