import React from 'react';
import {motion} from 'framer-motion'

const projectsList = [
  {
    title: "Enterprise Resource Planner",
    category: "Software Development",
    description: "A centralized management platform for tracking inventory, customer relations, and financial reporting across multi-branch retail operations.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Corporate Portal & Web App",
    category: "Website Development",
    description: "High-performance responsive corporate digital platform optimized for lightning-fast loads and robust security compliance.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Secure FinTech Payment Hub",
    category: "Digital Solutions",
    description: "Robust gateway integration handling payment processing securely with automated transaction logging and reconciliation modules.",
    tech: ["Java", "REST APIs", "Docker", "Redis"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Project() {
  return (
    <motion.section id="projects" className="py-20 bg-[#f4f8fc] px-4 sm:px-6 lg:px-8 border-t border-blue-100" 
     initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0, type: "spring", }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071630] tracking-tight">
            Our Projects & Portfolio
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Explore a selection of our successfully implemented solutions and technical capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0056b3] bg-blue-50 px-2.5 py-1 rounded mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#071630] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}