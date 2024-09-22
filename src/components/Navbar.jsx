import React, { useState } from 'react';
import logo from './logo2.png';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed w-screen h-[12vw] sm:h-[8vw] z-50 py-[1vw] px-[4vw] bg-zinc-800/60 rounded-xl md:m-[1vw] m-[2vw] flex justify-between items-center'>
      {/* Logo */}
      <div className='logo w-[40vw] sm:w-[25vw]'>
        <img className='h-[8vw] sm:h-[5vw]' src={logo} alt="Logo" />
      </div>

      {/* Menu button visible on mobile */}
      <div className='sm:hidden'>
        <button onClick={toggleSidebar} className='text-[5vw] text-[#99e6ff] focus:outline-none' aria-label="Toggle menu">
          {isOpen ? <IoClose /> : <FiMenu />}
        </button>
      </div>

      {/* Links for desktop (hidden on mobile) */}
      <div className='hidden sm:flex gap-[3vw] ml-[1vw]'>
        {["AeroModelling Workshop", "Shop", "Online Courses", "Summer Camp", "Contact Us"].map((item, index) => (
          <a key={index} className='text-[1.4vw] font-semibold text-[#99e6ff] hover:text-[#ffffff] transition-colors'>
            {item}
          </a>
        ))}
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 w-[60vw] h-full bg-zinc-800 z-100 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Backdrop */}
        {isOpen && <div className='fixed inset-0 bg-black opacity-50' onClick={toggleSidebar} aria-hidden="true" />}

        {/* Close Button Inside Sidebar */}
        <button
          onClick={toggleSidebar}
          className='text-[5vw] text-[#99e6ff] absolute top-[4vw] right-[4vw] focus:outline-none'
          aria-label="Close menu"
        >
          <IoClose />
        </button>

        {/* Sidebar Navigation Links */}
        <ul className='flex flex-col p-[5vw] gap-[5vw] text-[#99e6ff] text-[4vw] mt-[10vw]'>
          {["AeroModelling Workshop", "Shop", "Online Courses", "Summer Camp", "Contact Us"].map((item, index) => (
            <li key={index}>
              <a href="#" className='font-semibold hover:text-[#ffffff] transition-colors' onClick={toggleSidebar}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
