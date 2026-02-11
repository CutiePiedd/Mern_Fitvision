import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import SustainabilityPage from './pages/SustainabilityPage';
import SignUp from './pages/SignUp'; // <--- Import the new page
import SignIn from "./pages/Signin"; // <--- IMPORT SIGN IN

function App() {
  return (
    <Router>
      <Routes>
        {/* When URL is "/", show Home (which includes your Header) */}
        <Route path="/" element={<Home />} />
        
        <Route path="/sustainability" element={<SustainabilityPage />} />

        {/* When URL is "/signup", show SignUp (Header will disappear, which is correct for this design) */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;