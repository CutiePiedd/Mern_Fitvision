import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Import your video assets
import video1 from '../assets/video/12072857_2160_3840_30fps.mp4';
// Add other videos if you have them: import video2 from '../assets/video/...'

const Hero = () => {
  // --- Typing Effect Logic ---
  const [typedText, setTypedText] = useState("");
  const textToType = "Your personalized body profile & try-on tool using advanced AI modeling. Start by creating your accurate virtual body profile and see how clothes and outfits would look on your body in realistic 3D.";
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => prev + textToType.charAt(index));
      index++;
      if (index === textToType.length) clearInterval(intervalId);
    }, 50); // Adjust speed here
    return () => clearInterval(intervalId);
  }, []);

  // --- Video Playlist Logic ---
  const videoRef = useRef(null);
  const playlist = [video1]; // Add more videos to this array: [video1, video2, video3]
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = playlist[currentVideoIndex];
      videoRef.current.play();
    }
  }, [currentVideoIndex]);


  return (
    <section className="hero">
        <div className="container">
            <div className="hero-grid">
                <div className="hero-content">
                    <h3>FitVision</h3>
                    <h1>Create Your Body Profile</h1>
                    <span className="sub-headline">Your Virtual Body Profile</span>
                    
                    <p className="hero-desc">
                        {typedText}
                    </p>

                    <Link to="/create-profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="action-card">
                            <div className="ac-left">
                                <div className="ac-icon"><i className="fa-regular fa-user"></i></div>
                                <div className="ac-text">
                                    <h4>Create Your Body Profile</h4>
                                    <p>Build your private, precise virtual body model</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </Link>

                    <div className="action-card">
                        <div className="ac-left">
                            <div className="ac-icon"><i className="fa-solid fa-shirt"></i></div>
                            <div className="ac-text">
                                <h4>Try On Clothing</h4>
                                <p>See how clothing looks on your custom body profile</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>

                    <div className="security-badges">
                        <div className="badge">
                            <i className="fa-solid fa-shield-halved"></i>
                            <div>
                                <h5>Private & Secure</h5>
                                <p>Only you can see your body profile. Your data is kept confidential and encrypted.</p>
                            </div>
                        </div>
                        <div className="badge">
                            <i className="fa-solid fa-cube"></i>
                            <div>
                                <h5>Accurate 3D Model</h5>
                                <p>Calibrated for precise body measurements to guarantee semi-realistic results.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="videos">
                    <div className="video-container">
                        <video 
                          ref={videoRef} 
                          onEnded={handleVideoEnded} 
                          autoPlay 
                          muted 
                          playsInline
                        >
                            <source src={playlist[0]} type="video/mp4" />
                        </video>
                    </div>
                </section>
            </div>
        </div>
    </section>
  );
};

export default Hero;