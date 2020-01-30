import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';

const App = () => {
    const [anim, setAnim] = useState(false);
    const [loader, setLoader] = useState(false);
    document.body.className = 'bg-primary';
    useEffect(() => {
        setTimeout(() => setAnim(true), 1000)
        setTimeout(() => { setLoader(true); document.body.className = '' }, 2000);
    });
    if (loader) {

        return (

            <div id='main'>

                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Footer />
            </div>

        )
    } else {
        return (
            <div className={'text-center mt-5 text-white ' + (anim && 'slide')} id='load'>
                <i className="fas fa-circle-notch fa-5x mt-5"></i>
                <p className='mt-5 fa-5x'>Please wait...</p>
            </div>
        )
    }
};
export default App;
