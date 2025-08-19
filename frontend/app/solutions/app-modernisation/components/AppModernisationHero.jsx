"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AppModernisationHero() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(0,0,0,0.02) 10px,
          rgba(0,0,0,0.02) 20px
        )`
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          
          {/* Main Title Block */}
          <div className="relative inline-block mb-12">
            {/* Blue Bar */}
            <div className="absolute top-0 left-0 w-16 h-2 bg-blue-500 rounded-full transform -translate-y-2"></div>
            
            {/* Title Container */}
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative">
              <div className="text-left">
                <div className="text-lg font-medium text-gray-600 mb-2">ENPL's</div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Application Modernisation
                  <br />
                  <span className="text-blue-600">Services</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Abstract Graphics */}
          <div className="relative">
            {/* Orange Rectangle with Grid */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 rounded-2xl transform translate-x-8 -translate-y-8 opacity-80 animate-float-slow">
              <div className="grid grid-cols-3 gap-1 p-3">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-800 rounded-sm"></div>
                ))}
              </div>
            </div>

            {/* Large Circle with Device */}
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-2xl animate-float-slow animation-delay-1000"></div>
              
              {/* Device */}
              <div className="absolute inset-8 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="w-32 h-48 bg-red-500 rounded-xl relative">
                  {/* Screen Content */}
                  <div className="absolute inset-2 bg-white rounded-lg flex flex-col items-center justify-center space-y-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-4 left-4 text-2xl animate-bounce">☁️</div>
              <div className="absolute top-8 right-8 text-xl animate-bounce animation-delay-500">🔒</div>
              <div className="absolute bottom-8 left-8 text-xl animate-bounce animation-delay-1000">&lt;/&gt;</div>
              <div className="absolute bottom-4 right-4 text-xl animate-bounce animation-delay-1500">🎵</div>
              <div className="absolute top-1/2 left-2 text-xl animate-bounce animation-delay-2000">💡</div>
              
              {/* Dots */}
              <div className="absolute top-2 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 right-4 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-300"></div>
              <div className="absolute bottom-1/4 left-6 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-600"></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Learn More
            </button>
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
