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
                    {/* <p className="address-details">G6 Lisna Garvie 104 Josiah Chinamano, Harare, Zimbabwe</p> */}
                   <p className="address-details">
  G6 Lisna Garvie, 104 Josiah Chinamano, Harare, Zimbabwe
</p>
<p className="address-details">
  G6 Lisna Garvie, 104 Josiah Chinamano, Harare, Zimbabwe
</p>
<div className="google-map">
  <iframe
    src="https://maps.google.com/maps?q=G6+Lisna+Garvie,+104+Josiah+Chinamano,+Harare,+Zimbabwe&z=17&iwloc=B&output=embed"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Walmem Engineering Location"
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