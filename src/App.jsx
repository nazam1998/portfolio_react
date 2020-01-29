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
    document.body.className = 'bg-danger';
    useEffect(() => {
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
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin='true' />

                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossOrigin='true'
                />

                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossOrigin='true'
                />
            </div>

        )
    } else {
        return (
            <div className='text-center mt-5 bg-danger' id='load'>
                <i className="fas fa-circle-notch fa-5x mt-5"></i>
            </div>
        )
    }
};
export default App;
