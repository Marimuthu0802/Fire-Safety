import React from "react";
import why1 from '../../assets/why1.png';
import why2 from '../../assets/why2.png';
import why3 from '../../assets/why3.png';
import why4 from '../../assets/why4.png';


const services = [
  {
    title: "Quick & Easy",
    img: why1,
  },
  {
    title: "Efficient & Accurate",
    img: why2,
  },
  {
    title: "No-Obligation",
    img: why3,
  },
  {
    title: "Fast & Accurate",
    img: why4,
  },
];


const WhyChooseus = () => {
  return (
    <div className="min-h-screen bg-gray-900 bg-cover bg-center py-16 px-4 md:px-12 mt-16">
      <div className="text-center text-white mb-16">
        <h1 className="text-3xl md:text-4xl font-bold">WHY CHOOSE US?</h1>
        <p className="text-xl md:text-3xl mt-24">
          People choose us for our quality craftsmanship!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-center rounded-lg shadow-lg border border-blue-400 p-6 "
          >
            <img
              src={service.img}
              alt={service.title}
              className="mx-auto w-16 h-16 object-contain mb-4"
            />
            <h2 className="text-md md:text-lg font-semibold text-gray-800">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseus;
