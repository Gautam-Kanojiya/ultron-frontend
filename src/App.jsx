import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransporterDashboard from './pages/TransporterDashboard';
import Home from './pages/Home'; // You can create this as a landing page
import AboutPage from './pages/aboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transporter-dashboard" element={<TransporterDashboard />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
