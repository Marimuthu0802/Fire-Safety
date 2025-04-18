import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [openService, setOpenService] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Clients', path: '/our-client' },
    {
      name: 'Our Products',
      dropdown: [
        { name: 'Fire Extinguisher', path: '/fire-extinguisher' },
        { name: 'Safety Footwear', path: '/safety-footwear' },
        { name: 'Emergency Lights', path: '/emergency-lights' },
        { name: 'PPE Kits', path: '/ppe-kits' }
      ]
    },
    {
      name: 'Our Services',
      dropdown: [
        { name: 'AMC Services', path: '/amc-services' },
        { name: 'Fire Training', path: '/fire-training' },
        { name: 'Consulting', path: '/consulting' },
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="./src/assets/logo.png" alt="LOGO" width={180} className="object-contain" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex mr-18 space-x-10 font-semibold text-sm md:text-md lg:text-lg">
            {navItems.map((item, index) => {
              const isProduct = item.name === 'Our Products';
              const isService = item.name === 'Our Services';
              const isOpenDropdown = isProduct ? openProduct : isService ? openService : false;

              return (
                <li
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => {
                    if (isProduct) setOpenProduct(!openProduct);
                    if (isService) setOpenService(!openService);
                  }}
                  onMouseEnter={() => {
                    if (isProduct) setOpenProduct(true);
                    if (isService) setOpenService(true);
                  }}
                  onMouseLeave={() => {
                    if (isProduct) setOpenProduct(false);
                    if (isService) setOpenService(false);
                  }}
                >
                  {!item.dropdown ? (
                    <Link
                      to={item.path}
                      className="hover:text-orange-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="hover:text-orange-400 transition-colors duration-200">
                      {item.name}
                    </span>
                  )}

                  {/* Dropdown (desktop hover or click) */}
                  {item.dropdown && isOpenDropdown && (
                    <ul className="absolute left-0 mt-2 w-52 bg-black text-white shadow-lg rounded-md z-50">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-black px-4 pb-4">
          <ul className="space-y-4 font-semibold text-base">
            {navItems.map((item, index) => {
              const isProduct = item.name === 'Our Products';
              const isService = item.name === 'Our Services';

              return (
                <li key={index}>
                  {!item.dropdown ? (
                    <Link
                      to={item.path}
                      className="block hover:text-orange-400 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <div
                        className="flex justify-between items-center cursor-pointer hover:text-orange-400"
                        onClick={() => {
                          if (isProduct) setOpenProduct(!openProduct);
                          if (isService) setOpenService(!openService);
                        }}
                      >
                        <span>{item.name}</span>
                        <span className={`text-xl transform transition-transform ${((isProduct && openProduct) || (isService && openService)) ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </div>

                      {/* Dropdown (mobile click) */}
                      {((isProduct && openProduct) || (isService && openService)) && (
                        <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-300">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className="block hover:text-orange-400 transition"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
