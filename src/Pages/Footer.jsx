import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#071630] text-white pt-16 pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold tracking-wider uppercase text-white">
              JADOX TECH
            </h3>
            <p className="text-slate-300 text-sm italic">
              "Innovation Integrates Discovery"
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing modern, secure, and reliable ICT solutions for businesses and institutions in Dodoma and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Our Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4 tracking-wide">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>ICT Consultancy</li>
              <li>Software Development</li>
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>IT Support & Technical Services</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400 mb-4 tracking-wide">
              Official Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round5" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dodoma CBD, Tanzania</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+255666003747" className="hover:text-white transition-colors">+255 666 003 747</a>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@jadoxtech.com" className="hover:text-white transition-colors">info@jadoxtech.com</a>
              </p>
            </div>

            {/* WhatsApp Quick Action Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/255666003747"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg shadow transition-all text-sm gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-blue-900/60 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} JADOX TECH COMPANY LIMITED. All rights reserved. | www.jadoxtech.com</p>
        </div>
      </div>
    </footer>
  );
}