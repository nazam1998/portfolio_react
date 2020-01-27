import React from 'react';
const Skills = (props) => {
    console.log(props.points);

    return (
        <div className="col my-2">
            <div className='container'>
                <div className="carte">
                    <div className="box my-5">
                        <div className="percent">
                            <svg>
                                <circle cx='60' cy='60' r='60'></circle>
                                <circle cx='60' cy='60' r='60' stroke={props.color} strokeDashoffset={440 - (440 * props.points) / 100}></circle>
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
