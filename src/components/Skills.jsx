import React from 'react';
const Skills = (props) => {


    return (
        <div className="col my-2">
            <div className='container'>
                <div className="carte">
                    <div className="box my-5">
                        <div className="percent">
                            <svg>
                                <circle cx='60' cy='60' r='60' className='circle'></circle>
                                <circle cx='60' cy='60' r='60' className='circle'stroke={props.color} strokeDashoffset={(440 - (440 * props.points) / 100 + 80)}></circle>
                            </svg>
                            <div className="number">
                                <h2>{props.points}<span>%</span></h2>
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
