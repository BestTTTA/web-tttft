import React from 'react';

const Page5 = () => {
  return (
    <section className="bg-gray-900 text-white py-16 min-h-screen">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-600">Partners</span>
        </h2>
      </div>

      {/* Partners logos */}
      <div className="relative max-w-6xl mx-auto">
        <img
          src="Map.png"
          alt="World map"
          className="w-[1246px] h-[629px] object-cover mb-8 opacity-80"
        />

        {/* Add 4 partner images below the map */}
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <img
              src="/mitrphol.png"
              alt="Partner 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img
              src="/knacx.png"
              alt="Partner 2"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img
              src="/knacx.png"
              alt="Partner 3"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img
              src="/eqtechenergy.png"
              alt="Partner 4"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page5;
