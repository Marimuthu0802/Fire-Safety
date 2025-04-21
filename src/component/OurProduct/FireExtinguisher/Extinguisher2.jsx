import React from 'react'
import { FaHardHat, FaTools } from 'react-icons/fa';
import CountUp from 'react-countup';

const Extinguisher2 = () => {
  return (
    <div className=" py-12 px-4 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
      
      {/* Left: Text Content */}
      <div className="lg:w-2/3 space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Protect Everything From Fire
        </h1>
        <p className="text-base md:text-lg text-gray-800">
          Fire Extinguishers are one of the pre-dominant safety equipment in places like homes, offices, educational institutions, cars, etc. Every fire extinguisher is designed to the need and requirements of the building. In big companies like server racks, data centres, etc. fire extinguishers are important to avoid the big fire break-out. It is mandatory to have fire extinguishers in all commercial buildings by law.
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>It helps prevent the catastrophic spread of fire, which avoids property damage</li>
          <li>Mainly helps in prevent the small fire from getting out of control</li>
          <li>As fire extinguishers are portable to move around that help to control the fire</li>
        </ul>

        <p className="text-base md:text-lg text-gray-800">
          Having a fire extinguisher will not guarantee protection. The following measure has to be taken.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Adequate maintenance is necessary for proper functioning</li>
          <li>Train your staff on how to use the equipment</li>
          <li>Before using the fire extinguisher read the first four safety tips</li>
        </ul>
      </div>

      {/* Right: Info Boxes */}
      <div className="lg:w-1/3 flex flex-col gap-10 items-center">
      {/* Card 1 */}
      <div className="bg-black text-white w-[250px] h-[250px] flex flex-col justify-center items-center rounded-md shadow-md">
        <FaHardHat size={40} className="text-yellow-400 mb-3" />
        <h2 className="text-3xl font-semibold">
          <CountUp
            end={600}
            duration={2}
            enableScrollSpy
            scrollSpyDelay={300}
          />+
        </h2>
        <p className="text-base">Satisfied clients</p>
      </div>

      {/* Card 2 */}
      <div className="bg-black text-white w-[250px] h-[250px] flex flex-col justify-center items-center rounded-md shadow-md">
        <FaTools size={40} className="text-yellow-400 mb-3" />
        <h2 className="text-3xl font-semibold">
          <CountUp
            end={1500}
            duration={2.5}
            enableScrollSpy
            scrollSpyDelay={300}
          />+
        </h2>
        <p className="text-base">Satisfied clients</p>
      </div>
    </div>

    </div>
  </div>
  )
}

export default Extinguisher2 
