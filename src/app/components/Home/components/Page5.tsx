"use client";

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
                                Ecommerce Websites <span className="ml-2 text-pink-500"></span>
                            </li>
                            <li className="text-pink-500 cursor-pointer" onClick={() => setSelectedPortfolio('machine-learning')}>
                                Machine Learning <span className="ml-2 text-pink-500"></span>
                            </li>
                            <li className="text-pink-500 cursor-pointer" onClick={() => setSelectedPortfolio('frontend')}>
                                Front-End Developer <span className="ml-2 text-pink-500"></span>
                            </li>
                            <li className="text-pink-500 cursor-pointer" onClick={() => setSelectedPortfolio('infrastructure')}>
                                Infrastructure <span className="ml-2 text-pink-500"></span>
                            </li>
                        </ul>
                    </div>

                    {/* Right side - images */}
                    <div className="lg:col-span-2 relative">
                        {selectedPortfolio === 'ecommerce' && (
                            <>
                                <div className="w-[200px] h-[350px] bg-gray-300 rounded-lg absolute left-0 top-10">
                                    <img
                                        src="https://i0.wp.com/www.magetop.com/blog/wp-content/uploads/2019/12/Top-10-eCommerce-Websites.png?fit=740%2C430&ssl=1"
                                        alt="Portfolio Image 1"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-[250px] h-[400px] bg-gray-300 rounded-lg absolute left-20 top-0 z-10">
                                    <img
                                        src="https://www.cloudways.com/blog/wp-content/uploads/Top-Ecommerce-Websites.jpg"
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
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbu3S0FCHwLzWBVC3cE4dsSi4MAooGBE1fmA&s"
                                        alt="Machine Learning Portfolio"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-[250px] h-[400px] bg-gray-300 rounded-lg absolute left-20 top-0 z-10">
                                    <img
                                        src="https://awareth.aware-cdn.net/wp-content/uploads/2018/03/MachineLearning_01_Header.jpg"
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
                                        src="https://miro.medium.com/v2/resize:fit:1192/1*jXusXvCfxECPU_Jh9S_E3w.jpeg"
                                        alt="Frontend Developer Portfolio"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-[250px] h-[400px] bg-gray-300 rounded-lg absolute left-20 top-0 z-10">
                                    <img
                                        src="https://cdn.educba.com/academy/wp-content/uploads/2019/09/What-is-Front-End-Developer.png"
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
                                        src="https://personet.co.th/wp-content/uploads/2022/08/image2.png"
                                        alt="Infrastructure Portfolio"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-[250px] h-[400px] bg-gray-300 rounded-lg absolute left-20 top-0 z-10">
                                    <img
                                        src="https://www.readyidc.com/wp-content/uploads/2021/12/1-100.jpg"
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
