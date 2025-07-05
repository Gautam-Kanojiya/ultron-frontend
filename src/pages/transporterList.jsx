import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const sampleTransporters = [
  {
    id: 1,
    companyName: 'Swift Logistics',
    transporterName: 'Ankit Sharma',
    description: 'Efficient and on-time delivery with coverage across major Indian cities.',
    rating: 4.5,
    pdfLink: '#',
    deliveryETA: '3-5 days',
    costEstimate: '₹12,000',
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    companyName: 'CargoXpress',
    transporterName: 'Nikhil Verma',
    description: 'Specialists in heavy goods transport with advanced tracking.',
    rating: 4.2,
    pdfLink: '#',
    deliveryETA: '2-4 days',
    costEstimate: '₹15,500',
    image: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    companyName: 'FreightLink',
    transporterName: 'Riya Sen',
    description: 'Reliable cross-state logistics with real-time updates.',
    rating: 4.7,
    pdfLink: '#',
    deliveryETA: '4-6 days',
    costEstimate: '₹10,500',
    image: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: 4,
    companyName: 'TrackTrans',
    transporterName: 'Saurabh Yadav',
    description: 'Punctual services, especially optimized for perishable items.',
    rating: 4.3,
    pdfLink: '#',
    deliveryETA: '1-3 days',
    costEstimate: '₹8,000',
    image: 'https://i.pravatar.cc/150?img=4'
  },
  {
    id: 5,
    companyName: 'RoadRunner Express',
    transporterName: 'Divya Mehta',
    description: 'Dedicated logistics team with high customer satisfaction.',
    rating: 4.6,
    pdfLink: '#',
    deliveryETA: '3-5 days',
    costEstimate: '₹11,200',
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 6,
    companyName: 'TransEdge',
    transporterName: 'Vikram Joshi',
    description: 'Low-cost, high-efficiency courier for small and medium parcels.',
    rating: 4.1,
    pdfLink: '#',
    deliveryETA: '2-3 days',
    costEstimate: '₹9,300',
    image: 'https://i.pravatar.cc/150?img=6'
  },
  {
    id: 7,
    companyName: 'SafeHaul',
    transporterName: 'Pooja Sinha',
    description: 'Expert in safety-first transport solutions with insurance options.',
    rating: 4.8,
    pdfLink: '#',
    deliveryETA: '4-7 days',
    costEstimate: '₹13,000',
    image: 'https://i.pravatar.cc/150?img=7'
  },
  {
    id: 8,
    companyName: 'QuickLogix',
    transporterName: 'Ramesh Patel',
    description: 'Fast and responsive with customized logistics packages.',
    rating: 4.0,
    pdfLink: '#',
    deliveryETA: '2-3 days',
    costEstimate: '₹10,800',
    image: 'https://i.pravatar.cc/150?img=8'
  },
  {
    id: 9,
    companyName: 'SmartFreight',
    transporterName: 'Shalini Ghosh',
    description: 'AI-powered shipment tracking with daily updates.',
    rating: 4.4,
    pdfLink: '#',
    deliveryETA: '5-7 days',
    costEstimate: '₹14,600',
    image: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: 10,
    companyName: 'MoveItNow',
    transporterName: 'Aman Kapoor',
    description: 'Nationwide delivery network with great customer service.',
    rating: 4.9,
    pdfLink: '#',
    deliveryETA: '3-6 days',
    costEstimate: '₹9,800',
    image: 'https://i.pravatar.cc/150?img=10'
  }
];

const AvailableTransporters = () => {
  const [activeTab, setActiveTab] = useState('dedicated');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const filteredTransporters = sampleTransporters.filter(t => {
    const matchesSearch =
      t.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.transporterName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === 'rating'
        ? t.rating >= 4.5
        : filter === 'cost'
        ? parseFloat(t.costEstimate.replace(/[^0-9.-]+/g, '')) < 5000
        : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 bg-gradient-to-br from-zinc-50 via-sky-100 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0a2463] mb-6">Available Transporters</h1>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-white/80 rounded-xl px-4 py-3 shadow mb-6">
          <div className="flex gap-4 mb-3 sm:mb-0">
            <button
              onClick={() => setActiveTab('dedicated')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm ${activeTab === 'dedicated' ? 'bg-[#d8315b] text-white' : 'bg-zinc-100 text-gray-600 hover:bg-zinc-200'}`}
            >
              <Truck size={16} /> Dedicated
            </button>
            <button
              onClick={() => setActiveTab('container')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm ${activeTab === 'container' ? 'bg-[#0a2463] text-white' : 'bg-zinc-100 text-gray-600 hover:bg-zinc-200'}`}
            >
              <Boxes size={16} /> Containerization
            </button>
          </div>

          {/* Search and Filter */}
          {activeTab === 'dedicated' && (
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search by name or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-full px-4 py-1.5 text-sm border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#d8315b]"
              />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="rounded-full px-4 py-1.5 text-sm border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] bg-white"
              >
                <option value="">All</option>
                <option value="rating">Top Rated</option>
                <option value="cost">Lowest Cost</option>
              </select>
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'dedicated' ? (
            <motion.div
              key="dedicated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredTransporters.map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 80 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-5 border border-zinc-200"
                >
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt="Company Logo" className="w-14 h-14 rounded-full" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#0a2463]">{t.companyName}</h2>
                      <p className="text-sm text-gray-500">{t.transporterName}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-2">{t.description}</p>
                  <div className="text-sm space-y-1">
                    <p><strong>Rating:</strong> ⭐ {t.rating}</p>
                    <p><strong>ETA:</strong> {t.deliveryETA}</p>
                    <p><strong>Estimated Cost:</strong> {t.costEstimate}</p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <a href={t.pdfLink} className="text-blue-500 underline text-sm hover:text-blue-700">View Quote</a>
                    <button className="bg-[#d8315b] hover:bg-[#b12042] text-white px-4 py-1 rounded-full text-sm font-medium">Book Now</button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center text-gray-500 mt-24 text-xl font-medium"
            >
              🚧 Containerization module is coming soon.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AvailableTransporters;

