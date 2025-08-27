import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import Header from './Header';
import Hero from './Hero';
import ServicesCarousel from './ServicesCarousel';
import About from './About';
import Facts from './Facts';
import Engineering from './Engineering';
import Testimonials from './Testimonials';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    // All state and data declarations are moved to their respective components or a central data file
    return (
        <div className="home-container">
            <Header />
            <Hero />
            <ServicesCarousel />
            <About />
            <Facts />
            <Engineering />
            <Testimonials />
            <Services />
            <WhyChooseUs />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;