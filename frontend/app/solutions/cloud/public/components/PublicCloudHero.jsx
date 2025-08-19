"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PublicCloudHero() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="mb-6">
              <div className="text-2xl font-bold text-green-600 mb-2">
                ENPL Office Automation -
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Harness the Power of
                <br />
                <span className="text-green-600">Public Cloud</span>
                <br />
                <span className="text-gray-800">Solutions</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the cutting-edge ENPL Office Automation, leveraging Public Cloud 
              to revolutionize your business's IT infrastructure. Scalable, cost-effective, 
              and globally accessible, ENPL offers enterprise-grade cloud solutions 
              that grow with your business needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Cloud Infrastructure Illustration */}
          <div className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Cloud Infrastructure */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Main Cloud */}
                  <div className="w-80 h-60 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-2xl animate-float-slow relative overflow-hidden">
                    {/* Server Icons Inside Cloud */}
                    <div className="absolute inset-8 flex items-center justify-center space-x-4">
                      <div className="w-16 h-24 bg-white/20 rounded-lg border border-white/30"></div>
                      <div className="w-16 h-24 bg-white/20 rounded-lg border border-white/30"></div>
                      <div className="w-16 h-24 bg-white/20 rounded-lg border border-white/30"></div>
                    </div>
                    
                    {/* Glowing Interior */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-300/50 to-blue-400/50 rounded-full"></div>
                  </div>

                  {/* Connected Data Centers */}
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow-lg relative">
                      <div className="absolute inset-2 bg-white/20 rounded border border-white/30"></div>
                      <div className="absolute inset-4 bg-white/20 rounded border border-white/30"></div>
                    </div>
                  </div>

                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg relative">
                      <div className="absolute inset-2 bg-white/20 rounded border border-white/30"></div>
                      <div className="absolute inset-4 bg-white/20 rounded border border-white/30"></div>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-1 h-20 bg-gradient-to-b from-green-400 to-transparent"></div>
                    <div className="w-1 h-20 bg-gradient-to-t from-blue-400 to-transparent"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-10 right-10 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 left-10 w-6 h-6 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute top-20 right-20 opacity-20 animate-float-slow">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg transform rotate-12"></div>
      </div>
      
      <div className="absolute bottom-20 left-20 opacity-20 animate-float-slow animation-delay-2000">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
}
