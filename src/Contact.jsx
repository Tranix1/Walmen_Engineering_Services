import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [statusMessage, setStatusMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to a backend.
        // For this example, we'll just simulate a success message.
        console.log('Form submitted!');
        setStatusMessage('Your message has been sent. Thank you!');
        // You can clear the form fields here if you want
        e.target.reset();
    };

    return (
        <div className="contact-container">
            <section className="contact-header-section">
                <h2 className="contact-heading">CONTACT US</h2>
                <p className="contact-subheading">Get in touch with us for inquiries, project discussions, and support.</p>
            </section>
            
            <section className="contact-content-section">
                <div className="map-container">
                    <h3 className="section-title">Address</h3>
                    <p className="address-details">13A, Simon Mazorodze, Waterfalls, Harare, Zimbabwe</p>
                    <div className="google-map">
                        {/* This is an example iframe for Google Maps. 
                            You should replace the src URL with your actual location's embed URL.
                            To get this, go to Google Maps, search for your location, click 'Share', then 'Embed a map'.
                        */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.16634354275!2d31.0505437154203!3d-17.89679648873752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a31d9a2d04a5%3A0x6a2c2865955a8f4c!2s13A%20Simon%20Mazorodze%20Rd%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1629853818671!5m2!1sen!2szw"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Solid Wedge Location"
                        ></iframe>
                    </div>
                </div>

                <div className="form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="send-button">Send Message</button>
                        {statusMessage && <div className="status-message">{statusMessage}</div>}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;