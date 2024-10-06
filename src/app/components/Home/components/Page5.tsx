"use client";  // บอก Next.js ว่านี่เป็น Client Component

import React, { useState } from 'react';

const Page4 = () => {
    const [selectedPortfolio, setSelectedPortfolio] = useState('ecommerce'); // กำหนด default

    return (
        <section className="py-16 px-6 bg-black text-white min-h-screen">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-6xl font-bold mb-8 text-center">
                    Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-700">Portfolio</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left side - navigation */}
                    <div>
                        <ul className="space-y-4 text-gray-400 text-xl">
                            <li className="text-pink-500 cursor-pointer" onClick={() => setSelectedPortfolio('ecommerce')}>
                                Ecommerce Websites <span className="ml-2 text-pink-500">→</span>
                            </li>
                            <li className="text-pink-500 cursor-pointer" onClick={() => setSelectedPortfolio('machine-learning')}>
                                Machine Learning <span className="ml-2 text-pink-500">→</span>
                            </li>
                            <li className="text-pink-500 cursor-pointer" onClick={() => setSelectedPortfolio('frontend')}>
                                Front-End Developer <span className="ml-2 text-pink-500">→</span>
                            </li>
                            <li className="text-pink-500 cursor-pointer" onClick={() => setSelectedPortfolio('infrastructure')}>
                                Infrastructure <span className="ml-2 text-pink-500">→</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right side - images */}
                    <div className="lg:col-span-2 relative">
                        {selectedPortfolio === 'ecommerce' && (
                            <>
                                <div className="w-[200px] h-[350px] bg-gray-300 rounded-lg absolute left-0 top-10">
                                    <img
                                        src="/Rectangle 4149.png"
                                        alt="Portfolio Image 1"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-[250px] h-[400px] bg-gray-300 rounded-lg absolute left-20 top-0 z-10">
                                    <img
                                        src="/Rectangle 4148.png"
                                        alt="Portfolio Image 2"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </>
                        )}
                        {selectedPortfolio === 'machine-learning' && (
                            <>
                                <div className="w-[200px] h-[350px] bg-gray-300 rounded-lg absolute left-0 top-10">
                                    <img
                                        src="/mnt/data/Screenshot-ML.png"
                                        alt="Machine Learning Portfolio"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-[250px] h-[400px] bg-gray-300 rounded-lg absolute left-20 top-0 z-10">
                                    <img
                                        src="/mnt/data/Screenshot-ML2.png"
                                        alt="Machine Learning Portfolio 2"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </>
                        )}
                        {selectedPortfolio === 'frontend' && (
                            <>
                                <div className="w-[200px] h-[350px] bg-gray-300 rounded-lg absolute left-0 top-10">
                                    <img
                                        src="/mnt/data/Screenshot-Frontend.png"
                                        alt="Frontend Developer Portfolio"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-[250px] h-[400px] bg-gray-300 rounded-lg absolute left-20 top-0 z-10">
                                    <img
                                        src="/mnt/data/Screenshot-Frontend2.png"
                                        alt="Frontend Developer Portfolio 2"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </>
                        )}
                        {selectedPortfolio === 'infrastructure' && (
                            <>
                                <div className="w-[200px] h-[350px] bg-gray-300 rounded-lg absolute left-0 top-10">
                                    <img
                                        src="/mnt/data/Screenshot-Infrastructure.png"
                                        alt="Infrastructure Portfolio"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-[250px] h-[400px] bg-gray-300 rounded-lg absolute left-20 top-0 z-10">
                                    <img
                                        src="/mnt/data/Screenshot-Infrastructure2.png"
                                        alt="Infrastructure Portfolio 2"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page4;