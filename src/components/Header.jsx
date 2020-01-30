import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Circle from '../images/circle.png';
import Computer from '../images/computer.jpg';
import Square from '../images/square-dotted.png';

const Header = () => {
    const [i, setI] = useState(0);
    const [letter, setLetter] = useState([
        { char: "N", show: 'none' },
        { char: "a", show: 'none' },
        { char: "z", show: 'none' },
        { char: "a", show: 'none' },
        { char: "m", show: 'none' }
    ]);

    useEffect(() => {
        setTimeout(() => {

            let temp = [...letter];

            temp[i].show = 'show';

            setI((i + 1) % letter.length);

            setLetter(temp);
        }, 300);
    }, [i, letter]);

    return (

        <header id='header'>
            <Nav />
            {window.screen.width>1000&&<img src={Computer} alt="" id='computer' />}
            <img src={Circle} alt="" id='circle' />
            <img src={Square} alt="" id='square' />

            <h1 className='text-center my-5 text-white' id='me'>
        
                Hello ! This is {letter.map((e, i) => (e.show !== 'none' && <span key={i}>{e.char}</span>))}
                <span className='blink'>|</span>
                <p className='text-center text-white' id='trait'>Web Developper</p>
            </h1>
            {window.screen.width > 560 && <div id="social-head" className='text-white'>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
            </div>}


        </header>
    )
};
export default Header
