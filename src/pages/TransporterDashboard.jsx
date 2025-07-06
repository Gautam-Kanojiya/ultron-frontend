import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TransporterDashboard() {
  const transporterData = {
    companyName: 'FastMove Logistics Pvt Ltd',
    companyAddress: 'Plot 23, Industrial Area, Sector 88, Noida, UP - 201301',
    companyEmail: 'support@fastmovelogistics.com',
    customerServiceNumber: '+91 9876543210',
    gstNumber: '29ABCDE1234F2Z5',
    cinNumber: 'U63090DL2021PTC123456',
    ownerName: 'Ravi Mehta',
    ownerContact: '+91 9811122233',
    fleetCount: 54,
    serviceArea: 'All India',
    pincode: '201301',
    about:
      'We are a leading logistics company providing all-India service with a modern fleet and a focus on reliable delivery.',
    image: '', // Empty string will fallback to default avatar
  };

  const fallbackImage = 'https://www.w3schools.com/howto/img_avatar.png';
  const profileImage = transporterData.image || fallbackImage;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-6 sm:p-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
            <div className="text-3xl font-bold text-gray-800">Transporter Profile</div>
            <div>

                <button className="border-2 border-blue-600 text-black-700 font-semibold px-6 py-2 rounded-lg shadow-sm hover:shadow-lg hover:text-blue-700 hover:bg-blue-50 transform  transition-all duration-200">
                    Consignments
                </button>
                <button className="border-2 border-blue-600 text-black-700 font-semibold px-6 py-2 ml-4 rounded-lg shadow-sm hover:shadow-lg hover:text-blue-700 hover:bg-blue-50 transform  transition-all duration-200" onClick={()=> navigate('/shipments')}>
                    Shipment History
                </button>
            </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Profile Sidebar */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={profileImage}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 shadow"
            />
            <button className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-md hover:bg-gray-300 transition">
              Upload Photo
            </button>
          </div>

          {/* Profile Info */}
          <div className="md:col-span-2">
                <div className="text-3xl sm:text-4xl font-bold text-black-700 mb-2">
                    {transporterData.companyName}
                </div>
                <div>
                    <div className="text-md font-semibold text-gray-700">
                        {transporterData.companyAddress}
                    </div>
                    <div className="text-md font-semibold text-gray-700">
                        GST Number: {transporterData.gstNumber}
                    </div>
                    <div className="text-md font-semibold text-gray-700 mb-1">
                        CIN Number{transporterData.cinNumber || 'N/A'}
                    </div>
                    <div className="col-span-1 md:col-span-2"> 
                    <div className="bg-gray-50  text-gray-800">
                        {transporterData.about}
                    </div>
                    </div>

                </div>

            </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base">
            
            
            <Display label="Email ID" value={transporterData.companyEmail} />
            <Display label="Customer Service Number" value={transporterData.customerServiceNumber} />
            <Display label="Owner Name" value={transporterData.ownerName} />
            <Display label="Owner Contact" value={transporterData.ownerContact} />
            <Display label="Fleet Count" value={transporterData.fleetCount} />
            <Display label="Service Area" value={transporterData.serviceArea} />
            
          </div>
        </div>
        <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Edit Profile
            </button>
        </div>
      </div>
    </div>
  );
}

const Display = ({ label, value }) => (
  <div>
    <h3 className="text-gray-700 font-medium mb-1">{label}</h3>
    <div className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-gray-900">
      {value}
    </div>
  </div>
);
