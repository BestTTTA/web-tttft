import React from "react";

const servicesData = [
  {
    title: "Infrastructure",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Cloud Migration",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Cloud Security",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Machine Learning",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Mobile Application Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "DevOps",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Flutter Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
];

const Page2 = () => {
  return (
    <section
      className="relative py-10 px-5"
      style={{
        backgroundColor: "black", // พื้นหลังสีดำ
        minHeight: "100vh",
      }}
    >
      {/* ภาพพื้นหลัง Gradients.jpg */}
      <div
        className="absolute"
        style={{
          backgroundImage: "url('/Gradients.jpg')",
          backgroundSize: "cover", // ปรับเป็น cover เพื่อให้ภาพเต็มพื้นที่ที่กำหนด
          backgroundPosition: "center", // จัดตำแหน่งตรงกลาง
          backgroundRepeat: "no-repeat", // ไม่ให้ภาพซ้ำ
          width: "700px", // ขยายความกว้างของภาพตามความต้องการ
          height: "100%", // ขยายความสูงของภาพให้เต็มพื้นที่
          left: "0%", // จัดภาพให้อยู่ตรงกับขอบซ้าย
          top: "4%", // จัดให้อยู่ด้านบนสุด
          zIndex: 0, // อยู่ข้างล่างของ content อื่นๆ
        }}
      ></div>
      {/* เนื้อหาที่ซ้อนบนพื้นหลัง */}
      <div className="relative z-10">
        <h2
          className="text-3xl text-center font-bold mb-8"
          style={{
            background: "linear-gradient(90deg, white 36%, transparent)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c7d2fe, #818cfa, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Services
          </span>
        </h2>

        {/* เพิ่มข้อความตรงนี้ */}
        <p
          className="text-center text-white italic"
          style={{
            marginBottom: "2rem", // ปรับระยะห่างระหว่างข้อความและกรอบด้านล่าง
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
          nulla bibendum, fringilla lectus at, fringilla quam.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="border border-white border-opacity-20 rounded-lg p-5 shadow hover:shadow-lg transition"
              style={{
                background:
                  (Math.floor(index / 4) + index) % 2 === 0
                    ? "rgba(55, 65, 81, 0.5)" // สีจางสำหรับกรอบแบบเทา
                    : "rgba(17, 24, 39, 0.5)", // สีจางสำหรับกรอบแบบน้ำเงินเข้ม
                backdropFilter: "blur(10px)", // เพิ่มความโปร่งใสและเอฟเฟกต์เบลอ
              }}
            >
              <div className="bg-white w-12 h-12 mb-3 rounded-lg"></div>
              <h3 className="text-lg font-bold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ชั้นโปร่งแสงสีดำทับภาพพื้นหลัง */}
      <div
        className="absolute inset-0 bg-black opacity-50 z-0"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Page2;
