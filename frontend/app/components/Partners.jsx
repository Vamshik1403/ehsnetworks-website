'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Partners = () => {
  const partners = [
    {
      name: 'Lenovo',
      type: 'Infrastructure Solutions Partner',
      level: 'Gold',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-500',
      logo: '/main-images/lenovo-logo.png'
    },
    {
      name: 'Lenovo',
      type: 'PC Partner',
      level: 'Platinum',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500',
      logo: '/main-images/lenovo-logo.png'
    },
    {
      name: 'VMware',
      type: 'Digital Workspace',
      level: 'Principal Partner',
      color: 'from-green-500 to-blue-500',
      bgColor: 'bg-white',
      logo: '/main-images/vmware-logo.png'
    },
    {
      name: 'VMware',
      type: 'Data Center Virtualization',
      level: 'Principal Partner',
      color: 'from-green-500 to-blue-500',
      bgColor: 'bg-white',
      logo: '/main-images/vmware-logo.png'
    },
    {
      name: 'VMware',
      type: 'Cloud Management and Automation',
      level: 'Principal Partner',
      color: 'from-green-500 to-blue-500',
      bgColor: 'bg-white',
      logo: '/main-images/vmware-logo.png'
    },
    {
      name: 'Microsoft',
      type: 'Cloud Solutions Partner',
      level: 'Gold',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-600',
      logo: '/main-images/microsoft-logo.png'
    },
    {
      name: 'Cisco',
      type: 'Networking Partner',
      level: 'Silver',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500',
      logo: '/main-images/cisco-logo.png'
    },
    {
      name: 'Dell',
      type: 'Infrastructure Partner',
      level: 'Platinum',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-600',
      logo: '/main-images/dell-logo.png'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 py-20">
      <div className="w-full px-0">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 animate-fade-in-up">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up delay-200">
            Trusted technology partners delivering world-class solutions
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative">
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
                         breakpoints={{
               480: { slidesPerView: 1, spaceBetween: 0 },
               640: { slidesPerView: 2, spaceBetween: 24 },
               768: { slidesPerView: 3, spaceBetween: 28 },
               1024: { slidesPerView: 4, spaceBetween: 32 },
               1280: { slidesPerView: 5, spaceBetween: 32 },
             }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.partners-swiper-pagination' }}
            modules={[Autoplay, Pagination]}
            className="w-full"
            loop={true}
          >
                         {partners.map((partner, index) => (
               <SwiperSlide key={`${partner.name}-${partner.type}-${index}`} className="mx-0 sm:mx-1">
                                 <div className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-4 md:p-6 transition-all duration-700 animate-fade-in-up hover:scale-105 hover:shadow-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-all duration-700"
                    style={{
                      background: partner.name === 'VMware' 
                        ? 'linear-gradient(135deg, #00ff88 0%, #0066ff 100%)'
                        : `linear-gradient(135deg, ${partner.color.split('-')[1]}-400 0%, ${partner.color.split('-')[1]}-600 100%)`
                    }}
                  />
                  
                  <div className="relative z-10">
                                         {/* Partner Badge */}
                     <div className={`h-20 sm:h-24 md:h-32 rounded-lg sm:rounded-xl ${partner.bgColor} p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 relative overflow-hidden group-hover:shadow-lg transition-all duration-500`}>
                      {/* Gradient overlay for VMware */}
                      {partner.name === 'VMware' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                      )}
                      
                      <div className="relative z-10 flex items-center justify-between h-full">
                                                 {/* Left side - Partner info */}
                         <div className="flex-1 text-white">
                           <div className="text-xs sm:text-sm font-medium mb-1">
                             {partner.type}
                           </div>
                           <div className="text-xs opacity-90">
                             {partner.level}
                           </div>
                         </div>
                        
                                                 {/* Right side - Partner name */}
                         <div className="text-white text-right">
                           <div className="text-sm sm:text-lg font-bold writing-mode-vertical">
                             {partner.name}
                           </div>
                         </div>
                      </div>
                      
                      {/* VMware swoosh */}
                      {partner.name === 'VMware' && (
                        <div className="absolute bottom-2 right-2 w-8 h-8">
                          <svg viewBox="0 0 24 24" className="w-full h-full">
                            <path 
                              d="M2 12l5-5 5 5 5-5 5 5" 
                              stroke="url(#vmware-gradient)" 
                              strokeWidth="2" 
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient id="vmware-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00ff88" />
                                <stop offset="100%" stopColor="#0066ff" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      )}
                    </div>
                    
                                         {/* Partner logo */}
                     <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                       <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                         <img 
                           src={partner.logo} 
                           alt={partner.name} 
                           className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                         />
                       </div>
                     </div>
                    
                                         {/* Partner details */}
                     <div className="text-center">
                       <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                         {partner.name}
                       </h3>
                       <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                         {partner.type}
                       </p>
                       <div className="mt-1 sm:mt-2 inline-block px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                         {partner.level}
                       </div>
                     </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-float-1" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-float-2" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Enhanced Pagination */}
          <div className="partners-swiper-pagination flex justify-center mt-12" />
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-6px) rotate(180deg) scale(1.2); }
        }
        .animate-float-1 {
          animation: float-1 4s ease-in-out infinite;
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-4px) rotate(-180deg) scale(1.1); }
        }
        .animate-float-2 {
          animation: float-2 5s ease-in-out infinite;
        }
        
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        .partners-swiper-pagination {
          position: static !important;
          margin-top: 2rem !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #dbeafe;
          opacity: 1;
          margin: 0 6px !important;
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
          transform: translateY(-4px) scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default Partners; 