import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="container">
            <nav>
                <div className="logo">
                    <i className="fa-solid fa-cube"></i> FitVision
                </div>
                
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About</Link>
                    <Link to="/contact">Contact</Link>
                    
                    {/* The Sign Up Button */}
                    <Link to="/signup" className="btn-login">
                        Sign Up
                    </Link>
                </div> {/* <--- This closing div was likely missing! */}
                
            </nav>
        </div>
    </header>
  );
};

export default Header;