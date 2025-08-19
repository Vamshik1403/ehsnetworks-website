"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PrivateCloudHero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="mb-6">
              <div className="text-2xl font-bold text-red-600 mb-2">
                ENPL Office Automation -
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Unleashing the Power of
                <br />
                <span className="text-blue-600">Apex Private Cloud</span>
                <br />
                <span className="text-gray-800">Solutions</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the cutting-edge ENPL Office Automation, leveraging Apex Private Cloud 
              to revolutionize your business's IT infrastructure. Tailored for performance, 
              security, and flexibility, ENPL offers a dedicated, scalable computing environment 
              whether hosted on-premises or in a managed environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Isometric Illustration */}
          <div className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Cloud Infrastructure */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Main Cloud */}
                  <div className="w-80 h-60 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-2xl animate-float-slow relative overflow-hidden">
                    {/* Server Racks Inside Cloud */}
                    <div className="absolute inset-8 flex items-center justify-center space-x-4">
                      <div className="w-16 h-24 bg-white/20 rounded-lg border border-white/30"></div>
                      <div className="w-16 h-24 bg-white/20 rounded-lg border border-white/30"></div>
                      <div className="w-16 h-24 bg-white/20 rounded-lg border border-white/30"></div>
                    </div>
                    
                    {/* Glowing Interior */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-300/50 to-indigo-400/50 rounded-full"></div>
                  </div>

                  {/* Server Racks Connected */}
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg relative">
                      <div className="absolute inset-2 bg-blue-300 rounded"></div>
                      <div className="absolute top-2 left-2 w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                      <div className="absolute top-6 left-2 w-3 h-3 bg-blue-600 rounded-full animate-pulse animation-delay-500"></div>
                      <div className="absolute top-10 left-2 w-3 h-3 bg-blue-600 rounded-full animate-pulse animation-delay-1000"></div>
                    </div>
                  </div>

                  <div className="absolute -top-16 right-20">
                    <div className="w-20 h-32 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg shadow-lg relative">
                      <div className="absolute inset-2 bg-indigo-300 rounded"></div>
                      <div className="absolute top-2 left-2 w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
                      <div className="absolute top-6 left-2 w-3 h-3 bg-indigo-600 rounded-full animate-pulse animation-delay-300"></div>
                      <div className="absolute top-10 left-2 w-3 h-3 bg-indigo-600 rounded-full animate-pulse animation-delay-600"></div>
                    </div>
                  </div>

                  {/* People Working */}
                  <div className="absolute -bottom-16 left-20">
                    <div className="flex items-center space-x-4">
                      {/* Person 1 - Standing */}
                      <div className="w-12 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-300 rounded-full"></div>
                      </div>
                      
                      {/* Person 2 - Standing */}
                      <div className="w-12 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* People at Desks */}
                  <div className="absolute -bottom-20 right-20">
                    <div className="flex items-center space-x-6">
                      {/* Desk 1 */}
                      <div className="relative">
                        <div className="w-16 h-12 bg-gray-300 rounded-lg"></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full"></div>
                      </div>
                      
                      {/* Desk 2 */}
                      <div className="relative">
                        <div className="w-16 h-12 bg-gray-300 rounded-lg"></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Large Screen with Data */}
                  <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg shadow-lg relative">
                      <div className="absolute inset-2 bg-white rounded flex items-center justify-center">
                        <div className="flex space-x-1">
                          <div className="w-2 h-8 bg-blue-500 rounded"></div>
                          <div className="w-2 h-12 bg-green-500 rounded"></div>
                          <div className="w-2 h-6 bg-red-500 rounded"></div>
                          <div className="w-2 h-10 bg-yellow-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                        </linearGradient>
                      </defs>
                      <path d="M 200 80 L 200 60" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
                      <path d="M 240 84 L 260 68" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
                      <path d="M 160 84 L 140 68" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
                      <path d="M 200 200 L 200 240" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
                      <path d="M 200 200 L 160 240" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
                      <path d="M 200 200 L 240 240" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className={`text-center mt-20 transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
            <p className="text-2xl font-semibold text-gray-800 italic">
              "Empower Your Cloud Business : Elevate Efficiency, Securely Scale, and Innovate Unleashed with Apex Private Cloud Solutions."
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
