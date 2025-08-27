import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import aboutImage from './assets/about.jpg'; 
import hulettsLogo from './assets/about.jpg';
import angloLogo from './assets/about.jpg';
import zimplatsLogo from './assets/about.jpg';
import client1Logo from './assets/about.jpg';
import client2Logo from './assets/about.jpg';
import client3Logo from './assets/about.jpg';
import client4Logo from './assets/about.jpg';

// Import the new Contact component
import Contact from './Contact'; 
import Footer from './Footer'; // Add this line


// Counter component for the number animation
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

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null); // State for FAQ

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

  const servicesData = [
    {
      title: 'Solar Power Systems',
      description: 'We design and install high-efficiency solar power systems, reducing energy costs and promoting sustainability.',
      icon: (
        <svg className="service-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V2M18.364 5.636l-1.414 1.414M22 12h-4M18.364 18.364l-1.414-1.414M12 22v-4M5.636 18.364l1.414-1.414M2 12h4M5.636 5.636l1.414 1.414" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Field Installation Services',
      description: 'Expert on-site installation services for power systems, automation, and industrial control systems.',
      icon: (
        <svg className="service-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 10l-4 4m0-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 13l-2 2m8-4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Power Systems',
      description: 'Custom power system solutions, including distribution, backup systems, and energy management for industrial applications.',
      icon: (
        <svg className="service-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9m-4-6l-4 4V3m4-6V3m-4 4L18 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Plant Automation',
      description: 'Advanced automation solutions to enhance efficiency, reduce costs, and optimize industrial plant operations.',
      icon: (
        <svg className="service-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Control Panel Manufacturing',
      description: 'We design and manufacture high-quality control panels for industrial and commercial applications.',
      icon: (
        <svg className="service-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Technical Training',
      description: 'Providing hands-on training in automation, power systems, and maintenance for industry professionals.',
      icon: (
        <svg className="service-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L12 16M15 9L12 12M9 9L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const testimonialsData = [
    {
      quote: 'The strategic insights provided by The Solid Wedge have significantly boosted our agricultural efficiency and production capabilities.',
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
      quote: 'The Solid Wedge helped us implement smart mining solutions, increasing productivity while reducing environmental impact.',
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
      quote: 'SolidWedge provided exceptional support and expertise, helping us meet our project deadlines efficiently.',
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

  const whyChooseUsData = [
    {
      title: 'Quality First',
      description: 'Our commitment to quality ensures every project meets the highest standards for durability, performance, and safety.',
      icon: (
        <svg className="why-us-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.499L20 8.999V15.5L12 19.999L4 15.5V8.999L12 4.499Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L12 16M15 9L12 12M9 9L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Expert Team',
      description: 'Our team comprises highly-skilled engineers and technicians with extensive experience in various industrial sectors.',
      icon: (
        <svg className="why-us-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.8954 15.1046 17 14 17H10C8.89543 17 8 17.8954 8 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 12C17 16.4183 14.7614 20 12 20C9.23858 20 7 16.4183 7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: '24/7 Support',
      description: 'We offer round-the-clock technical support to ensure your operations run smoothly and any issues are resolved promptly.',
      icon: (
        <svg className="why-us-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  const faqData = [
    {
      question: 'What industries does The Solid Wedge serve?',
      answer: 'We provide solutions for the energy, mining, manufacturing, agriculture, and industrial automation sectors.'
    },
    {
      question: 'Do you offer solar power solutions for industries?',
      answer: 'Yes, we specialize in solar power installations for commercial and industrial clients, offering energy-efficient and sustainable solutions.'
    },
    {
      question: 'What types of maintenance services do you provide?',
      answer: 'We offer comprehensive maintenance services for both high-voltage (HV) and low-voltage (LV) systems to ensure optimal performance and safety.'
    },
    {
      question: 'Can you provide on-site installation for new equipment?',
      answer: 'Yes, our team provides expert on-site installation for all power systems, automation, and industrial control systems we supply.'
    },
    {
      question: 'Do you design custom power systems?',
      answer: 'Yes, we specialize in custom power system solutions, including distribution, backup systems, and energy management tailored to your specific needs.'
    },
    {
      question: 'What is included in your plant automation services?',
      answer: 'Our plant automation services include advanced solutions to enhance efficiency, reduce costs, and optimize industrial plant operations through modern control systems.'
    },
    {
      question: 'Do you manufacture control panels?',
      answer: 'Yes, we design and manufacture high-quality control panels for a wide range of industrial and commercial applications.'
    },
    {
      question: 'Do you offer technical training?',
      answer: 'We provide hands-on technical training programs in automation, power systems, and maintenance for industry professionals to enhance their skills.'
    },
    {
      question: 'What are your core competencies?',
      answer: 'Our core competencies include electrical engineering, power systems, plant automation, field instrumentation, and panel manufacturing.'
    },
    {
      question: 'How do I request a quote?',
      answer: 'You can request a quote by visiting our contact page or by sending us an email directly with your project details.'
    }
  ];

  const aboutSectionRef = useRef(null);
  const factsSectionRef = useRef(null);
  const engineeringSectionRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);

  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isFactsVisible, setIsFactsVisible] = useState(false);
  const [isEngineeringVisible, setIsEngineeringVisible] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slidesData.length]);

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

    const aboutObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsAboutVisible(true);
    }, observerOptions);

    const factsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsFactsVisible(true);
    }, observerOptions);

    const engineeringObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsEngineeringVisible(true);
    }, observerOptions);
    
    const testimonialsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsTestimonialsVisible(true);
    }, observerOptions);

    const servicesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsServicesVisible(true);
    }, observerOptions);

    if (aboutSectionRef.current) aboutObserver.observe(aboutSectionRef.current);
    if (factsSectionRef.current) factsObserver.observe(factsSectionRef.current);
    if (engineeringSectionRef.current) engineeringObserver.observe(engineeringSectionRef.current);
    if (testimonialsSectionRef.current) testimonialsObserver.observe(testimonialsSectionRef.current);
    if (servicesSectionRef.current) servicesObserver.observe(servicesSectionRef.current);

    return () => {
      if (aboutSectionRef.current) aboutObserver.unobserve(aboutSectionRef.current);
      if (factsSectionRef.current) factsObserver.unobserve(factsSectionRef.current);
      if (engineeringSectionRef.current) engineeringObserver.unobserve(engineeringSectionRef.current);
      if (testimonialsSectionRef.current) testimonialsObserver.unobserve(testimonialsSectionRef.current);
      if (servicesSectionRef.current) servicesObserver.unobserve(servicesSectionRef.current);
    };
  }, []);

  const handleFaqClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          SOLID<span className="logo-red">WEDGE</span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-heading">SOLID WEDGE</h1>
        <h2 className="hero-subheading">Precision in Electrical & Instrumentation</h2>
        <p className="hero-description">Delivering cutting-edge electrical and instrumentation solutions for industrial excellence.</p>
      </section>

      {/* Services Section with Carousel */}
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
      
      {/* About Section */}
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

      {/* Facts Section */}
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

      {/* Engineering Excellence Section */}
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

      {/* Testimonials Carousel Section */}
      <section className="testimonials-carousel">
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
      
      {/* Our Services Section with Hover Effect */}
      <section id="services" className="services-section">
        <h2 className="section-heading">OUR SERVICES</h2>
        <p className="section-subheading">Delivering cutting-edge energy, automation, and maintenance solutions to power industries efficiently and sustainably.</p>
        <div className="services-container">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <h2 className="section-heading">WHY CHOOSE US</h2>
        <p className="section-subheading">Experience, reliability, and innovation are at the core of our business, ensuring your success is our priority.</p>
        <div className="why-us-container">
          {whyChooseUsData.map((item, index) => (
            <div key={index} className="why-us-card">
              <div className="why-us-icon-container">
                {item.icon}
              </div>
              <h3 className="why-us-title">{item.title}</h3>
              <p className="why-us-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="faq-section">
        <h2 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="faq-subheading">Find answers to common questions about our services, solutions, and expertise.</p>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              onClick={() => handleFaqClick(index)}
            >
              <div className="faq-question">
                <p>{faq.question}</p>
                <span className="faq-toggle-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className="faq-answer-container">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Render the Contact component here */}
      <Contact />
            <Footer />

    </div>
  );
};

export default Home;