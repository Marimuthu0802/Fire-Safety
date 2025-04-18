import React from "react";

const services = [
  {
    title: "Fire Extinguishers",
    img: "./src/assets/protection3.jpg",
  },
  {
    title: "Personal Protective Equipments",
    img: "./src/assets/protection2.jpg",
  },
  {
    title: "General Safety Protection",
    img: "./src/assets/protection1.png",
  },
  {
    title: "Emergency Lights",
    img: "./src/assets/protection4.png",
  },
  {
    title: "Fire Hydrants",
    img: "./src/assets/protection5.png",
  },
  {
    title: "Safety Footwear",
    img: "./src/assets/protection6.jpg",
  },
];

const HomeContent2 = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 md:px-12">
      <div className="text-center text-white mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">WHAT WE DO?</h1>
        <p className="text-xl md:text-2xl mt-2">Leading Fire Protection Services</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent2;
