import React, { useState, useEffect } from 'react';
const Skills = (props) => {

    const [point, setPoint] = useState(0);
    const [bar, setBar] = useState(0);
    useEffect(
        window.onscroll = () => {
            setTimeout(() => {
                if (point < props.points) {
                    setPoint(point + 1);
                }
                if (bar < props.points) {
                    setBar(bar + 5);
                }
            }, 50);

        });

    return (
        <div className="col-lg-3 col my-2">
            <div className='container'>
                <div className="carte">
                    <div className="box my-5">
                        <div className="percent">
                            <svg>
                                <circle cx='60' cy='60' r='60' className='circle'></circle>
                                <circle cx='60' cy='60' r='60' className='circle' stroke={props.color} strokeDashoffset={(440 - (440 * bar) / 100 + 40)}></circle>
                            </svg>
                            <div className="number">
                                <h2>{point}<span>%</span></h2>
                            </div>
                        </div>
                        <span className='text'>{props.nom}</span>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Skills
