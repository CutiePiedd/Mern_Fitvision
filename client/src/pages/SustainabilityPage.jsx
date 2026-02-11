import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/sustainability.css';

const SustainabilityPage = () => {
  return (
    <>
      <Header />
      
      {/* --- START OF YOUR CUSTOM DESIGN --- */}
      <div className="sustain-page-wrapper">
        <div className="container-sustain">
            
            <div className="sustain-header">  {/* <--- Changed from header to div */}
                <h1>Innovate Smart. Consume Responsibly.</h1>
                <p className="header-subtitle">How FitVision advances SDG 12 and SDG 9 through digital fashion technology</p>
                
                <div className="sdg-badges">
                    <div className="sdg-badge sdg-12">
                        <span className="sdg-number">12</span>
                        <span className="sdg-label">Responsible Consumption</span>
                    </div>
                    <div className="sdg-badge sdg-9">
                        <span className="sdg-number">9</span>
                        <span className="sdg-label">Industry Innovation</span>
                    </div>
                </div>
            </div> {/* <--- Don't forget to close with div */}

            <section className="split-layout">
                <div className="text-content">
                    <h2>SDG 12: Responsible Consumption & Production</h2>
                    <p>
                        FitVision empowers smarter fashion choices that reduce waste before it can occur. By enabling virtual try-ons, FitVision helps users visualize how clothes will fit and look, leading to confident and responsible purchasing decisions and textiles.
                    </p>
                    
                    {/* --- THE MISSING BUTTON --- */}
                    <button className="btn-learn-more">
                        Learn how FitVision helps reduce waste <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                
                <div className="image-content">
                    <div className="phone-mockup">
                        <div className="phone-inner">
                             {/* You can put an <img> here later */}
                             <span style={{color: '#666'}}>App Preview</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="split-layout">
                <div className="image-content">
                    <div className="polaroid">
                        <div className="tape"></div>
                        <div className="img-placeholder" style={{height: '200px', background: '#e0e0e0'}}>
                            Woman with Boxes
                        </div>
                    </div>
                </div>
                <div className="text-content">
                    <h3>Fewer Returns</h3>
                    <p>
                        Virtual fitting gives shoppers confidence before purchase, cutting down on impulse buys and reducing the need for returns. This results in less packaging waste and lower transport emissions.
                    </p>
                </div>
            </section>

            <section className="split-layout reverse">
                <div className="image-content">
                    <div className="polaroid right-tilt">
                        <div className="tape"></div>
                        <div className="img-placeholder" style={{height: '200px', background: '#e0e0e0'}}>
                            Clothes Rack
                        </div>
                    </div>
                </div>
                <div className="text-content">
                    <h3>Smarter Purchasing</h3>
                    <p>
                        By ensuring accurate fit visualization, brands can better predict demand and minimize overproduction—preventing unsold inventory and textile waste.
                    </p>
                </div>
            </section>

            <section className="split-layout">
                <div className="image-content">
                     <div className="phone-mockup" style={{height: '400px', width: '220px'}}>
                        <div className="phone-inner" style={{background: '#ddeeff'}}>
                             <span style={{color: '#666'}}>Digital Fit</span>
                        </div>
                    </div>
                </div>
                <div className="text-content">
                    <h3>Digital Fitting</h3>
                    <p>
                        Accurate virtual try-ons reduce discarded and unused garments, leading to a reduction in textile waste and promoting sustainable fashion consumption.
                    </p>
                </div>
            </section>

            <footer className="sustain-footer-inner">
                <h2>Where Innovation Meets Responsibility</h2>
                <p>FitVision demonstrates how technological innovation (SDG 9) can directly enable responsible consumption and production (SDG 12).</p>
                
                <div className="sdg-badges" style={{marginTop: '30px'}}>
                    <div className="sdg-badge sdg-12">
                        <span className="sdg-number">12</span>
                        <span className="sdg-label">Responsible Consumption</span>
                    </div>
                    <div style={{fontSize: '2rem', color: '#ccc'}}>&#8596;</div>
                    <div className="sdg-badge sdg-9">
                        <span className="sdg-number">9</span>
                        <span className="sdg-label">Industry Innovation</span>
                    </div>
                </div>
            </footer>

        </div>
      </div>
      {/* --- END OF CUSTOM DESIGN --- */}
      
      <Footer />
    </>
  );
};

export default SustainabilityPage;