'use client';
import React from 'react';

const ServiceCards = () => {
  const services = [
    {
      title: 'Managed Services',
      icon: '/main-images/managed-services-icon.png',
      services: [
        'Capacity & Availability Assessment & Planning',
        'Security Assessment',
        'Network Assessment'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      iconBg: 'from-blue-400 to-blue-500'
    },
    {
      title: 'Support Services',
      icon: '/main-images/support-services-icon.png',
      services: [
        'Facility Management',
        'Warranty Services',
        'Annual Maintenance',
        'Spare'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      iconBg: 'from-green-400 to-green-500'
    },
    {
      title: 'End Points',
      icon: '/main-images/endpoints-icon.png',
      services: [
        'Laptops',
        'Desktops',
        'Workstations',
        'Tablets',
        'Thin Clients',
        'LFDs',
        'IT Peripherals',
        'Software Services'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      iconBg: 'from-purple-400 to-purple-500'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 blur-3xl animate-pulse-slow" />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl shadow-xl p-8 transition-all duration-700 animate-fade-in-up hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
              
              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-float-1" />
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-float-2" />
                <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-3" />
              </div>

              {/* Icon Container */}
              <div className="relative z-10 mb-8">
                <div className={`w-24 h-24 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.iconBg} shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 animate-float-slow`}>
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* Title */}
              <div className="relative z-10 mb-6">
                <h3 className={`text-2xl font-bold text-center bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {service.title}
                </h3>
              </div>

              {/* Services List */}
              <div className="relative z-10 space-y-3">
                {service.services.map((item, itemIndex) => (
                  <div 
                    key={item}
                    className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: `${itemIndex * 50}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0 animate-pulse-slow`} />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Navigation Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`} />
            </div>
          ))}
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

export default ServiceCards; 