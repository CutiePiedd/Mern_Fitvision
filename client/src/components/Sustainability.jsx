import React from 'react';
// You will need to make sure this image exists in your assets folder
// Based on your previous HTML, it might be named something else, 
// so rename your file or update this import line.
import sustainImage from '../assets/images/image 53.png'; // Placeholder: Replace with your actual phone/recycle image
import { Link } from 'react-router-dom'; // <--- Add this line

const Sustainability = () => {
  return (
    <section className="sustain-section">
      <div className="container">
        <div className="sustain-card">
          
          {/* Left Side: Image */}
          <div className="sustain-img">
            <img src={sustainImage} alt="Sustainability Mockup" />
          </div>

          {/* Right Side: Content */}
          <div className="sustain-content">
            <h2>Style Master, Waste Less.</h2>
            <h4>How FitVision supports SDG 12: Responsible Consumption & Production</h4>
            
            <div style={{ background: '#fff', padding: '0', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
                    Reducing Fashion Waste Starts Before You Buy
                </h3>
                <p className="desc-text">
                    FitVision will help you make better purchasing decisions by visualizing how clothes fit before checkout. 
                    By using virtual fitting technology, FitVision reduces unnecessary returns, minimizes textile waste 
                    and supports more responsible fashion consumption—directly aligning with Sustainable Development Goal 12.
                </p>

                <ul className="benefit-list">
                    <li className="benefit-item">
                        <div className="benefit-icon"><i className="fa-solid fa-box-open"></i></div>
                        <div>
                            <strong>Fewer returns =</strong> <span>less packaging & transport emissions</span>
                        </div>
                    </li>
                    <li className="benefit-item">
                        <div className="benefit-icon"><i className="fa-solid fa-bag-shopping"></i></div>
                        <div>
                            <strong>Smarter buying =</strong> <span>reduced overproduction</span>
                        </div>
                    </li>
                    <li className="benefit-item">
                        <div className="benefit-icon"><i className="fa-solid fa-shirt"></i></div>
                        <div>
                            <strong>Digital Fitting =</strong> <span>lower clothing waste</span>
                        </div>
                    </li>
                </ul>

               <Link to="/sustainability" className="btn-sustain-cta">
    Learn how FitVision will help reduce waste
    <i className="fa-solid fa-arrow-right-long"></i>
</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sustainability;