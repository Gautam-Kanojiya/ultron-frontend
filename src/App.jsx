import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransporterDashboard from './pages/TransporterDashboard';

import Home from './pages/Home'; // You can create this as a landing page
import CarrierRegistration from './pages/signup/CarrierRegistration'; 
import ShipperRegistration from './pages/signup/ShipperRegistration'; 
import Shipments from './pages/dashboard/Shipments'; // Assuming you have this component
import Consignment from './pages/dashboard/consignment'; // Assuming you have this component
// import AboutPage from './pages/aboutUs';
// import CareersPage from './pages/Join_us';
import ClientDashboard from './pages/ClientDashboard';
import AvailableTransporters from './pages/AvailableTransporters'; // Assuming you have this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transporter-dashboard" element={<TransporterDashboard />} />
        <Route path="/carrier-registration" element={<CarrierRegistration />} />
        <Route path="/shipper-registration" element={<ShipperRegistration />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/consignment" element={<Consignment />} />
        {/* Add more routes as needed */}
        {/* <Route path="/about-us" element={<AboutPage />} /> */}
        {/* <Route path="/careers" element={<CareersPage />} /> */}
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/available-transporter" element={<AvailableTransporters />} />
      </Routes>
    </Router>
  );
}

export default App;
