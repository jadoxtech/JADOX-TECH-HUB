import React, { useState } from 'react';
import {motion } from 'framer-motion' 
import logo from '../assets/logo.jpg'
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#071630] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* Replace src with your actual logo path */}
            <img 
              src={logo}
              alt="Jadox Tech Logo" 
              className="h-12 w-auto object-contain bg-white rounded p-1" 
            />
            <span className="font-bold text-lg tracking-wide uppercase hidden sm:inline-block">
              Jadox Tech
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-wider">
            <a href="#home" className="hover:text-blue-400 transition-colors">HOME</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">ABOUT US</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">OUR SERVICES</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">OUR PROJECTS</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">CONTACT US</a>
          </nav>

          {/* Right Action Button */}
          <motion.div className="hidden md:block"
          animate={{x:3}}
          transition={{type:'spring',damping:0,duration:2}}
          >
            <a
              href="#contact"
              className="bg-white text-[#071630] font-semibold px-5 py-2.5 rounded-md shadow hover:bg-blue-50 transition-all text-sm"
            >
              GET A QUOTE
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#051020] border-t border-blue-900 px-4 pt-3 pb-5 space-y-3">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)} 
            className="block text-white hover:text-blue-400 py-2 font-medium"
          >
            HOME
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="block text-white hover:text-blue-400 py-2 font-medium"
          >
            ABOUT US
          </a>
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)} 
            className="block text-white hover:text-blue-400 py-2 font-medium"
          >
            OUR SERVICES
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)} 
            className="block text-white hover:text-blue-400 py-2 font-medium"
          >
            OUR PROJECTS
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="block text-white hover:text-blue-400 py-2 font-medium"
          >
            CONTACT US
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-white text-[#071630] font-semibold px-4 py-2.5 rounded shadow"
            >
              GET A QUOTE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}