import React, { useState, useEffect, useRef } from 'react';
import hulettsLogo from './assets/about.jpg';
import angloLogo from './assets/about.jpg';
import zimplatsLogo from './assets/about.jpg';
import client1Logo from './assets/about.jpg';
import client2Logo from './assets/about.jpg';
import client3Logo from './assets/about.jpg';
import client4Logo from './assets/about.jpg';
import './Testimonials.css';

const testimonialsData = [
  {
    quote: 'The strategic insights provided by The Welmem Engineering have significantly boosted our agricultural efficiency and production capabilities.',
    logo: hulettsLogo,
    company: 'Huletts',
    industry: 'Agriculture & Sugar Production'
  },
  {
    quote: 'Their expertise in mining technology and operational efficiency has greatly improved our output and sustainability initiatives.',
    logo: angloLogo,
    company: 'Anglo American Platinum',
    industry: 'Mining & Precious Metals'
  },
  {
    quote: 'The Welmem Engineering helped us implement smart mining solutions, increasing productivity while reducing environmental impact.',
    logo: zimplatsLogo,
    company: 'Zimplats',
    industry: 'Platinum Mining & Process'
  },
  {
    quote: 'Their professionalism and deep understanding of electrical systems have made them an invaluable partner on our projects.',
    logo: client1Logo,
    company: 'Client Company 1',
    industry: 'Industrial Manufacturing'
  },
  {
    quote: 'We were impressed by the seamless integration and high-quality work on our recent automation upgrade.',
    logo: client2Logo,
    company: 'Client Company 2',
    industry: 'Power Generation'
  },
  {
    quote: 'Welmem Engineering provided exceptional support and expertise, helping us meet our project deadlines efficiently.',
    logo: client3Logo,
    company: 'Client Company 3',
    industry: 'Heavy Industry'
  },
  {
    quote: 'Their team is highly skilled and delivers solutions that are both innovative and reliable. A pleasure to work with!',
    logo: client4Logo,
    company: 'Client Company 4',
    industry: 'Automotive'
  }
];

const Testimonials = () => {
    const [testimonialSlide, setTestimonialSlide] = useState(0);
    const testimonialsSectionRef = useRef(null);
    const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);

    useEffect(() => {
        const testimonialInterval = setInterval(() => {
            setTestimonialSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
        }, 6000);
        return () => clearInterval(testimonialInterval);
    }, [testimonialsData.length]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };
        const testimonialsObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsTestimonialsVisible(true);
        }, observerOptions);

        if (testimonialsSectionRef.current) testimonialsObserver.observe(testimonialsSectionRef.current);

        return () => {
            if (testimonialsSectionRef.current) testimonialsObserver.unobserve(testimonialsSectionRef.current);
        };
    }, []);

    return (
        <section className="testimonials-carousel" ref={testimonialsSectionRef}>
            <h2 className="testimonials-heading">TESTIMONIALS</h2>
            <p className="testimonials-subheading">What Our Partners Say About Us</p>
            <div className="carousel-container">
                <div className="slides-wrapper" style={{ transform: `translateX(calc(-${testimonialSlide * 350}px + 50% - 300px))` }}>
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`slide ${index === testimonialSlide ? 'active' : ''}`}
                        >
                            <div className="testimonial-card">
                                <p className="quote">“{testimonial.quote}”</p>
                                <div className="testimonial-footer">
                                    <img src={testimonial.logo} alt={testimonial.company} className="client-logo" />
                                    <div className="client-info">
                                        <p className="client-company">{testimonial.company}</p>
                                        <p className="client-industry">{testimonial.industry}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;