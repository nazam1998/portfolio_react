import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';

const App = () => {

    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setTimeout(() => setLoader(true), 2000);
    });
    if (loader) {

        return (

            <div>

                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />

            </div>

        )
    } else {
        return (
            <div className='text-center mt-5' id='load'>
                <i className="fas fa-circle-notch fa-5x mt-5"></i>
            </div>
        )
    }
};
export default App;
