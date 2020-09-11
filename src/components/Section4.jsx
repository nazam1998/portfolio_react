import React, { useState, useEffect } from 'react';

const Section4 = () => {

    const [left, setLeft] = useState(-400);

    const moveNext = () => {
        if (left < 0) {

            setLeft(left + 100);

        } else {

            setLeft(-400);

        }
    }

    const movePrev = () => {
        if (left >= -300) {

            setLeft(left - 100);

        } else {

            setLeft(0);

        }
    }

    useEffect(() => {

        const id = setTimeout(() => {
            if (left >= -300) {

                setLeft(left - 100);

            } else {

                setLeft(0);

            }
        }, 5000);
        return () => clearTimeout(id);
    })

    return (

        <div id='section4'>
            <div className="carousel w-50 mx-auto text-center">
                <div className="row flex-nowrap mx-auto" style={{ left: `${left}%` }}>

                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>Septembre 2016</h4>
                        <p>Obtention CESS</p>
                    </div>

                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>2016-2017</h4>
                        <p>Etude Supérieur HE2B ESI</p>
                        <p>En informatique industrielle Bac 1</p>
                        <span>Et création du slogan OVTR</span>
                    </div>
                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>2017-2019</h4>
                        <p>Etude Supérieur EPHEC</p>
                        <p>En informatique de gestion</p>
                    </div>
                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>2019-2020</h4>
                        <p>Formation Molengeek</p>
                        <p>Dans la Coding School X</p>
                        <span>Formation intensive de 6 mois en tant que Full Stack Web developpeur</span>
                    </div>
                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>2018-2019</h4>
                        <p>Formation Molengeek</p>
                        <p>Dans la Coding School X</p>
                        <span>Dans le local avec le mur dégoûtant</span>
                    </div>
                </div>
                {window.screen.width > 800 && <div><i onClick={moveNext} className="fas fa-arrow-left  fa-2x text-white" id='left'></i>
                    <i onClick={movePrev} className="fas fa-arrow-right fa-2x text-white" id='right'></i></div>}
            </div>
        </div>

    )
};

export default Section4;