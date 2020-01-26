import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Circle from '../images/circle.png';
import Computer from '../images/computer.jpg';
import Square from '../images/square-dotted.png';

const Header = () => {
    const [i, setI] = useState(0);
    const [letter, setLetter] = useState([
        { char: "N", show: 'd-none' },
        { char: "a", show: 'd-none' },
        { char: "z", show: 'd-none' },
        { char: "a", show: 'd-none' },
        { char: "m", show: 'd-none' },
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

        <div id='header'>
            <Nav />
            <img src={Computer} alt="" id='computer' />
            <img src={Circle} alt="" id='circle' />
            <img src={Square} alt="" id='square' />

            <h1 className='text-center my-5 text-white' id='me'>

                Hello ! This is {letter.map((e, i) => (e.show !== 'd-none' && <span key={i}>{e.char}</span>))}
                <span className='blink'>|</span>
                <p className='text-center text-white' id='trait'>Web Developper</p>
            </h1>
            <div id="social-head" className='text-white'>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
            </div>

        </div>
    )
};
export default Header
