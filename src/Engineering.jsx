import React, { useRef, useState, useEffect } from 'react';
import aboutImage from './assets/about.jpg';
import './Engineering.css';

const Engineering = () => {
    const engineeringSectionRef = useRef(null);
    const [isEngineeringVisible, setIsEngineeringVisible] = useState(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };
        const engineeringObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsEngineeringVisible(true);
        }, observerOptions);

        if (engineeringSectionRef.current) engineeringObserver.observe(engineeringSectionRef.current);
        
        return () => {
            if (engineeringSectionRef.current) engineeringObserver.unobserve(engineeringSectionRef.current);
        };
    }, []);

    return (
        <section
            id="engineering-excellence"
            ref={engineeringSectionRef}
            className={`engineering-section ${isEngineeringVisible ? 'visible' : 'hidden'}`}
        >
            <div className="engineering-content">
                <div className="engineering-image">
                    <img src={aboutImage} alt="Engineering Excellence" />
                </div>
                <div className="engineering-text">
                    <h3>Engineering Excellence in Electrical & Instrumentation</h3>
                    <p>At SolidWedge, we drive innovation in electrical engineering, power systems, and automation to deliver cutting-edge solutions that optimize efficiency and performance.</p>
                    <ul>
                        <li>Specialized in power systems, automation, and field instrumentation.</li>
                        <li>Experts in control panel manufacturing and plant automation.</li>
                        <li>Strong industry partnerships with Schneider Electric, WEG, and Yokogawa.</li>
                    </ul>
                    <p>Our services encompass the full lifecycle of engineering projects, from design and installation to maintenance and compliance, ensuring seamless integration of cutting-edge electrical and instrumentation solutions.</p>
                </div>
            </div>
        </section>
    );
};

export default Engineering;