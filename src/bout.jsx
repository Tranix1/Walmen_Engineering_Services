import React, { useRef, useState, useEffect } from 'react';
import aboutImage from '../assets/about.jpg';

const About = () => {
  const aboutSectionRef = useRef(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const aboutObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsAboutVisible(true);
    }, observerOptions);

    if (aboutSectionRef.current) aboutObserver.observe(aboutSectionRef.current);
    
    return () => {
      if (aboutSectionRef.current) aboutObserver.unobserve(aboutSectionRef.current);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutSectionRef}
      className={`about-section ${isAboutVisible ? 'visible' : 'hidden'}`}
    >
      <h2>ABOUT SOLID WEDGE</h2>
      <p>Promoting engineering efficiency and creating wealth through quality service delivery.</p>
      <div className="about-content">
        <div className="text-block">
          <p>SolidWedge is a leading provider of electrical and instrumentation solutions, offering a comprehensive portfolio of products and services. With a strong presence in South Africa, Zimbabwe, and Eswatini, we are dedicated to delivering innovative and high-quality engineering solutions.</p>
          <ul>
            <li>Expertise in electrical engineering, automation, and control systems.</li>
            <li>Comprehensive solutions covering design, installation, and maintenance.</li>
            <li>Strong partnerships with Schneider Electric, WFG, Festo, and Yokogawa.</li>
          </ul>
        </div>
        <div className="text-block">
          <p>Our key areas of expertise include power systems, plant automation, field instrumentation, panel manufacturing, and technical training. We provide turnkey solutions tailored to meet the evolving demands of industries, ensuring energy efficiency, safety, and regulatory compliance.</p>
        </div>
      </div>
    </section>
  );
};

export default About;