import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071630] tracking-tight">
            About Us
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Discover who we are, our core mission, vision, and the driving forces behind our ICT innovations.
          </p>
        </div>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#071630]">
              JADOX TECH COMPANY LIMITED
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              Based in the heart of Dodoma CBD, Tanzania, JADOX TECH COMPANY LIMITED is a premier Information and Communication Technology (ICT) firm dedicated to empowering local and international institutions with cutting-edge digital solutions.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              Under our guiding slogan, <strong className="text-[#0056b3]">"Innovation Integrates Discovery"</strong>, we bridge complex technical challenges with elegant, user-centric, and scalable software architecture.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-blue-50 text-[#0056b3] text-sm font-semibold px-4 py-2 rounded-lg border border-blue-100">
                Target Customers: Businesses, Institutions & Growing Enterprises
              </span>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#f4f8fc] p-6 rounded-xl border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#0056b3] text-white rounded-lg flex items-center justify-center font-bold mb-4">
                  M
                </div>
                <h4 className="text-lg font-bold text-[#071630] mb-2">Our Mission</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To deliver reliable, secure, and world-class ICT solutions that optimize operations and accelerate digital transformation for our clients.
                </p>
              </div>
            </div>

            <div className="bg-[#f4f8fc] p-6 rounded-xl border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#0056b3] text-white rounded-lg flex items-center justify-center font-bold mb-4">
                  V
                </div>
                <h4 className="text-lg font-bold text-[#071630] mb-2">Our Vision</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be the leading and most trusted technology partner in East Africa, known for pioneering digital excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values & Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
          
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h4 className="text-lg font-bold text-[#071630] mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0056b3]"></span>
              Core Values
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Innovation & Creativity</li>
              <li>• Reliability & Security</li>
              <li>• Client-Centric Excellence</li>
              <li>• Professional Integrity</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h4 className="text-lg font-bold text-[#071630] mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0056b3]"></span>
              Business Objectives
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Expand regional digital service delivery</li>
              <li>• Build high-trust corporate relationships</li>
              <li>• Streamline communication channels</li>
              <div>• Continuous R&D implementation</div>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h4 className="text-lg font-bold text-[#071630] mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0056b3]"></span>
              Why Choose Us
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Deep local market understanding</li>
              <li>• Robust full-stack tech expertise</li>
              <li>• Dedicated post-deployment support</li>
              <li>• Scalable, secure architecture</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}