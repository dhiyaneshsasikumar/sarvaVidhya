import React, { useState, useEffect } from 'react';
import './DigitalMarketing.css';

function DigitalMarketing() {
  const [step, setStep] = useState(1);
  const [stepText, setStepText] = useState('');

  // Update step content based on step number
  useEffect(() => {
    switch (step) {
      case 1:
        setStepText('This is the content for Step 1. It provides detailed information about the first step in the process.');
        break;
      case 2:
        setStepText('This is the content for Step 2. It provides detailed information about the second step in the process.');
        break;
      case 3:
        setStepText('This is the content for Step 3. It provides detailed information about the third step in the process.');
        break;
      default:
        setStepText('Content not available for this step.');
        break;
    }
  }, [step]);

  return (
    <div className="DMcontainer">
      <main>
        {/* Section 1 */}
        <div className="serviceHeader">
          <h2>Digital Marketing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod mollis tempus. Proin sapien augue, semper ac nibh vel.</p>
          <div className="buttonSection">
            <button className="btn1">Explore Now</button>
          </div>
          <div className="marquee">
            <div className="track">
              <div className="content">
                Lorem ipsum dolor sit amet ✦ consectetur adipiscing elit ✦ Integer euismod mollis tempus ✦ Proin sapien augue ✦ semper ac nibh vel ✦
                Lorem ipsum dolor sit amet ✦ consectetur adipiscing elit ✦ Integer euismod mollis tempus ✦ Proin sapien augue ✦ semper ac nibh vel ✦
                Lorem ipsum dolor sit amet ✦ consectetur adipiscing elit ✦ Integer euismod mollis tempus ✦ Proin sapien augue ✦ semper ac nibh vel ✦
                Lorem ipsum dolor sit amet ✦ consectetur adipiscing elit ✦ Integer euismod mollis tempus ✦ Proin sapien augue ✦ semper ac nibh vel ✦
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <section className="services-section">
  <div className="container1">
    <h2 className="section-title">Unlock Your Digital Potential</h2>
    <div className="service-grid">
      {/* Service Cards */}
      {[...Array(6)].map((_, index) => (
        <div className="service-card" key={index}>
          <div className="icon-container">
            <img src="./images/code.png" alt="" />
          </div>
          <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Section 3 */}
        <section className="section3Div">
          <div className="section3">
            <div className="title">
              <h3>Social Media Marketing</h3>
              <hr />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="icon-grid">
              <div className="icon-item">
                <img src="public\images\linkedin (1).png" alt="Icon 1" />
                <p>9000+ Followers</p>
              </div>
              <div className="icon-item">
                <img src="public\images\search.png" alt="Icon 2" />
                <p>Rated 4.6/5 500+ Reviews</p>
              </div>
              <div className="icon-item">
                <img src="public\images\instagram (1).png" alt="Icon 3" />
                <p>10,000+ Followers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="expertise-section">
          <div className="expertise-container">
            <div className="expertise-title">
              <h3>Personal Branding</h3>
              <hr className="expertise-divider" />
            </div>
            <p className="expertise-description">
              In today’s market, founders and owners are stepping up to personally promote their brands. Instead of traditional marketing, they’re using platforms like Instagram, Facebook, and LinkedIn to share their stories and connect with audiences. This approach not only builds trust but also creates a more authentic and relatable brand image. Personal branding allows for organic growth and stronger engagement with potential customers. It’s a powerful way to showcase the passion and vision behind the brand.
            </p>
            <div className="expertise-icon-grid">
              {[{ src: 'linkedin (1).png', alt: 'SEO Icon' }, { src: 'instagram (1).png', alt: 'Content Creation Icon' }, { src: 'facebook.png', alt: 'Social Media Icon' }].map((icon, index) => (
                <div className="expertise-icon-item" key={index}>
                  
                  
                  <img src={`images/${icon.src}`} alt={icon.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Section */}
        <section className="step-by-step-section">
          <div className="step-by-step-container">
            <div className="step-by-step-image">
              <img src=".\images\Computer troubleshooting-amico.png" alt="Step-by-Step Guide" />
            </div>
            <div className="step-by-step-content">
              <h3 className="emailhead">Email Marketing Services</h3>
              <hr className="step-divider" />
              <p>
                Think email marketing is outdated? Think again. Email marketing remains one of the most effective ways to connect with your audience and drive results. With our email marketing services, we’ll help you craft attention-grabbing campaigns that land right in your customers’ inboxes. From compelling subject lines to personalized content, we’ll make sure your emails stand out and drive action. Whether you’re looking to promote a new product, nurture leads, or re-engage inactive subscribers, we’ve got the expertise to make it happen. Say hello to higher open rates, click-throughs, and conversions with our email marketing magic.
              </p>
              <div className="step-button-container">
                <div className="step-button" onClick={() => setStep(1)}>Step 1</div>
                <div className="step-button" onClick={() => setStep(2)}>Step 2</div>
                <div className="step-button" onClick={() => setStep(3)}>Step 3</div>
              </div>
              <div id="step-content">
                <p>{stepText}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DigitalMarketing;
