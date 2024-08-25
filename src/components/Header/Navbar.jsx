import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black shadow-lg px-4 py-6 font-montserrat">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="#" className="text-lg font-bold">
        {/* get image from public folder */}
        <img src="/thick-blue-logo.svg" alt="logo" className="h-[35px]" />
        </Link>
        <button
          onClick={toggleOffcanvas}
          className="text-black lg:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="#3B82F6" stroke="#3B82F6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/about" className="hover:text-gray-600">About</Link>
          <Link to="/services" className="hover:text-gray-600">Services</Link>
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
        </div>
      </div>

      {/* Offcanvas menu for mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden shadow-lg`}
      >
        {/* Header section */}
        <div className="bg-[#3B82F6] text-white p-4 flex justify-between">
          <Link to="#" className="text-lg font-bold">
          <img src="/thick-white-logo.svg" alt="logo" className="h-[40px]" />
          </Link>

            <button onClick={toggleOffcanvas} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4 text-black">
          <Link to="/" className="hover:text-gray-600 font-montserrat" onClick={toggleOffcanvas}>Home</Link>
          <Link to="/about" className="hover:text-gray-600 font-montserrat" onClick={toggleOffcanvas}>About</Link>
          <Link to="/services" className="hover:text-gray-600 font-montserrat" onClick={toggleOffcanvas}>Services</Link>
          <Link to="/contact" className="hover:text-gray-600 font-montserrat" onClick={toggleOffcanvas}>Contact</Link>
        </div>
      </div>

      {/* Overlay when offcanvas is open */}
      {isOpen && (
        <div
          onClick={toggleOffcanvas}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
