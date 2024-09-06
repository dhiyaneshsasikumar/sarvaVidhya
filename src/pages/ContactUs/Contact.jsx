import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  // State to track which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle accordion state
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Smooth scroll functionality for the 'Reach us' button
    const button = document.querySelector('.btn1');
    const targetSection = document.getElementById('contact');

    if (button && targetSection) {
      button.addEventListener('click', () => {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    return () => {
      // Clean up event listeners when component unmounts
      if (button) {
        button.removeEventListener('click', () => {});
      }
    };
  }, []); // Empty dependency array means it runs once after the initial render

  return (
    <div className="contact">
      <main>
        <div className="serviceHeader">
          <h2 className="contact-head">Contact Us</h2>
          <p className="contact-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod mollis tempus. Proin sapien
            augue, semper ac nibh vel.
          </p>
          <div className="buttonSection">
            <button className="btn1">Reach us</button>
          </div>
        </div>

        <section className="nextSection" id="contact">
          <div className="arch_contact_us_duplicate">
            <div className="responsive-container-block big-container">
              <div className="responsive-container-block container">
                <div className="responsive-cell-block wk-mobile-12 wk-desk-5 wk-tab-10 wk-ipadp-5" id="ih6s">
                  <p className="text-blk section-head">Get in touch</p>
                  <p className="text-blk section-subhead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
                <div className="responsive-cell-block wk-ipadp-6 wk-mobile-12 wk-desk-5 wk-tab-9" id="i6df">
                  <div className="form-wrapper">
                    <input className="input input-element" name="Name" placeholder="Name" />
                    <input className="input input-element" name="Contact Number" placeholder="Contact Number" />
                    <input className="input input-element" name="Email" placeholder="Email" />
                    <textarea className="textinput input-element" placeholder="Message"></textarea>
                    <button className="button">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-1">
            <div className="accordion__wrapper">
              <h1 className="accordion__title">Frequently Asked Questions</h1>

              {/* Accordion 1 */}
              <div className="accordion">
                <div className="accordion__header" onClick={() => toggleAccordion(0)}>
                  <h2 className="accordion__question">What are your office hours?</h2>
                  <span className="accordion__icon">
                    <i className={openIndex === 0 ? "ri-subtract-fill" : "ri-add-line"}></i>
                  </span>
                </div>
                <div className="accordion__content" style={{ height: openIndex === 0 ? 'auto' : '0px' }}>
                  <p className="accordion__answer">Our office hours are Monday to Friday, 9 AM to 5 PM EST.</p>
                </div>
              </div>

              {/* Accordion 2 */}
              <div className="accordion">
                <div className="accordion__header" onClick={() => toggleAccordion(1)}>
                  <h2 className="accordion__question">How can I reach customer service?</h2>
                  <span className="accordion__icon">
                    <i className={openIndex === 1 ? "ri-subtract-fill" : "ri-add-line"}></i>
                  </span>
                </div>
                <div className="accordion__content" style={{ height: openIndex === 1 ? 'auto' : '0px' }}>
                  <p className="accordion__answer">You can contact our customer service team by email at support@example.com or by phone at 1-800-555-1234.</p>
                </div>
              </div>

              {/* Accordion 3 */}
              <div className="accordion">
                <div className="accordion__header" onClick={() => toggleAccordion(2)}>
                  <h2 className="accordion__question">What information do I need to provide when contacting you?</h2>
                  <span className="accordion__icon">
                    <i className={openIndex === 2 ? "ri-subtract-fill" : "ri-add-line"}></i>
                  </span>
                </div>
                <div className="accordion__content" style={{ height: openIndex === 2 ? 'auto' : '0px' }}>
                  <p className="accordion__answer">Please have your name, email address, order number (if applicable), and a brief description of your query or issue ready when contacting us.</p>
                </div>
              </div>

              {/* Accordion 4 */}
              <div className="accordion">
                <div className="accordion__header" onClick={() => toggleAccordion(3)}>
                  <h2 className="accordion__question">How long will it take to receive a response?</h2>
                  <span className="accordion__icon">
                    <i className={openIndex === 3 ? "ri-subtract-fill" : "ri-add-line"}></i>
                  </span>
                </div>
                <div className="accordion__content" style={{ height: openIndex === 3 ? 'auto' : '0px' }}>
                  <p className="accordion__answer">We aim to respond to all inquiries within 1-2 business days, but during peak times, it may take up to 3 business days.</p>
                </div>
              </div>

              {/* Accordion 5 */}
              <div className="accordion">
                <div className="accordion__header" onClick={() => toggleAccordion(4)}>
                  <h2 className="accordion__question">Do you have any other contact options?</h2>
                  <span className="accordion__icon">
                    <i className={openIndex === 4 ? "ri-subtract-fill" : "ri-add-line"}></i>
                  </span>
                </div>
                <div className="accordion__content" style={{ height: openIndex === 4 ? 'auto' : '0px' }}>
                  <p className="accordion__answer">In addition to email and phone, you can also reach us through our contact form on the website or by mailing a letter to our address: 123 Example Street, Anytown USA 12345.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
