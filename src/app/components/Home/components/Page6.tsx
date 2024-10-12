import React from 'react';
import Image from 'next/image';

const Page6 = () => {
  return (
    <section className="bg-gray-900 text-white py-16 min-h-screen relative">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-6xl font-bold">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-600">Partners</span>
        </h2>
      </div>

      {/* Background image */}
      <div className="relative max-w-6xl mx-auto">
        <Image
          src="Map.png"
          alt="World map"
          className="w-[1246px] h-[629px] object-cover mb-8 opacity-80"
        />

        {/* Center the logos */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-8">
            <div className="p-10">
              <Image
                src="/mitrphol.png"
                alt="Partner 1"
                className="w-[300px] h-[150px] object-contain mx-auto"
              />
            </div>
            <div className="p-4">
              <Image
                src="/knacx.png"
                alt="Partner 2"
                className="w-[300px] h-[160px] object-contain mx-auto"
              />
            </div>
            <div className="p-4">
              <Image
                src="/clinter.png"
                alt="Partner 3"
                className="w-[300px] h-[150px] object-contain mx-auto"
              />
            </div>
            <div className="p-4">
              <Image
                src="/eqtechenergy.png"
                alt="Partner 4"
                className="w-[300px] h-[150px] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page6;
