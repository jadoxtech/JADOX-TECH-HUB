import React, { useState } from 'react';
import {motion } from 'framer-motion'

export default function Services() {
  const [services] = useState([
    {
      id: 1,
      title: "ICT Consultancy",
      description: "Expert guidance and advisory services to align your technology infrastructure with your long-term business strategy.",
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      id: 2,
      title: "Software Development",
      description: "Tailored, robust, and scalable software systems designed specifically to streamline and automate your business operations.",
      iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
      id: 3,
      title: "Website Development",
      description: "Modern, responsive, and secure corporate websites and web applications built to convert visitors into loyal clients.",
      iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "High-performance native and cross-platform mobile applications for Android and iOS providing seamless user experiences.",
      iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
    {
      id: 5,
      title: "IT Support & Technical Services",
      description: "Reliable maintenance, troubleshooting, and infrastructure monitoring to ensure zero downtime for your organization.",
      iconPath: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      id: 6,
      title: "Digital Solutions & Tech Services",
      description: "Innovative enterprise digital transformations, cloud integrations, and modernization of legacy business systems.",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      id: 7,
      title: "ICT Project Planning & Implementation",
      description: "End-to-end management, architecture mapping, and successful deployment of complex corporate ICT projects.",
      iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-6 9l2 2 4-4",
    },
      {
      id: 8,
      title: "JADOX INNOVATION HUB",
      description: "End-to-end management, architecture mapping, and successful deployment of complex corporate ICT projects.",
      iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-6 9l2 2 4-4",
    },
  ]);

  return (
    <section id="services" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
     
      <div className="max-w-7xl mx-auto"
      
      >
        {/* Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16"
         initial={{x:'100vh',opacity:0}}
         animate={{opacity:1,x:0}}
         transition={{duration:4,type:'spring',stiffness:120}}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071630] tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Delivering cutting-edge information and communication technology solutions customized for your business success.
          </p>
        </motion.div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
            initial={{opacity:0,y:80}}
            whileInView={{opacity:1,y:0}}
            viewport={{amount:"50"}}
            transition={{duration:1,ease:"easeOut",delay:0}}
              key={service.id}
              className="bg-[#f4f8fc] border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Dynamic Icon */}
                <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#0056b3] transition-colors">
                  <svg
                    className="w-8 h-8 text-[#0056b3] group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.iconPath}
                    />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#071630] mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-[#0056b3] hover:text-[#003e82] transition-colors"
                >
                  Enquire About Service
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}