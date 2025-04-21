import React from 'react';
import homecon1 from '../../assets/homecon1.jpg'
import firesafety1 from "../../assets/firesafety1.png"
import firesafety2 from "../../assets/firesafety2.png"
const HomeContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-8">

      <div className="flex justify-center">
        <img src={homecon1} alt="HomeContent image" className="w-full max-w-xl object-cover" />
      </div>

     
      <div className="text-left space-y-6 max-w-xl">
     
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl text-red-600 font-bold">ABOUT US</h1>
          <h1 className="text-3xl md:text-4xl font-semibold">BT Safe Solution</h1>
          <p className="text-gray-700">
            BT Safe Solution is one of the leading suppliers of safety equipment and
            accessories for the building as well as persons working under risk conditions.
          </p>
        </div>

     
        <div className="flex space-x-6">
          <div className="text-center">
            <img src={firesafety1} alt="firesafety1" className="w-20 mx-auto" />
            <h4 className="mt-2 font-medium text-sm">Fire Safety<br /> Products</h4>
          </div>
          <div className="text-center">
            <img src={firesafety2} alt="firesafety2" className="w-20 mx-auto" />
            <h4 className="mt-2 font-medium text-sm">Fire Safety<br /> Services</h4>
          </div>
        </div>

        <div>
          <p className="text-gray-700">
            Prime quality safety equipment and accessories are available at the best price
            with us. For co-operate building, we provide a fire training program. Our
            safety products include personal, general, industrial and working purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
