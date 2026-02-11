import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css"; 

const SignUp = () => {
  return (
    <div className="signup-page">
      
      {/* LEFT SIDE */}
      <div className="signup-visual">
        <div className="glass-card">
          <div className="stats-row">
            <div className="stat-item">
              <h3>54,796</h3>
              <p>Happy Members</p>
            </div>
            <div className="stat-item">
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
          </div>
          <p className="testimonial-quote">
            “ They're supportive, motivating, and have helped me stay consistent. 
            Love the progress I've made! ”
          </p>
          <div className="user-profile">
            <img src="https://i.pravatar.cc/150?img=11" alt="User" className="avatar"/>
            <div>
              <strong>Jason M.</strong>
              <div style={{ fontSize: '12px', color: '#666' }}>FitVision Member</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="signup-form-section">
        
        <div className="brand-header">
           <i className="fa-solid fa-cube" style={{ color: '#3b82f6' }}></i>
           <span>fitvision</span>
        </div>

        <h2 className="form-title">Create Your Account</h2>
        <p className="form-subtitle">Let's create & achieve your fitness goals</p>

        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name here..." className="form-input" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" className="form-input" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" className="form-input" />
          </div>

          <p className="terms-text">
            By creating an account, you agree to our <a href="#" className="link">Privacy Policy</a>
          </p>

          <button type="button" className="btn-primary">
            Sign Up
          </button>

          <div className="form-footer">
            <label style={{ display: 'flex', gap: '8px', cursor: 'pointer', alignItems: 'center' }}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="link">Forgot Password?</a>
          </div>
        </form>

        <div className="divider">
            <span>Or Sign in with</span>
        </div>

        <button className="btn-google">
             {/* Simple Google G Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Sign in with Google
        </button>

        <p className="signin-link">
            Already have an account? <Link to="/signin" className="link">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;