'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const solutions = [
  {
    title: 'Data Center',
    icon: '/main-images/datacenter-icon.png',
    services: [
      'Servers & Storage',
      'Virtualization',
      'Hyper-Converged Infra',
      'Data Backup & Recovery',
      'Software Define Data Center'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    iconBg: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Cloud',
    icon: '/main-images/cloud-icon.png',
    services: [
      'Private Cloud',
      'Hybrid Multi-Cloud',
      'Infrastructure as a Service',
      'Software as a Service (SaaS)',
      'DevOps'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    iconBg: 'from-purple-400 to-purple-500'
  },
  {
    title: 'Cyber Security',
    icon: '/main-images/cybersecurity-icon.png',
    services: [
      'Endpoint & Server Security Solutions',
      'Perimeter Security',
      'Data Security',
      'Cloud Security',
      'Professional Services'
    ],
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100',
    iconBg: 'from-red-400 to-red-500'
  },
  {
    title: 'Modern Workplaces',
    icon: '/main-images/modern-workplaces-icon.png',
    services: [
      'Enterprise Mobility Management',
      'Modern Data Platform',
      'Modern Application'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    iconBg: 'from-green-400 to-green-500'
  },
  {
    title: 'Networking',
    icon: '/main-images/networking-icon.png',
    services: [
      'Routing & Switching',
      'Wireless',
      'NAC',
      'SDN',
      'Professional Services'
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
    iconBg: 'from-indigo-400 to-indigo-500'
  },
  {
    title: 'IoT Solutions',
    icon: '/main-images/iot-icon.png',
    services: [
      'Smart Devices',
      'Automation',
      'Analytics',
      'Connected Enterprises',
      'Edge Computing'
    ],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'from-cyan-50 to-cyan-100',
    iconBg: 'from-cyan-400 to-cyan-500'
  },
  {
    title: 'IT Consulting',
    icon: '/main-images/consulting-icon.png',
    services: [
      'Strategy',
      'Audits',
      'Migration',
      'Optimization',
      'Digital Transformation'
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    iconBg: 'from-orange-400 to-orange-500'
  },
  {
    title: 'Cloud Migration',
    icon: '/main-images/migration-icon.png',
    services: [
      'Assessment',
      'Planning',
      'Execution',
      'Seamless Adoption',
      'Post-Migration Support'
    ],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'from-teal-50 to-teal-100',
    iconBg: 'from-teal-400 to-teal-500'
  }
];

const Solutions = () => {
  const swiperRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20">
      <div className="w-full px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Best in class Solutions and Services for your business ...
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up delay-200">
            Explore what else we can do for you
          </p>
        </div>
        
        <div className="relative">
          <Swiper
            onSwiper={swiper => (swiperRef.current = swiper)}
            spaceBetween={32}
            slidesPerView={1}
                         breakpoints={{
               480: { slidesPerView: 1, spaceBetween: 0 },
               640: { slidesPerView: 2, spaceBetween: 24 },
               768: { slidesPerView: 2, spaceBetween: 28 },
               1024: { slidesPerView: 3, spaceBetween: 32 },
               1280: { slidesPerView: 4, spaceBetween: 32 },
               1536: { slidesPerView: 5, spaceBetween: 32 },
             }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.solutions-swiper-pagination' }}
            modules={[Autoplay, Pagination]}
            className="w-full"
          >
                         {solutions.map((sol, i) => (
               <SwiperSlide key={sol.title} className="mx-0 sm:mx-1">
                <div
                  className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 min-h-[320px] sm:min-h-[380px] md:min-h-[420px] w-full transition-all duration-700 animate-sol-fade-in-up overflow-hidden hover:z-20 cursor-pointer"
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Premium Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sol.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                  
                  {/* Animated Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-${sol.color.split('-')[1]}-300 group-hover:shadow-2xl transition-all duration-500`} />
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-float-1" />
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-float-2" />
                    <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-3" />
                  </div>

                  {/* Icon Container */}
                  <div className="relative z-10 mb-4 sm:mb-6 md:mb-8">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${sol.iconBg} shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 animate-float-slow`}>
                      <img 
                        src={sol.icon} 
                        alt={sol.title} 
                        className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="relative z-10 mb-3 sm:mb-4 md:mb-6">
                    <h3 className={`text-base sm:text-lg md:text-xl font-bold text-center bg-gradient-to-r ${sol.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {sol.title}
                    </h3>
                  </div>

                  {/* Services List */}
                  <div className="relative z-10 space-y-1.5 sm:space-y-2 md:space-y-3">
                    {sol.services.map((service, serviceIndex) => (
                      <div 
                        key={service}
                        className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${serviceIndex * 50}ms` }}
                      >
                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${sol.color} flex-shrink-0 animate-pulse-slow`} />
                        <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300 leading-tight">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrow */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${sol.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Overlay Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Enhanced Pagination */}
          <div className="solutions-swiper-pagination flex justify-center mt-12" />
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden">
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">View all features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes sol-fade-in-up {
          0% { opacity: 0; transform: translateY(60px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-sol-fade-in-up {
          animation: sol-fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-8px) rotate(180deg) scale(1.2); }
        }
        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-6px) rotate(-180deg) scale(1.1); }
        }
        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite;
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.3); }
        }
        .animate-float-3 {
          animation: float-3 5s ease-in-out infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .solutions-swiper-pagination {
          position: static !important;
          margin-top: 2rem !important;
        }
        .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: #dbeafe;
          opacity: 1;
          margin: 0 8px !important;
          transition: all 0.3s ease;
          border-radius: 50%;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
        }
        
        /* Enhanced hover effects */
        .group:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        /* Gradient text support */
        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default Solutions; 