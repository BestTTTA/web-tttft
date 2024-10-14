import React from 'react';

const Page1 = () => {
  return (
    <section 
      className="py-16 px-8 bg-black" 
      style={{ 
        backgroundImage: "url('/Page11.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left content */}
        <div>
          <h2 className="text-5xl font-bold mb-20 text-white mt-10">Best feature info goes just here</h2>
          <p className="text-gray-200 mb-8">
            Lorem ipsum dolor sit amet consectetur. Dictum porta elementum quam rutrum lacus. Ullamcorper facilisi purus 
            tortor volutpat rutrum adipiscPing semper pharetra. Dignissim vitae at mauris nec quam ipsum viverra.
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 text-xl">✔️</span>
              <p className="text-gray-200">You&apos;ll be able to effortlessly build website listings</p> {/* แก้เครื่องหมาย backtick ด้วย &apos; */}
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 text-xl">✔️</span>
              <p className="text-gray-200">You&apos;ll be able to effortlessly build website listings</p> {/* แก้เครื่องหมาย backtick ด้วย &apos; */}
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 text-xl">✔️</span>
              <p className="text-gray-200">Build website and any project and with dummy lorem</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 text-xl">✔️</span>
              <p className="text-gray-200">Effortlessly build website and any project and finish</p>
            </div>
          </div>

          {/* White Box below text */}
          <div 
            className="bg-white p-6 rounded-lg shadow-lg "
            style={{
              width: '200px', 
              height: '80px'
            }}
          >
            <p className="text-black text-lg text-center">Your content here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page1;
