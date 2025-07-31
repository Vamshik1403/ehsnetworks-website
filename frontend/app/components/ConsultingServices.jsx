'use client';
import React, { useState } from 'react';

const ConsultingServices = () => {
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const segments = [
    {
      id: 'audit',
      title: 'AUDIT',
      icon: '🔍',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-400 to-red-500',
      description: 'Assessment & Auditing'
    },
    {
      id: 'support',
      title: 'SUPPORT',
      icon: '🎧',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-500 to-blue-600',
      description: 'Customer Support'
    },
    {
      id: 'service',
      title: 'SERVICE',
      icon: '⚙️',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-400 to-orange-500',
      description: 'Service Management'
    },
    {
      id: 'planning',
      title: 'PLANNING',
      icon: '📋',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-400 to-cyan-500',
      description: 'Strategic Planning'
    }
  ];

  const assessmentServices = [
    'Capacity & Availability Assessment & Planning',
    'Security Assessment',
    'Network Assessment'
  ];

  const consultingServices = [
    'Software License & Compliance Management',
    'Infrastructure Consolidation and Optimization',
    'Application Performance Management',
    'DR Strategy Consultancy',
    'Data Centre optimization',
    'Virtualization'
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20">
      <div className="w-full px-4">
        {/* Banner Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-2xl animate-pulse-slow" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 animate-fade-in-up">
              Connect With Us For Free Consultation
            </h2>
            <button className="group bg-blue-900 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden relative">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 flex items-center space-x-2">
                Click Here 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>

        {/* Main Consulting Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 animate-fade-in-up">
            Consulting Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Card - Assessment/Audits */}
          <div className="group bg-white rounded-3xl shadow-xl p-8 transition-all duration-700 animate-fade-in-up hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                Assessment/Audits
              </h3>
              <div className="space-y-4">
                {assessmentServices.map((service, index) => (
                  <div 
                    key={service}
                    className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 animate-pulse-slow" />
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Center Circular Graphic */}
          <div className="relative flex justify-center">
            <div className="group relative w-80 h-80 bg-white rounded-full shadow-2xl p-8 transition-all duration-700 animate-fade-in-up hover:scale-105 hover:shadow-3xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Center text */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  Consulting
                </h3>
                <h4 className="text-lg font-semibold text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                  Services
                </h4>
              </div>

              {/* Four segments */}
              {segments.map((segment, index) => {
                const angle = (index * 90) - 45; // Start from top-left
                const radius = 120;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={segment.id}
                    className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${segment.bgColor} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-xl cursor-pointer ${
                      hoveredSegment === segment.id ? 'scale-125 z-20' : 'scale-100'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                    }}
                    onMouseEnter={() => setHoveredSegment(segment.id)}
                    onMouseLeave={() => setHoveredSegment(null)}
                  >
                    <div className="text-white text-lg font-bold animate-float-slow">
                      {segment.icon}
                    </div>
                    
                    {/* Tooltip */}
                    <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 transition-opacity duration-300 ${
                      hoveredSegment === segment.id ? 'opacity-100' : ''
                    }`}>
                      {segment.title}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                );
              })}

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-float-1" />
                <div className="absolute bottom-8 left-8 w-1 h-1 bg-purple-400 rounded-full animate-float-2" />
                <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-3" />
              </div>
            </div>
          </div>

          {/* Right Card - IT Consulting */}
          <div className="group bg-white rounded-3xl shadow-xl p-8 transition-all duration-700 animate-fade-in-up hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                IT Consulting
              </h3>
              <div className="space-y-4">
                {consultingServices.map((service, index) => (
                  <div 
                    key={service}
                    className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 animate-pulse-slow" />
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default ConsultingServices; 