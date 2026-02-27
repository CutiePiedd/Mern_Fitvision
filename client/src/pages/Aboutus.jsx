import React, { useState } from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';
import "../styles/aboutus.css";
import cristinePic from "../assets/images/cristinePic.png";
import princessPic from "../assets/images/princessPic.png";
import aldrinPic from "../assets/images/aldrinPic.png";
import kennPic from "../assets/images/kennPic.png";
import marPic from "../assets/images/marPic.png";
import rheaPic from "../assets/images/rheaPic.png";


// Import a generic office/team image for the Mission section side image
// Kung wala ka pang image, pwede mo gamitin ang URL muna sa img tag
import officeImg from "../assets/images/cristinePic.png"; // Pwede mo palitan ng ibang image variable

const Aboutus = () => {
  // --- STATE PARA SA TABS (Mission, Vision, Goal) ---
  const [activeTab, setActiveTab] = useState("mission");

  // --- CONTENT DATA ---
  const content = {
    mission: {
      title: "Our Company Mission",
      text: "To revolutionize the online shopping experience by providing accurate, AI-powered 3D body scanning technology. We aim to eliminate the uncertainty of sizing, reduce return rates for retailers, and empower users to shop with total confidence."
    },
    vision: {
      title: "Our Future Vision",
      text: "We envision a world where virtual try-ons are the standard. FitVision strives to become the global leader in fashion-tech integration, bridging the gap between digital convenience and physical reality through seamless, hyper-realistic avatars."
    },
    goal: {
      title: "Our Main Goal",
      text: "To serve 1 million active users by 2027 and partner with top global fashion brands. We are dedicated to continuously refining our algorithms to achieve 99% sizing accuracy while maintaining user privacy and data security."
    }
  };

  return (
    <>
      <Header />
      <div className="team-page">
        
        {/* --- NEW SECTION: MISSION / VISION / GOAL --- */}
        <div className="container">
          <div className="mission-section">
            
            {/* Left Side: Content & Tabs */}
            <div className="mission-content">
              <span className="sub-heading">ABOUT FITVISION</span>
              <h1>Our Main Goal is to Satisfy Local & Global Clients</h1>

              {/* TAB BUTTONS */}
              <div className="mission-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                  onClick={() => setActiveTab('mission')}
                >
                  Our Mission
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                  onClick={() => setActiveTab('vision')}
                >
                  Our Vision
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'goal' ? 'active' : ''}`}
                  onClick={() => setActiveTab('goal')}
                >
                  Our Goal
                </button>
              </div>

              {/* DYNAMIC TEXT AREA */}
              <div className="tab-content fade-in">
                <h3>{content[activeTab].title}</h3>
                <p>{content[activeTab].text}</p>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="mission-image">
               {/* Palitan mo ito ng image ng nag-memeeting or office vibe */}
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="FitVision Team Meeting" />
            </div>
          </div>
        </div>

        {/* --- ORIGINAL HEADER (Adjusted margin) --- */}
        <div className="team-header-text">
          <h1>Meet the Innovators</h1>
          <p>
            The brilliant minds behind FitVision's revolution in 3D body scanning 
            and virtual try-on technology.
          </p>
        </div> <br></br>

        {/* --- FEATURED SECTION (CEO/Project Manager) --- */}
        <div className="container">
          <div className="featured-card">
            <div className="featured-image-container">
              <span className="badges">Project Lead</span>
              <img 
                src={cristinePic}   
                alt="Cristine Caramat" 
                className="featured-img" 
              />
            </div>
            
            <div className="featured-content">
              <h2>Cristine Caramat</h2>
              <p className="role">Project Manager & Lead Visionary</p>
              
              <p className="bio">
                Spearheading the FitVision initiative with over 7 years of experience 
                in tech management. Cristine ensures the seamless integration of 
                AI algorithms with user-friendly fashion interfaces.
              </p>

              <ul className="skills-list">
                <li><i className="check-icon">✔</i> Expert in Agile Tech Development</li>
                <li><i className="check-icon">✔</i> 3D Modeling Strategy Coordinator</li>
                <li><i className="check-icon">✔</i> Passionate about Fashion-Tech Solutions</li>
              </ul>
            </div>
          </div>
        </div> <br></br>

        {/* --- TEAM GRID SECTION --- */}
        <div className="container board-section">
          <h3>Core Development Team</h3>
          <p className="section-desc">Building the future of virtual fitting rooms.</p><br></br>
          
          <div className="team-grid">
            {/* TEAM MEMBERS... (No changes here) */}
             <div className="team-card">
              <div className="card-img-wrapper">
                <img src={kennPic}   
                alt="Kenn Losendo" 
                className="featured-img"  />
              </div>
              <div className="card-info">
                <h4>Kenn Losendo</h4>
                <span className="card-role">Lead Programmer</span>
                <p className="card-desc">
                  Expert in 3D body scanning algorithms and real-time mesh rendering. 
                  He brings the virtual dressing room to life.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="card-img-wrapper">
                <img  src={aldrinPic}   
                alt="Aldrin Lomboy" 
                className="featured-img"  />
              </div>
              <div className="card-info">
                <h4>Aldrin Lomboy</h4>
                <span className="card-role">AI Research Specialist</span>
                <p className="card-desc">
                  Skilled in analyzing body data points to improve virtual try-on accuracy 
                  and cloth simulation physics.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="card-img-wrapper">
                <img  src={princessPic}   
                alt="Princess" 
                className="featured-img"  />
              </div>
              <div className="card-info">
                <h4>Princess</h4>
                <span className="card-role">Quality Assurance & Docs</span>
                <p className="card-desc">
                  Ensuring a bug-free experience and clear documentation for 
                  FitVision's complex 3D architecture.
                </p>
              </div>
            </div>

             <div className="team-card">
              <div className="card-img-wrapper">
                <img src={rheaPic} alt="Rhea" />
              </div>
              <div className="card-info">
                <h4>Rhea</h4>
                <span className="card-role">Quality Assurance & Docs</span>
                <p className="card-desc">
                  Ensuring a bug-free experience and clear documentation for 
                  FitVision's complex 3D architecture.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="card-img-wrapper">
                <img  src={marPic}   
                alt="Fernandez Mar Russel" 
                className="featured-img"  />
              </div>
              <div className="card-info">
                <h4>Fernandez Marr</h4>
                <span className="card-role">UI/UX Designer</span>
                <p className="card-desc">
                  Designing intuitive interfaces that make 3D scanning accessible 
                  and easy for every user.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Aboutus;