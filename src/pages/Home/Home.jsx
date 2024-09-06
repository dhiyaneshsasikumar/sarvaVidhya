import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaHeadphones, FaHandHoldingHeart } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    "carousel/zeb-2.png",
    "carousel/mockup-atmos5.png",
    "carousel/Student-linker-final.png",
    "carousel/futball-1.png",
    "carousel/vintage-closet-2.png",
  ];

  const totalItems = carouselItems.length - 1;

  const updateCarousel = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 <= totalItems ? prevIndex + 1 : 0
      );
    }, 3000);
    return () => clearInterval(autoSlideInterval);
  }, [currentIndex, totalItems]);

  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 200;
      let currentCount = 0;
      const updateCounter = () => {
        currentCount += increment;
        if (currentCount < target) {
          counter.innerText = `${Math.ceil(currentCount)}+`;
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = `${target}+`;
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-description">
            <h1>Grow your Business with Sarva Vidya</h1>
            <p>
              Get a professional website and digital marketing support for your
              business within your budget.
            </p>
            <button className="cta-button">Join now</button>
          </div>
          <div className="carousel">
            <div className="carousel-track">
              {carouselItems.map((image, index) => (
                <div
                  className="carousel-item"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                  key={index}
                >
                  <img src={image} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <button
                id="carousel-prev"
                className="carousel-button"
                onClick={() =>
                  updateCarousel(
                    currentIndex - 1 >= 0 ? currentIndex - 1 : totalItems
                  )
                }
              >
                {"<"}
              </button>
              <button
                id="carousel-next"
                className="carousel-button"
                onClick={() =>
                  updateCarousel(
                    currentIndex + 1 <= totalItems ? currentIndex + 1 : 0
                  )
                }
              >
                {">"}
              </button>
            </div>
            <ul className="carousel-indicators">
              {carouselItems.map((_, index) => (
                <li
                  key={index}
                  className={currentIndex === index ? "active" : ""}
                  onClick={() => updateCarousel(index)}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Icon Section */}
      <section className="icon-section">
        <div className="icon-slider-container">
          {/* First slider */}
          <div className="icon-slider">
            <div className="icon-slide-track">
              {/* Add icons in the below divs */}
              <div className="icon-slide">
                <img src="icons/bootstrap.png" alt="Bootstrap" />
              </div>
              <div class="icon-slide"><img src="icons/bootstrap-5-logo-icon.png" alt="Bootstrap" /></div>
              <div class="icon-slide"><img src="icons/node-js-icon.png" alt="Node.js" /></div>
              <div class="icon-slide"><img src="icons/css-3.png" alt="CSS3" /></div>
              <div class="icon-slide"><img src="icons/git-icon.png" alt="Git" /></div>
              <div class="icon-slide"><img src="icons/redux-icon.png" alt="Redux" /></div>
              <div class="icon-slide"><img src="icons/vue.png" alt="Vue.js" /></div>
              <div class="icon-slide"><img src="icons/html (1).png" alt="HTML5" /></div>
              <div class="icon-slide"><img src="icons/kubernetes-icon.png" alt="Kubernetes" /></div>
              <div class="icon-slide"><img src="icons/nextjs-icon.png" alt="Next.js" /></div>
              <div class="icon-slide"><img src="icons/sass-icon.png" alt="Sass" /></div>
              <div class="icon-slide"><img src="icons/django-icon.png" alt="Django" /></div>
              <div class="icon-slide"><img src="icons/postgresql-icon.png" alt="PostgreSQL" /></div>
              <div class="icon-slide"><img src="icons/typescript.png" alt="TypeScript" /></div>
              <div class="icon-slide"><img src="icons/docker-icon.png" alt="Docker" /></div>
              <div class="icon-slide"><img src="icons/express-js-icon.png" alt="Express.js" /></div>
              <div class="icon-slide"><img src="icons/google-firebase-icon.png" alt="Firebase" /></div>
              <div class="icon-slide"><img src="icons/js.png" alt="JavaScript" /></div>
              <div class="icon-slide"><img src="icons/laravel-icon.png" alt="Laravel" /></div>
              <div class="icon-slide"><img src="icons/php-programming-language-icon.png" alt="PHP" /></div>
              <div class="icon-slide"><img src="icons/react.png" alt="React" /></div>
              <div class="icon-slide"><img src="icons/mongodb-icon.png" alt="MongoDB" /></div>
              <div class="icon-slide"><img src="icons/flask-logo-icon.png" alt="Flask" /></div>
              <div class="icon-slide"><img src="icons/ruby-on-rails-icon.png" alt="Ruby on Rails" /></div>
            </div>
          </div>

          {/* Reverse slider */}
          <div className="icon-slider reverse">
            <div className="icon-slide-track">
              <div class="icon-slide"><img src="icons/js.png" alt="JavaScript" /></div>
              <div class="icon-slide"><img src="icons/google-firebase-icon.png" alt="Firebase" /></div>
              <div class="icon-slide"><img src="icons/ruby-on-rails-icon.png" alt="Ruby on Rails" /></div>
              <div class="icon-slide"><img src="icons/bootstrap-5-logo-icon.png" alt="Bootstrap" /></div>
              <div class="icon-slide"><img src="icons/sass-icon.png" alt="Sass" /></div>
              <div class="icon-slide"><img src="icons/react.png" alt="React" /></div>
              <div class="icon-slide"><img src="icons/nextjs-icon.png" alt="Next.js" /></div>
              <div class="icon-slide"><img src="icons/django-icon.png" alt="Django" /></div>
              <div class="icon-slide"><img src="icons/git-icon.png" alt="Git" /></div>
              <div class="icon-slide"><img src="icons/flask-logo-icon.png" alt="Flask" /></div>
              <div class="icon-slide"><img src="icons/node-js-icon.png" alt="Node.js" /></div>
              <div class="icon-slide"><img src="icons/kubernetes-icon.png" alt="Kubernetes" /></div>
              <div class="icon-slide"><img src="icons/docker-icon.png" alt="Docker" /></div>
              <div class="icon-slide"><img src="icons/css-3.png" alt="CSS3" /></div>
              <div class="icon-slide"><img src="icons/html (1).png" alt="HTML5" /></div>
              <div class="icon-slide"><img src="icons/vue.png" alt="Vue.js" /></div>
              <div class="icon-slide"><img src="icons/mongodb-icon.png" alt="MongoDB" /></div>
              <div class="icon-slide"><img src="icons/php-programming-language-icon.png" alt="PHP" /></div>
              <div class="icon-slide"><img src="icons/express-js-icon.png" alt="Express.js" /></div>
              <div class="icon-slide"><img src="icons/laravel-icon.png" alt="Laravel" /></div>
              <div class="icon-slide"><img src="icons/redux-icon.png" alt="Redux" /></div>
              <div class="icon-slide"><img src="icons/postgresql-icon.png" alt="PostgreSQL" /></div>
              <div class="icon-slide"><img src="icons/typescript.png" alt="TypeScript" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-section">
        <header className="service-header">
          <h3>Our Services</h3>
          <p>
            Comprehensive Website Services to Ignite Your Online Success.
            Empower Your Business with Powerful Online Services from our
            Website.
          </p>
        </header>
        <div className="service-cards">
          <div className="cards-wrapper">
            <div className="card">
              <h2 className="card-title">Web Design</h2>
              <p className="card-description">
                Boost your online presence and connect with more people using
                our smart digital marketing strategies.
              </p>
              <a href="#" className="card-link">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="card">
              <h2 className="card-title">Web Design</h2>
              <p className="card-description">
                Boost your online presence and connect with more people using
                our smart digital marketing strategies.
              </p>
              <a href="#" className="card-link">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="card">
              <h2 className="card-title">Web Design</h2>
              <p className="card-description">
                Boost your online presence and connect with more people using
                our smart digital marketing strategies.
              </p>
              <a href="#" className="card-link">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            {/* Add more service cards similarly */}
          </div>
        </div>
      </section>

      {/* Achievements Counter Section */}
      <section className="counter-section">
        <div className="container-counter">
          <div className="counter-box design1">
            <div className="counter" data-target="100">0+</div>
            <p>Projects Done</p>
          </div>
          <div className="counter-box design2">
            <div className="counter" data-target="150">0+</div>
            <p>Happy Clients</p>
          </div>
          <div className="counter-box design3">
            <div className="counter" data-target="200">0+</div>
            <p>Awards Won</p>
          </div>
          <div className="counter-box design4">
            <div className="counter" data-target="250">0+</div>
            <p>Cups of Coffee</p>
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section>
        <h3 className="slogon">
          Growing Together is our tagline, where we help businesses grow online
        </h3>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="clients-container">
          <div className="clients-info">
            <h2 className="home-clients-heading">
              We Help Brands Increase Their Online Presence
            </h2>
            <hr />
            <p className="clients-description">
              At Sarva Vidhya, we specialize in boosting your brand’s visibility and
              engagement
              online. Our expert team crafts tailored digital strategies to enhance your website, optimize social
              media, and drive
              targeted traffic. We focus on your unique goals to attract new customers and build lasting loyalty.
              Let us help
              you navigate the digital landscape and grow your online presence effectively.
            </p>
          </div>
          <div className="clients-gallery">
            <div class="clients-image"><img src="carousel/ddf.png" alt="clients 1" /></div>
            <div class="clients-image"><img src="carousel/mockup-atmos5.png" alt="clients 2" /></div>
            <div class="clients-image"><img src="carousel/Student-linker-final.png" alt="clients 3" /></div>
            <div class="clients-image"><img src="carousel/zeb-2.png" alt="clients 4" /></div>
            <div class="clients-image"><img src="carousel/futball-1.png" alt="clients 5" /></div>
            <div class="clients-image"><img src="carousel/vintage-closet-2.png" alt="clients 6" /></div>
            <div class="clients-image"><img src="carousel/1-1536x864.png" alt="clients 7" /></div>
            <div class="clients-image"><img src="carousel/4-1536x864.png" alt="clients 8" /></div>
            <div class="clients-image"><img src="carousel/Screenshot-2024-06-18-at-10.45.46 AM-1536x826.png"
              alt="clients 9" /></div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="marquee">
        <div className="track">
          <div className="marquee-content">
            Lorem ipsum dolor sit amet ✦ consectetur adipiscing elit ✦ Integer
            euismod mollis tempus ✦ Proin sapien
          </div>
        </div>
      </div>

      {/* Supportive Section */}
      <section className="supportive-section">
        <div className="supportive-content">
          <div className="home-supportive-text">
            <h1>Why People Love Us</h1>
            <p>
              At Sarva Vidhya, it’s all about growing together. We’re a startup that prioritizes the growth of our
              clients over profit. We believe in creating real value and building lasting relationships. Our
              dedicated team goes the extra mile to ensure your success. Join us, and let’s achieve amazing things
              together!
            </p>
          </div>
          <div className="supportive-reasons">
            <div class="supportive-reason">
              <div class="supportive-icon">
                <FaHeadphones />
              </div>
              <div class="supportive-text-content">
                <h2>Support System</h2>
                <p>Our dedicated support team provides prompt assistance, guidance, and solutions, ensuring our
                  clients feel supported every step of the way.</p>
              </div>
            </div>
            <div class="supportive-reason">
              <div class="supportive-icon">
                <FaHandHoldingHeart />
              </div>
              <div class="supportive-text-content">
                <h2>Friendly Relationship</h2>
                <p>We prioritize building genuine connections, fostering trust, and creating a welcoming
                  atmosphere where clients feel valued and understood.</p>
              </div>
            </div>
            <div class="supportive-reason">
              <div class="supportive-icon">
                <IoIosSettings />
              </div>
              <div class="supportive-text-content">
                <h2>Business Strategies</h2>
                <p>We offer innovative, tailored strategies that drive growth and success, empowering businesses
                  to thrive in today's dynamic marketplace with confidence and clarity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="consultation-section">
        <div className="consultation-container">
          <div className="consultation-info">
            <h1>Startup and Online Growth Consultation</h1>
            <p>In this one-on-one session, our founder will personally connect with you to share his expert insights
              on growing your business. We’ll conduct special research tailored to your niche and offer tips that
              can propel your business forward. This isn’t just generic advice – it’s actionable, personalized
              strategies to help you succeed.</p>
            <h2>Increase Your Profit from ₹10,000 to ₹10 Lakhs</h2>
            <p>Ready to take your business to the next level? We’ll show you how to scale your profits from ₹10,000
              to ₹10 Lakhs. With our expert guidance, proven strategies, and personalized advice, you’ll be
              equipped to grow your revenue and achieve your financial goals. Let’s turn your vision into reality!
            </p>
            <button className="consultation-btn">Consulting Service</button>
          </div>
          <div className="consultation-form">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />

              <label htmlFor="message">Comment or Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit" className="form-submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
