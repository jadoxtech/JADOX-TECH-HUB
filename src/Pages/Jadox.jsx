import React from 'react';
import {motion} from 'framer-motion'
import {TypeAnimation} from 'react-type-animation'

export default function Jadox() {
  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] flex items-center justify-center bg-[#f4f8fc] overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
      style={{
        // Inline SVG pattern creating the tech circuit lines directly in CSS
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 20 h 40 v 40 h 30 M10 70 h 30 v 30 h 40 M90 10 v 40 h -20' stroke='%230056b3' stroke-width='1.2' stroke-opacity='0.15' fill='none'/%3E%3Ccircle cx='50' cy='60' r='3.5' fill='%230056b3' fill-opacity='0.2'/%3E%3Ccircle cx='80' cy='100' r='3.5' fill='%230056b3' fill-opacity='0.2'/%3E%3Ccircle cx='70' cy='50' r='3.5' fill='%230056b3' fill-opacity='0.2'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Decorative Radial Overlay gradient for soft focus glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-transparent to-blue-50/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & CTA */}
        <div className="space-y-6 text-left">
          <motion.div className="space-y-2"
           initial ={{y:-50, opacity: 0}}
           whileInView ={{y: 0, opacity: 1}}
           transition ={{duration: 10, type:"spring", stiffness:200,delay:0,damping:10}}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071630] tracking-tight leading-tight">
              JADOX TECH <br />
              <span className="text-[#0056b3]">COMPANY LIMITED</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-slate-700 tracking-wide pt-1">
              Innovation Integrates Discovery
            </p>
          </motion.div>

          <motion.div className="pt-2"
           initial ={{y:50, opacity: 0}}
           whileHover={{scale:0.7}}
           transition={{type:"spring",stiffness:300,damping:20, duration:2, delay:0}}
           animate={{opacity:1,y:0}}
          >
            <a
              href="#contact"
              className="inline-block bg-[#0056b3] hover:bg-[#003e82] text-white font-semibold text-base sm:text-lg px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all uppercase tracking-wider transform hover:-translate-y-0.5"
            >
              Let's Build Your Solution
            </a>
          </motion.div>

          <p className="text-lg sm:text-xl font-semibold text-slate-800 pt-4">
            Modern ICT Solutions for Forward-Thinking Businesses in Tanzania.
          </p>

       <TypeAnimation
      sequence={[
        'Modern Ict solutions ',
        1000, 
        'For Forward',
        1000,
        'Thinking Business',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </div>

        {/* Right Column: Isometric ICT Illustration */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-lg p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm">
            <svg
              viewBox="0 0 500 400"
              className="w-full h-auto drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Central Isometric Cloud & Network Nodes */}
              <path
                d="M 250 80 L 380 155 L 250 230 L 120 155 Z"
                fill="#e6f0fa"
                stroke="#0056b3"
                strokeWidth="2.5"
              />
              <path
                d="M 120 155 L 120 185 L 250 260 L 250 230 Z"
                fill="#b3d4f5"
                stroke="#0056b3"
                strokeWidth="2.5"
              />
              <path
                d="M 380 155 L 380 185 L 250 260 L 250 230 Z"
                fill="#99c2f0"
                stroke="#0056b3"
                strokeWidth="2.5"
              />

              {/* Upper Cloud Container */}
              <rect
                x="290"
                y="180"
                width="120"
                height="70"
                rx="12"
                fill="#ffffff"
                stroke="#071630"
                strokeWidth="2.5"
              />
              <path
                d="M 320 215 Q 330 195 350 200 Q 370 190 380 215 Z"
                fill="#0056b3"
              />

              {/* Server Database Node */}
              <rect
                x="190"
                y="240"
                width="120"
                height="80"
                rx="10"
                fill="#ffffff"
                stroke="#071630"
                strokeWidth="2.5"
              />
              <ellipse cx="250" cy="260" rx="40" ry="10" fill="#e6f0fa" stroke="#0056b3" strokeWidth="2" />
              <ellipse cx="250" cy="280" rx="40" ry="10" fill="#e6f0fa" stroke="#0056b3" strokeWidth="2" />
              <ellipse cx="250" cy="300" rx="40" ry="10" fill="#e6f0fa" stroke="#0056b3" strokeWidth="2" />

              {/* Interconnecting Circuit Lines */}
              <path
                d="M 250 230 L 250 240 M 350 180 L 350 155"
                stroke="#0056b3"
                strokeWidth="3"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}