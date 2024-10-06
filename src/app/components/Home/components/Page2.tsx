import React from 'react';

const servicesData = [
  { title: 'Infrastructure', description: 'Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.' },
  { title: 'Cloud Migration', description: 'Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.' },
  { title: 'Cloud Security', description: 'Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.' },
  { title: 'Machine Learning', description: 'Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.' },
  { title: 'Web Developer', description: 'Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.' },
  { title: 'Mobile Application Developer', description: 'Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.' },
  { title: 'DevOps', description: 'Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.' },
  { title: 'Flutter Developer', description: 'Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.' },
];

const Page2 = () => {
  return (
    <section 
    className="py-10 px-5"
    style={{
      backgroundImage: "url('/path-to-your-image.jpg')",
      backgroundSize: "cover",
    }}
    >
      <h2 className="text-3xl text-center font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-blue-100 rounded-lg p-5 shadow hover:shadow-lg transition">
            <div className="bg-blue-600 w-12 h-12 mb-3 rounded-lg"></div>
            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page2;