'use client';

import React from 'react';

const LetsGetInTouch = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-10 md:py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl animate-pulse-slow" />
      </div>
      
      {/* Yellow Accent Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg" />
      
      <div className="relative z-10 px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <div className="mb-3">
            <h3 className="text-sm md:text-base font-medium text-yellow-400 mb-2 tracking-wider uppercase">
              Let's Get in Touch
            </h3>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full" />
          </div>
          
          {/* Main Heading */}
          <div className="mb-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
              LET'S TALK ABOUT YOUR
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                BUSINESS IT SERVICES NEEDS
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our team of experts will create custom solutions to meet your every business needs.
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <a href="tel:+917718811771">
              <button className="group relative bg-white text-gray-900 px-10 py-5 rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-500 font-bold text-lg border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-110 hover:-translate-y-1">
                {/* Button Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Button Content */}
                <span className="relative flex items-center space-x-3">
                  <span>Contact Us</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default LetsGetInTouch;
