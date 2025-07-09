import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransporterDashboard from './pages/TransporterDashboard';
import Home from './pages/Home'; // You can create this as a landing page
// import AboutPage from './pages/aboutUs';

import Consignment from './pages/Consignment'; // Assuming you have a Consignment page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transporter-dashboard" element={<TransporterDashboard />} />
    
        <Route path="/consignment" element={<Consignment />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
