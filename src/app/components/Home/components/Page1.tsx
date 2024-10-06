import React from 'react';

const Page1 = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Best feature info goes just here</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Dictum porta elementum quam rutrum lacus. Ullamcorper facilisi purus 
            tortor volutpat rutrum adipiscing semper pharetra. Dignissim vitae at mauris nec quam ipsum viverra.
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 text-xl">✔️</span>
              <p className="text-gray-600">You'll be able to effortlessly build website listings</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 text-xl">✔️</span>
              <p className="text-gray-600">You'll be able to effortlessly build website listings</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 text-xl">✔️</span>
              <p className="text-gray-600">Build website and any project and with dummy lorem</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 text-xl">✔️</span>
              <p className="text-gray-600">Effortlessly build website and any project and finish</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div>
          <img 
            src="Page1.jpg" 
            alt="Feature Image"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Page1;