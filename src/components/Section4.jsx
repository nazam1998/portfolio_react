import React, { useState } from 'react';
const Section4 = () => {

    const [left, setLeft] = useState(0);
    const [bottom, setBottom] = useState(0);

    const move = () => {
        setLeft((left + 100) % 300);
        // setBottom((bottom - 10) % 101);
    }

    return (

        <div id='section4'>
            <div className="carousel w-50 mx-auto text-center">
                <div className="row flex-nowrap mr-5" style={{ left: `${left}px`, bottom: `${bottom}px` }}>
                    <div className="carousel-content col-6">On va tous rater</div>
                    <div className="carousel-content col-6">On va tous réussir</div>
                    <div className="carousel-content col-6">On va tous pas avoir d'idées</div>
                </div>
            </div>
            <button onClick={move}>Move</button>
        </div>

    )
};

export default Section4
