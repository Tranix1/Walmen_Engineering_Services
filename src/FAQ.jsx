import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What industries does The WALMEM ENGINEERING serve?',
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

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleFaqClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
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
    );
};

export default FAQ;