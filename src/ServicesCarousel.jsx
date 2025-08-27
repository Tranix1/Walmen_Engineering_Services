import React, { useState, useEffect } from 'react';
import './ServicesCarousel.css';

const slidesData = [
  {
    title: 'Mining Technology',
    description: 'Enhance mining operations with cutting-edge tech solutions.',
    className: 'mining-tech-bg'
  },
  {
    title: 'Sustainability Initiatives',
    description: 'Improve sustainability in operations with innovative techniques.',
    className: 'sustainability-bg'
  },
  {
    title: 'Manufacturing Optimization',
    description: 'Streamline production processes and enhance supply chain efficiency.',
    className: 'manufacturing-bg'
  },
  {
    title: 'Electrical & Instrumentation',
    description: 'Precision solutions for industrial electrical systems.',
    className: 'mining-tech-bg'
  }
];

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slidesData.length]);

  return (
    <section className="services-carousel">
      <div className="carousel-container">
        <div className="slides-wrapper" style={{ transform: `translateX(calc(-${currentSlide * 330}px + 50% - 150px))` }}>
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className={`slide-content ${slide.className}`}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;