import React, { useState, useEffect, useRef } from 'react';
import './services.css';

export default function Services() {
    const [isVisible, setIsVisible] = useState(false);
    const servicesRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (
                servicesRef.current &&
                window.scrollY + window.innerHeight >=
                    servicesRef.current.offsetTop
            ) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="main" ref={servicesRef}>
            <h1>HELP WE PROVIDED</h1>
            <div className={`box-main ${isVisible ? 'animate' : ''}`}>
                <div className="box animate-from-left">
                    <h3 className='headb'>RESCUE</h3>
                    <p>We go and find stray and take them to shelter</p>
                </div>
                <div className="box animate-from-right">
                    <h3 className='headb'>HEAL</h3>
                    <p>We have teamed up with different clinics all around India</p>
                </div>
                <div className="box animate-from-left">
                    <h3 className='headb'>ADOPT</h3>
                    <p>Want a new family member? Consider Adoption</p>
                </div>
            </div>
        </div>
    );
}
