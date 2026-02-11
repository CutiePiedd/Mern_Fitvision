import { Link } from 'react-router-dom';
// Import images
import imgStep1 from '../assets/images/image 53.png';
import imgStep2 from '../assets/images/image 58.png';
import imgStep3 from '../assets/images/image 59.png';

const Steps = () => {
  return (
    <section className="steps-section">
        <div className="container">
            <h2 className="section-title">Try On Outfits Virtually – 3 Easy Steps</h2>
            <p className="section-subtitle">How to use FitVision's virtual try-on feature</p>

            <div className="steps-grid">
                {/* Step 1 */}
                <div className="step-card">
                    <div className="step-number">1</div>
                    <h3>Create Your Body Profile</h3>
                    <p style={{marginTop:0, marginBottom:'20px'}}>Create your precise 3D body profile for accurate virtual try-ons.</p>
                    <div className="mockup-container">
                        <img src={imgStep1} alt="Phone UI" />
                    </div>
                    
                    <Link to="/create-profile" style={{ textDecoration: 'none' }}>
                        <button className="btn-step" style={{cursor: 'pointer'}}>
                            <i className="fa-solid fa-cube"></i> Create Body Profile
                        </button>
                    </Link>
                </div>

                {/* Step 2 */}
                <div className="step-card">
                    <div className="step-number">2</div>
                    <h3>Select Clothing To Try On</h3>
                    <p style={{marginTop:0, marginBottom:'20px'}}>Browse and pick clothing from our collection to try on virtually.</p>
                    <div className="mockup-container">
                        <img src={imgStep2} alt="Clothing Selection" />
                    </div>
                    <button className="btn-step"><i className="fa-solid fa-shirt"></i> Browse Fits</button>
                    <p>Browse and pick clothing from our collection to try on virtually.</p>
                </div>

                {/* Step 3 */}
                <div className="step-card">
                    <div className="step-number">3</div>
                    <h3>See Your Virtual Look</h3>
                    <p style={{marginTop:0, marginBottom:'20px'}}>View the virtual try-on results in seconds. Share or save your new look.</p>
                    <div className="mockup-container">
                        <img src={imgStep3} alt="Virtual Look" />
                    </div>
                    <button className="btn-step"><i className="fa-solid fa-share-nodes"></i> Share or Save Your Look</button>
                    <p>View the virtual try-on results in seconds. Share or save your new look.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Steps;