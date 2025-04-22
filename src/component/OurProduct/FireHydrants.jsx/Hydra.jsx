import React from 'react'
import fireExtinguisherBg from '../../../assets/fireExtinguisher.jpg';
import { AiFillPhone } from "react-icons/ai";

const Hydra = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center px-4 py-8 gap-6">
         
    {/* Left Image */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={hydrantsystem}
        alt="HydrantSyatem"
        className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto object-cover rounded-md shadow-lg"
      />
    </div>

    {/* Right Section with Background Image */}
    <div
       className="w-full lg:w-1/2 max-w-md md:max-w-lg min-h-[300px] md:min-h-[400px] lg:min-h-[450px] bg-center bg-cover relative rounded-md shadow-lg"
       style={{ backgroundImage: `url(${fireExtinguisherBg })` }}
       >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 rounded-md"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-4 px-4 py-6 md:py-10">
        {/* Phone Icon */}
        <div className="flex justify-center">
          <div className="bg-yellow-400 rounded-full p-3 md:p-4">
            <AiFillPhone size={28} className="text-black" />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-sm md:text-lg font-medium">
          Have any questions?
        </h2>
        <h2 className="text-sm md:text-lg font-medium">
          call us <span className="text-yellow-400">today!</span>
        </h2>

        <p className="text-yellow-400 text-sm md:text-base">------</p>

        <h1 className="text-lg md:text-2xl font-bold">04214 252101</h1>
      </div>
    </div>
  </div>
  )
}

export default Hydra

