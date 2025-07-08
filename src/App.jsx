import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransporterDashboard from './pages/TransporterDashboard';
import Home from './pages/Home'; // You can create this as a landing page
import ShipmentRegistration from './pages/ShipmentRegistration';
// import AboutPage from './pages/aboutUs';
// import CareersPage from './pages/Join_us';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transporter-dashboard" element={<TransporterDashboard />} />
        <Route path="/shipment-registration" element={<ShipmentRegistration />} />
        {/* <Route path="/about-us" element={<AboutPage />} /> */}
        {/* <Route path="/careers" element={<CareersPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
