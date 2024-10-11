import React from "react";

const Page3 = () => {
  return (
    <section className="py-16 px-7 bg-black">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold mb-4"
          style={{
            background:
              "linear-gradient(to right, #cccccc 50%, #fbbf24, #ea580c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Made for everyone
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Card */}
        <div className="bg-white shadow-lg rounded-lg text-center relative">
          {/* Image */}
          <div className="w-full mb-8 relative">
            <img
              src="Page3.1.jpg"
              alt="For IT companies"
              className="w-full h-full object-cover rounded-md"
            />
            {/* Briefcase Icon overlapping the image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <img src="figure.jpg" alt="Briefcase Icon" className="w-8 h-8" />
            </div>
          </div>
          {/* Title */}
          <h3 className="text-lg font-semibold mb-3">For IT companies</h3>
          {/* Description */}
          <p className="text-gray-600 mb-20">
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt labore et dolore magna aliqua.
          </p>
          {/* Button */}
          <button
            className="text-white py-2 px-5 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #0079ff, #001F54)",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              position: "absolute", 
              left: "50%", 
              transform: "translate(-50%, 50%)", 
              top: "93%", 
            }}
          >
            Read More
          </button>
        </div>

        {/* Second Card */}
        <div className="bg-white shadow-lg rounded-lg text-center relative">
          {/* Image */}
          <div className="w-full mb-8 relative">
            <img
              src="Page3.2.jpg"
              alt="For Startups"
              className="w-full h-full object-cover rounded-md"
            />
            {/* Briefcase Icon overlapping the image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <img src="figure1.jpg" alt="Briefcase Icon" className="w-8 h-8" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-3">For Startups</h3>

          {/* Description */}
          <p className="text-gray-600 mb-20">
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt labore et dolore magna aliqua.
          </p>

          {/* Button */}
          <button
            className="text-white py-2 px-5 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #0079ff, #001F54)",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              position: "absolute", 
              left: "50%", 
              transform: "translate(-50%, 50%)", 
              top: "93%", 
            }}
          >
            Read More
          </button>
        </div>

        {/* Third Card */}
        <div className="bg-white shadow-lg rounded-lg text-center relative">
          {/* Image */}
          <div className="w-full mb-8 relative">
            <img
              src="Page3.3.jpg"
              alt="Partners"
              className="w-full h-full object-cover rounded-md"
            />
            {/* Briefcase Icon overlapping the image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <img src="figur2.jpg" alt="Briefcase Icon" className="w-8 h-8" />
            </div>
          </div>
          {/* Title */}
          <h3 className="text-lg font-semibold mb-3">Partners</h3>
          {/* Description */}
          <p className="text-gray-600 mb-20">
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt labore et dolore magna aliqua.
          </p>
          {/* Button */}
          <button
            className="text-white py-2 px-5 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #0079ff, #001F54)",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              position: "absolute", 
              left: "50%", 
              transform: "translate(-50%, 50%)", 
              top: "93%", 
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page3;
