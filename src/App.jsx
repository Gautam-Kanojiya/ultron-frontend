import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransporterDashboard from './pages/TransporterProfile';
import Home from './pages/Home'; // You can create this as a landing page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transporter-dashboard" element={<TransporterDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
