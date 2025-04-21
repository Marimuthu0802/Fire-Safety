import React from "react";
import protection1 from '../../assets/protection1.png';
import protection2 from '../../assets/protection2.jpg';
import protection3 from '../../assets/protection3.jpg';
import protection4 from '../../assets/protection4.png';
import protection5 from '../../assets/protection5.png';
import protection6 from '../../assets/protection6.jpg';

const services = [
  {
    title: "Fire Extinguishers",
    img: protection3,
  },
  {
    title: "Personal Protective Equipments",
    img: protection2,
  },
  {
    title: "General Safety Protection",
    img: protection1,
  },
  {
    title: "Emergency Lights",
    img: protection4,
  },
  {
    title: "Fire Hydrants",
    img: protection5,
  },
  {
    title: "Safety Footwear",
    img: protection6,
  },
];


const HomeContent2 = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 md:px-12">
      <div className="text-center text-white mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">WHAT WE DO?</h1>
        <p className="text-xl md:text-2xl mt-2">Leading Fire Protection Services</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  lg:ml-28">
        {services.map((service, index) => (
          <div key={index} className="bg-white w-75 rounded-xl shadow-md overflow-hidden">
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
