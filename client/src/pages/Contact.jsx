import React from 'react';
import '../styles/contact.css';
import Header from "../components/Header";
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <Header />
      
      {/* --- HERO SECTION --- */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p className="hero-subtitle">Transforming Online Clothing Selection<br />Through intelligent 3D Modeling</p>
          <div className="hero-buttons">
            <button className="btn-hero-primary">Explore Features</button>
            <button className="btn-hero-outline">Learn More</button>
          </div>
        </div>
      </section>

      <div className="main-content-container">
        
        {/* --- MIDDLE SECTION: FORM & MAP --- */}
        <div className="middle-grid">
          
          {/* LEFT COLUMN: CONTACT INFORMATION */}
          <div className="grid-column">
            <div className="column-header">
              <h2>Contact Information</h2>
              <p>Have specific questions about our AI sizing tech? Fill out the form below and our team will respond shortly.</p>
            </div>

            {/* DARK GLASS CARD */}
            <div className="glass-card">
              <div className="glass-header">
                <h3>Get in Touch!</h3>
                <p>Send us a message regarding collaborations, inquiries, or support.</p>
              </div>

              <form className="glass-form">
                <div className="input-wrapper">
                  <div className="icon-box">✉️</div>
                  <input type="email" placeholder="Email" required />
                </div>

                <div className="input-wrapper">
                  <div className="icon-box">👤</div>
                  <input type="text" placeholder="Name" required />
                </div>

                <div className="input-wrapper textarea-wrapper">
                  <div className="icon-box start-align">✉️</div>
                  <textarea placeholder="Message" rows="5" required></textarea>
                </div>

                <button type="submit" className="glass-submit-btn">Submit</button>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: OUR LOCATION (MAP) */}
          <div className="grid-column">
            <div className="column-header">
              <h2>Our Location</h2>
              <p>Visit our headquarters to see how we are reshaping the fashion-tech industry in the Philippines.</p>
            </div>

            <div className="map-container">
              {/* Custom Overlay Card matching the design */}
              <div className="map-overlay-card">
                <strong>FitVision: PHINMA UPang</strong>
                <p>Arellano St, Dagupan, Pangasinan</p>
                <a href="#">View on Google Maps</a>
              </div>

              <iframe 
                title="PHINMA UPang Location"
                src="https://maps.google.com/maps?q=PHINMA+University+of+Pangasinan&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>

        </div>

        {/* --- BOTTOM SECTION: INFO CARDS --- */}
        <div className="bottom-section">
          <div className="section-title-center">
            <h2>Our Location</h2>
            <p>Reach out to us directly or visit our main office.</p>
          </div>

          <div className="info-cards-row">
            
            {/* CARD 1: PHONE */}
            <div className="info-white-card">
              <div className="icon-circle phone-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="card-content">
                <h3>Get in Touch!</h3>
                <p className="large-text">+63 75 522 5635</p>
                <p className="small-text">Mon-Fri, 8:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* CARD 2: LOCATION DETAILS */}
            <div className="info-white-card">
              <div className="icon-circle chat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <div className="card-content">
                <h3>Our Location</h3>
                <p className="large-text">PHINMA UPang, Dagupan</p>
                <div className="rating-pill">
                  <span>⭐⭐⭐⭐⭐ 4.9</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;