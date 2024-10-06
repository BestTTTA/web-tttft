import React from 'react';

const servicesData = [
  { title: 'Infrastructure', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Cloud Migration', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Cloud Security', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Machine Learning', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Web Developer', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Mobile Application Developer', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'DevOps', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Flutter Developer', description: 'Lorem ipsum dolor sit amet consectetur.' },
];

const Home = () => {
  return (
    <section className="py-10 px-5">
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

export default Home;