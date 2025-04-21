
import React from 'react'
import { AiOutlineCheck } from "react-icons/ai"
import about1 from '../../assets/about1.jpeg';
import about2 from '../../assets/about2.jpeg';

const AboutContent1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="px-4 py-10 space-y-16 max-w-7xl w-full">

        {/* WHO WE ARE Section */}
        <div className='flex flex-col lg:flex-row items-center gap-10 justify-center'>
        <img src={about1} alt="About1" className="w-full lg:w-[600px] rounded-lg shadow-md" />


          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
            <h1 className='text-3xl lg:text-4xl font-bold'>WHO WE ARE?</h1>
            <h2 className='text-2xl lg:text-3xl font-semibold'>
              Fire Safety Equipment &  Accessories
            </h2>
            <p className="text-justify max-w-sm mx-auto lg:mx-0">
              We 'BT Safe' are one of India's leading suppliers of safety accessories and equipment.
              With over two decades of experience, we understand what type of buildings require specific safety measures and products.
              Beyond product supply, we conduct fire safety programs in corporate buildings to educate people on safe and calm evacuation practices.
              Our long-standing reputation is built on quality products and exceptional service that ensures client satisfaction.
            </p>
          </div>
        </div>

        {/* PRODUCTS Section */}
        <div className='flex flex-col lg:flex-row items-center gap-10 justify-center'>
          <img src={about2} alt="About2" className="w-full lg:w-[600px] rounded-lg shadow-md" />

          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
            {[
              'Fire Extinguisher',
              'Fire Hydrant Accessories',
              'Personal Protective Equipments',
              'Worker Safety Footwear',
              'Industrial Emergency Lights',
              'General Safety Products'
            ].map((product, index) => (
              <div key={index} className="flex items-center gap-2 text-sm justify-center lg:justify-start">
                <AiOutlineCheck className="text-white bg-amber-300 rounded-full " />
                <span className='text-lg'>{product}</span>
              </div>
            ))}

            <div className="flex justify-center lg:justify-start">
              <button className='mt-6 bg-yellow-400 hover:bg-yellow-500 transition text-black px-6 py-2 rounded-lg font-medium'>
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutContent1;
