const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-logo">
                <i className="fa-solid fa-cube"></i> FitVision
            </div>
            <p className="footer-desc">
                FitVision offers an innovative virtual try-on experience to help you visualize and discover your perfect fit.
            </p>
            <div className="footer-bottom">
                <p>© 2026 FitVision. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;