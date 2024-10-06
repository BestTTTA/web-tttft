import React from 'react';

const Page4 = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center">
        {/* Text section */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">
            Best <span className="text-teal-400">feature</span> info goes just here
          </h2>
          <p className="text-gray-400">
            -
         </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="bg-teal-400 text-white rounded-full p-2">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
              </span>
              <span>-</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-teal-400 text-white rounded-full p-2">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
              </span>
              <span>-</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-teal-400 text-white rounded-full p-2">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
              </span>
              <span>-</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-teal-400 text-white rounded-full p-2">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
              </span>
              <span>-</span>
            </li>
          </ul>
        </div>

        {/* Image section */}
        <div className="relative">
          <img
            src="/image1.png"
            alt="Feature illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Page4;
