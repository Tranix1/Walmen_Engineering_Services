import React from 'react';
import './WhyChooseUs.css';

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

const WhyChooseUs = () => {
    return (
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
    );
};

export default WhyChooseUs;