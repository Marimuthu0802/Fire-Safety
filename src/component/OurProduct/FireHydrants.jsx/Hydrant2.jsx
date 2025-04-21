import React from 'react';
import { FaHardHat, FaTools } from 'react-icons/fa';
import CountUp from 'react-countup';

const Hydrant2 = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left: Text Content */}
        <div className="lg:w-2/3 space-y-6 text-black">
          <h1 className="text-3xl md:text-4xl font-semibold">Hydrant System</h1>
          <p className="text-base md:text-lg">
            Hydrant accessories play a vital role in the system of firefighting. The main purpose for designing hydrant protection is 
            to fight the spread of fire in huge proportions. They are designed in such a way that even if the structure gets 
            collapses they get into the operation.
          </p>

          <div>
            <h2 className="text-xl font-semibold mt-4">Types of Fire Hydrants</h2>
            <ul className="list-disc pl-6 mt-2">
              <li>Dry Barrel - Contents Water Supply</li>
              <li>Wet Barrel - Need a value to release the water let out</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-4">List of Fire Hydrant Accessories</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Fire Hose Reel Shutoff Nozzle</li>
              <li>Shut Off Nozzle PVC</li>
              <li>Hose Reel Shutoff Nozzle</li>
              <li>Fire Hose Reel Shutoff Nozzle</li>
              <li>Shut off Nozzles For Hose Reel</li>
              <li>Hose Reel Shutoff Nozzle</li>
              <li>Foldable Fire Buckets Stand</li>
            </ul>
          </div>
        </div>

        {/* Right: Info Boxes */}
        <div className="lg:w-1/3 flex flex-col gap-10 items-center">
          {/* Card 1 */}
          <div className="bg-black text-white w-[250px] h-[250px] flex flex-col justify-center items-center rounded-md shadow-md">
            <FaHardHat size={40} className="text-yellow-400 mb-3" />
            <h2 className="text-3xl font-semibold">
              <CountUp end={600} duration={2} enableScrollSpy scrollSpyDelay={300} />+
            </h2>
            <p className="text-base">Satisfied clients</p>
          </div>

          {/* Card 2 */}
          <div className="bg-black text-white w-[250px] h-[250px] flex flex-col justify-center items-center rounded-md shadow-md">
            <FaTools size={40} className="text-yellow-400 mb-3" />
            <h2 className="text-3xl font-semibold">
              <CountUp end={1500} duration={2.5} enableScrollSpy scrollSpyDelay={300} />+
            </h2>
            <p className="text-base">Satisfied clients</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hydrant2;
