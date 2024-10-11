"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Page5 = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("ecommerce");

  return (
    <section className="py-1 px-0 bg-black text-white min-h-screen relative">
      <div className="relative h-screen flex flex-col justify-center items-center">
        <img
          src="Combined Shape.png"
          alt="relative h-30 w-30"
          className="absolute bottom-0 right-0 h-[370px] w-[250px] object-right"
        />
        <div className="absolute top-0 left-[-20px] w-[400px] h-full z-0">
          <img
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
          <div className="relative z-10 col-span-1 h-full flex flex-col justify-center items-center mt-[-500px] ml-[-250px]">
            {/* Moved to the left */}
            <ul className="space-y-4 text-gray-400 text-xl">
              <li
                className={`cursor-pointer ${
                  selectedPortfolio === "ecommerce" ? "text-pink-500" : "text-white"
                }`}
                onClick={() => setSelectedPortfolio("ecommerce")}
              >
                Ecommerce Websites
              </li>
              <li
                className={`cursor-pointer ${
                  selectedPortfolio === "machine-learning" ? "text-pink-500" : "text-white"
                }`}
                onClick={() => setSelectedPortfolio("machine-learning")}
              >
                Machine Learning
              </li>
              <li
                className={`cursor-pointer ${
                  selectedPortfolio === "frontend" ? "text-pink-500" : "text-white"
                }`}
                onClick={() => setSelectedPortfolio("frontend")}
              >
                Front-End Developer
              </li>
              <li
                className={`cursor-pointer ${
                  selectedPortfolio === "infrastructure" ? "text-pink-500" : "text-white"
                }`}
                onClick={() => setSelectedPortfolio("infrastructure")}
              >
                Infrastructure
              </li>
            </ul>
          </div>

          {/* Right side - Swiper slider with overlapping images */}
          <div className="col-span-2 relative">
            {selectedPortfolio === "ecommerce" && (
              <div className="relative w-[800px] h-[600px]">
                {/* First image */}
                <div className="absolute top-20 left-0 z-10 w-[371px] h-[488px]">
                  <img
                    src="Rectangle 4149.png"
                    alt="Ecommerce Portfolio Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Second image overlapping */}
                <div className="absolute top-[-80px] left-[250px] z-20 w-[435px] h-[572px]">
                  <img
                    src="Rectangle 4148.png"
                    alt="Ecommerce Portfolio Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {selectedPortfolio === "machine-learning" && (
              <div className="relative w-[800px] h-[600px]">
                {/* First image */}
                <div className="absolute top-20 left-0 z-10 w-[371px] h-[488px]">
                  <img
                    src="https://awareth.aware-cdn.net/wp-content/uploads/2018/03/MachineLearning_01_Header.jpg"
                    alt="Machine Learning Portfolio Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Second image overlapping */}
                <div className="absolute top-[-80px] left-[250px] z-20 w-[435px] h-[572px]">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdd8d2j_BYJ5rat1afXCt_rCDAp7f3u16Fog&s"
                    alt="Machine Learning Portfolio Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {selectedPortfolio === "frontend" && (
              <div className="relative w-[800px] h-[600px]">
                {/* First image */}
                <div className="absolute top-20 left-0 z-10 w-[371px] h-[488px]">
                  <img
                    src="https://media.licdn.com/dms/image/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/0/1716965604025?e=2147483647&v=beta&t=QQbiRZaZNurRKVw6bW1J0hG5x2f-7PMAowmfdFF3Dz4"
                    alt="Frontend Portfolio Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Second image overlapping */}
                <div className="absolute top-[-80px] left-[250px] z-20 w-[435px] h-[572px]">
                  <img
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1680413762129/71e707fb-1dbf-4f50-9e0b-a77d03101b79.jpeg"
                    alt="Frontend Portfolio Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {selectedPortfolio === "infrastructure" && (
              <Swiper spaceBetween={30} modules={[Navigation]} className="swiper-container">
                {/* First set of images */}
                <SwiperSlide>
                  <div className="relative w-[800px] h-[600px]">
                    {/* First image */}
                    <div className="absolute top-40 left-0 z-10 w-[371px] h-[488px]">
                      <img
                        src="https://personet.co.th/wp-content/uploads/2022/08/image2.png"
                        alt="Infrastructure Portfolio Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Second image overlapping */}
                    <div className="absolute top-[-0px] left-[250px] z-20 w-[435px] h-[572px]">
                      <img
                        src="https://www.readyidc.com/wp-content/uploads/2021/12/3-100-1024x576.jpg"
                        alt="Infrastructure Portfolio Image 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                {/* Second set of images */}
                <SwiperSlide>
                  <div className="relative w-[800px] h-[600px]">
                    {/* First image */}
                    <div className="absolute top-40 left-0 z-10 w-[371px] h-[488px]">
                      <img
                        src="https://lh3.googleusercontent.com/proxy/i4SLEop5epfJL2o_owwGG9klfaWHO3GLf7p4RMF8TNVQKsGgr0I4rd2efTfe3FMzT6n3D01nwQAE2pvIFDqkINyHJXQcepn2NIyMqK__NbFeYyz5Regi7HsSYhVi_xovgamZyqnQHBILIaUQkzpEOAZYwart6s6RhRDN7UIy_n2Eao65p8Ry3hwAYglV"
                        alt="Infrastructure Portfolio Image 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Second image overlapping */}
                    <div className="absolute top-[-0px] left-[250px] z-20 w-[435px] h-[572px]">
                      <img
                        src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-an-orange-kitten-sitting-on-a-table-with-drops-of-water-image_2935343.jpg"
                        alt="Infrastructure Portfolio Image 4"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page5;
