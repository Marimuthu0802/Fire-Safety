import React from 'react';
import { AiFillMail, AiOutlineRight, AiOutlinePhone } from "react-icons/ai";
import footerBG from '../../assets/footer.png';
import logo from '../../assets/logo.png';

const MainFooter = () => {
  return (
    <footer
    className="bg-cover bg-center bg-no-repeat text-white py-10 px-4"
    style={{ backgroundImage: `url(${footerBG})` }}
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
  
      {/* Logo and Info */}
      <div className="space-y-4">
        <img src={logo} alt="LOGO" width={100} className="object-contain" />
        <p className="text-sm">Safety begins with us! Standing up for Worker’s safety!</p>
        <p className="text-sm">Our Branches: Coimbatore, Erode, Karur, Salem, Madurai.</p>
        <p className="text-sm">Opening Hours: Mon – Fri 9:00 am to 7:00 pm</p>
      </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">CONTACT INFO</h1>
          <div className="flex items-center gap-2 text-sm">
            <AiOutlinePhone color="red" />
            <span>+91 70106 77045 / +91 96002 51611</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <AiFillMail color="red" />
            <span>support@bytone.in</span>
          </div>
        </div>

        {/* Products List */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">PRODUCTS</h1>
          {[
            'Fire Extinguisher',
            'Fire Hydrant Accessories',
            'Personal Protective Equipments',
            'Worker Safety Footwear',
            'Industrial Emergency Lights',
            'General Safety Products'
          ].map((product, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <AiOutlineRight color="red" />
              <span>{product}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
