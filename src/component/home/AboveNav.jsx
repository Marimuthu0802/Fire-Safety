import React from 'react';
import { AiFillMail, AiOutlineLeftCircle, AiOutlinePhone } from "react-icons/ai";

const AboveNav = () => {
  return (
    <div className="w-full px-4 py-4 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Email Section */}
        <div className="flex items-center gap-2 text-sm md:text-md lg:text-lg text-white">
          <AiFillMail color="red" size={32} />
          <span>support@bytone.in</span>
        </div>

        {/* Timing Section */}
        <div className="flex items-center gap-2 text-sm md:text-md lg:text-lg text-white">
          <AiOutlineLeftCircle color="red" size={32} />
          <span>Mon-Fri 9:00 am - 7:00 pm</span>
        </div>

        {/* Phone Section */}
        <div className="flex items-start gap-2 text-sm md:text-md lg:text-lg text-white">
          <AiOutlinePhone color="red" size={40} className="mt-1" />
          <div>
            <p className="leading-tight">Feel Free To Call Us!</p>
            <p className="leading-tight">+91 70106 77045, +91 96002 51611</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboveNav;
