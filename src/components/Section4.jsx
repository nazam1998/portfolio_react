import React, { useState } from 'react';
const Section4 = () => {
    const [carousel, setCarousel] = useState(0);
    const move = () => {
        setCarousel(carousel + 100);
    }
    return (

        <div id='section4'>
            <div className="carousel w-50 mx-auto text-center">
                <div className="row" style={{ left: `${carousel}px` }}>
                    <div className="carousel-content col">On va tous rater</div>
                    <div className="carousel-content col">On va tous réussir</div>
                    <div className="carousel-content col">On va tous pas avoir d'idées</div>
                </div>
            </div>
            <button onClick={move}>Move</button>
        </div>

    )
};

export default Section4
