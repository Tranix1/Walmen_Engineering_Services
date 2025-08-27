import React, { useRef, useState, useEffect } from 'react';
import './Facts.css';

const Counter = ({ endValue }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const start = 0;
        let startTime;

        const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const newValue = Math.min(
                Math.floor((progress / duration) * (endValue - start) + start),
                endValue
            );
            setCount(newValue);
            if (progress < duration) {
                requestAnimationFrame(animateCount);
            }
        };

        requestAnimationFrame(animateCount);
    }, [endValue]);

    return <h3>{count}</h3>;
};

const Facts = () => {
    const factsSectionRef = useRef(null);
    const [isFactsVisible, setIsFactsVisible] = useState(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };
        const factsObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsFactsVisible(true);
        }, observerOptions);

        if (factsSectionRef.current) factsObserver.observe(factsSectionRef.current);
        
        return () => {
            if (factsSectionRef.current) factsObserver.unobserve(factsSectionRef.current);
        };
    }, []);

    return (
        <section 
            className={`facts-section ${isFactsVisible ? 'visible' : ''}`}
            ref={factsSectionRef}
        >
            <div className="facts-container">
                <div className="fact-card">
                    {isFactsVisible && <Counter endValue={232} />}
                    <p>Clients</p>
                </div>
                <div className="fact-card">
                    {isFactsVisible && <Counter endValue={521} />}
                    <p>Projects</p>
                </div>
                <div className="fact-card">
                    {isFactsVisible && <Counter endValue={1453} />}
                    <p>Hours Of Support</p>
                </div>
                <div className="fact-card">
                    {isFactsVisible && <Counter endValue={150} />}
                    <p>Workers</p>
                </div>
            </div>
        </section>
    );
};

export default Facts;