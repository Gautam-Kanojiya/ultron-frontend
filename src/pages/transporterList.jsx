import React from 'react';

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
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#0a2463] mb-8">Available Transporters</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sampleTransporters.map((t) => (
          <div key={t.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-5">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableTransporters;
