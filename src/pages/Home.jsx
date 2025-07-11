import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-blue-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Welcome to the Transport App</h1>
        <Link
          to="/transporter-dashboard"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
        >
          Go to Transporter Dashboard
        </Link>

        <br /><br />
        <Link
          to="/client-dashboard"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
        >
          Go to Client Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
