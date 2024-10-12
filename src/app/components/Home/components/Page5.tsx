"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import Image from "next/image";

const Page5 = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("ecommerce");

  return (
    <section className="py-1 px-6 bg-black text-white min-h-screen relative">
      <div className="relative h-screen flex flex-col justify-center items-center">
        <Image
          src="Combined Shape.png"
          alt="relative h-30 w-30"
          className="absolute bottom-0 right-0 h-[370px] w-[250px] object-right"
        />
        <div className="absolute top-0 left-[-20px] w-[400px] h-full z-0">
          <Image
            src="Ornaments.png"
            alt="Background Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-40 mt-[-20px]">
          <h1 className="text-6xl font-bold">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-600">
              Portfolio
            </span>
          </h1>
        </div>

        <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-8 justify-center items-center">
          {/* Left side - Portfolio category navigation */}
          <div className="relative z-10 col-span-1 h-full flex flex-col justify-center items-start mr-30 mt-[-450px] ml-[-200px]"> {/* เพิ่ม ml-[-50px] เพื่อขยับไปทางซ้าย */}
            <ul className="space-y-4 text-gray-400 text-[40px] text-left"> {/* ขยับข้อความไปทางซ้ายด้วย text-left */}
              <li
                className={`cursor-pointer ${
                  selectedPortfolio === "ecommerce" ? "text-pink-500" : "text-white"
                } flex items-center`}
                onClick={() => setSelectedPortfolio("ecommerce")}
              >
                Ecommerce Websites
                {selectedPortfolio === "ecommerce" && (
                  <FaArrowRight
                    className="ml-4 text-pink-500 text-lg"
                    style={{ transform: "scaleX(2)" }}
                  />
                )}
              </li>
              <li
                className={`cursor-pointer ${
                  selectedPortfolio === "machine-learning" ? "text-pink-500" : "text-white"
                } flex items-center`}
                onClick={() => setSelectedPortfolio("machine-learning")}
              >
                Machine Learning
                {selectedPortfolio === "machine-learning" && (
                  <FaArrowRight
                    className="ml-4 text-pink-500 text-lg"
                    style={{ transform: "scaleX(2)" }}
                  />
                )}
              </li>
              <li
                className={`cursor-pointer ${
                  selectedPortfolio === "frontend" ? "text-pink-500" : "text-white"
                } flex items-center`}
                onClick={() => setSelectedPortfolio("frontend")}
              >
                Front-End Developer
                {selectedPortfolio === "frontend" && (
                  <FaArrowRight
                    className="ml-4 text-pink-500 text-lg"
                    style={{ transform: "scaleX(2)" }}
                  />
                )}
              </li>
              <li
                className={`cursor-pointer ${
                  selectedPortfolio === "infrastructure" ? "text-pink-500" : "text-white"
                } flex items-center`}
                onClick={() => setSelectedPortfolio("infrastructure")}
              >
                Infrastructure
                {selectedPortfolio === "infrastructure" && (
                  <FaArrowRight
                    className="ml-4 text-pink-500 text-lg"
                    style={{ transform: "scaleX(2)" }}
                  />
                )}
              </li>
            </ul>
          </div>

          {/* Right side - Swiper slider */}
          <div className="col-span-2">
            <Swiper
              spaceBetween={335} // Adjust the space between images
              slidesPerView={3} // Display 3 images at a time
              centeredSlides={true}
              className="w-full h-[500px]"
            >
              {selectedPortfolio === "ecommerce" && (
                <>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="Rectangle 4149.png"
                        alt="Ecommerce Portfolio Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="Rectangle 4148.png"
                        alt="Ecommerce Portfolio Image 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="Rectangle 7.png"
                        alt="Ecommerce Portfolio Image 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="cat.png"
                        alt="Ecommerce Portfolio Image 4"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                </>
              )}

              {selectedPortfolio === "machine-learning" && (
                <>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="m1.png"
                        alt="Machine Learning Portfolio Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="m2.png"
                        alt="Machine Learning Portfolio Image 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="m3.png"
                        alt="Machine Learning Portfolio Image 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="m4.png"
                        alt="Machine Learning Portfolio Image 4"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                </>
              )}

              {selectedPortfolio === "frontend" && (
                <>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="p1.png"
                        alt="Frontend Portfolio Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="p2.png"
                        alt="Frontend Portfolio Image 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="p3.png"
                        alt="Frontend Portfolio Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="p4.png"
                        alt="Frontend Portfolio Image 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                </>
              )}

              {selectedPortfolio === "infrastructure" && (
                <>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="n1.png"
                        alt="Infrastructure Portfolio Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="n2.png"
                        alt="Infrastructure Portfolio Image 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="n3.png"
                        alt="Infrastructure Portfolio Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shadow-lg transform hover:w-[300px] hover:h-[500px] transition-all duration-300">
                      <Image
                        src="n4.png"
                        alt="Infrastructure Portfolio Image 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                </>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page5;
