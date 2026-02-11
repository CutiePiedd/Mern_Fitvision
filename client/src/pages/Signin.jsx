import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signin.css"; // Make sure to import the new CSS

const SignIn = () => {
  return (
    <div className="signin-page">
      
      {/* --- LEFT SIDE: Form Section --- */}
      <div className="signin-form-section">
        <div className="brand-header">
           <i className="fa-solid fa-cube" style={{ color: '#3b82f6' }}></i>
           <span>fitvision</span>
        </div>

        <h2 className="form-title">Welcome Back</h2>
        <p className="form-subtitle">Please enter your details to sign in.</p>

        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" className="form-input" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" className="form-input" />
          </div>

          <Link to="/forgot-password" class="forgot-password">
            Forgot Password?
          </Link>

          <button className="btn-primary">Sign In</button>

          <div className="divider">
            <span>Or sign in with</span>
          </div>

          <button className="btn-google">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>

          <p className="signup-link">
            Don't have an account? <Link to="/signup" className="link">Sign Up</Link>
          </p>
        </form>
      </div>

      {/* --- RIGHT SIDE: Visual/Image Section --- */}
      <div className="signin-visual">
        <div className="glass-card">
          <div style={{ marginBottom: '15px' }}>
             {/* You can replace this SVG with an actual Illustration or Image */}
             <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
             </svg>
          </div>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '22px', color: '#1f2937' }}>Welcome Back!</h3>
          <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.5' }}>
            "Consistency is the key to progress. Log in to track your workouts and keep the momentum going!"
          </p>
        </div>
      </div>

    </div>
  );
};

export default SignIn;