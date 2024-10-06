import React from 'react';

const Page3 = () => {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Made for everyone</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          นี่คือข้อความที่สาธิตเกี่ยวกับการอธิบายผลิตภัณฑ์หรือบริการที่จะนำเสนอในเว็บไซต์ของคุณ
          ให้เหมาะสมกับผู้ใช้ทุกคน
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* First Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094" 
            alt="For IT companies" 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">For IT companies</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Read More</button>
        </div>

        {/* Second Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853" 
            alt="For Startups" 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">For Startups</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Read More</button>
        </div>

        {/* Third Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a" 
            alt="Partners" 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Partners</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Page3;
