import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Circle from '../images/circle.png'
const Header = () => {
    const [count, setCount] = useState(0);
    const [letter, setLetter] = useState([
        { char: "N", className: 'd-none' },
        { char: "a", className: 'd-none' },
        { char: "z", className: 'd-none' },
        { char: "a", className: 'd-none' },
        { char: "m", className: 'd-none' },
    ]);

    useEffect(() => {
        let i = 0;
        setInterval(() => {

            let temp = [...letter];
            temp[i].className = '';
            i++;
            i %= letter.length;
            setLetter(temp);
        }, 300);
    }, [letter]);

    return (

        <div id='header'>
            <Nav />
            <img src={Circle} alt="" id='circle' />
            <h1 className='text-center my-5 text-white'>

                Hello ! This is {letter.map((e, i) => <span className={e.className} key={i}>{e.char}</span>)}
                <span className='blink'>|</span>
            </h1>
            <h3 className='text-center text-white'><span>-</span>Web Developper</h3>

        </div>
    )
};
export default Header
