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
          <Link to="/" className="hover:text-gray-600">Site Management</Link>
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
        <div className="flex flex-col justify-between space-y-4 p-4 h-[80%] text-black">
          <div className="flex flex-col space-y-4 p-4 text-black">

            <div className='flex items-center'>
              {/* home icon svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
              </svg>              
              <Link to="" className="hover:text-gray-600 font-montserrat font-semibold ms-2 text-gray-600" onClick={toggleOffcanvas}>Home</Link>
            </div>

            <div className='flex items-center'>
              {/* Management */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-kanban" viewBox="0 0 16 16">
                <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"/>
              </svg>
              <Link to="/dashboard" className="hover:text-gray-600 font-montserrat font-semibold ms-2 text-gray-600" onClick={toggleOffcanvas}>Site management</Link>
            </div>
          

          <div className='flex items-center'>
            {/* Gear Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
            </svg>
            <Link to="" className="hover:text-gray-600 font-montserrat font-semibold ms-2 text-gray-600" onClick={toggleOffcanvas}>Settings</Link>
          </div>
          </div>

          <div className="flex items-center font-bold  text-black">
            {/* back button  */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
            <Link to="/" className="hover:text-gray-600 items-center font-montserrat ms-2 text-gray-600" onClick={toggleOffcanvas}>Sign Out</Link>
          </div>

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
