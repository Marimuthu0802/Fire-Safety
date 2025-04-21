import React from 'react';
import fireprotectionBG from '../../assets/fireprotectionBG.jpg';

const BgFire = () => {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fireprotectionBG})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold max-w-xl">
          For Fire Safety & Protective Equipment
        </h1>
        <button className="bg-red-500 rounded-lg w-32 py-2 px-4 hover:bg-red-600 transition">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default BgFire;
