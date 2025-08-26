"use client";

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 to-white overflow-hidden">
      {/* Background subtle patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200/30 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-200/30 rounded-full blur-lg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-2 mt-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-900 leading-tight tracking-tight">
              <span className="block">PERSONALIZED</span>
              <span className="block">TECHNOLOGY</span>
              <span className="block">SOLUTIONS FOR</span>
              <span className="block">YOUR BUSINESS</span>
            </h1>
            
            {/* Sub-heading */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-900 font-medium leading-relaxed">
              IT Services, Consulting & Custom Software
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Side: 3D Cloud with Server Racks Graphic */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Main Cloud Container */}
              <div className="relative">
                {/* Cloud Background */}
                <div className="w-80 h-64 bg-gradient-to-br from-teal-400 to-blue-500 rounded-[100px] shadow-2xl relative overflow-hidden">
                  {/* Cloud Highlights */}
                  <div className="absolute top-4 left-8 w-24 h-16 bg-teal-300/40 rounded-full blur-sm" />
                  <div className="absolute top-8 right-12 w-20 h-12 bg-teal-300/30 rounded-full blur-sm" />
                  <div className="absolute bottom-6 left-16 w-16 h-10 bg-teal-300/50 rounded-full blur-sm" />
                  
                  {/* Server Racks Inside Cloud */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3 p-8">
                      {/* Left Column of Server Racks */}
                      <div className="space-y-2">
                        <div className="w-16 h-8 bg-teal-600 rounded-sm shadow-inner relative">
                          <div className="absolute inset-1 bg-teal-400 rounded-sm opacity-80" />
                          <div className="absolute top-1 left-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" />
                          <div className="absolute top-1 right-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </div>
                        <div className="w-16 h-8 bg-teal-600 rounded-sm shadow-inner relative">
                          <div className="absolute inset-1 bg-teal-400 rounded-sm opacity-80" />
                          <div className="absolute top-1 left-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                          <div className="absolute top-1 right-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                        </div>
                        <div className="w-16 h-8 bg-teal-600 rounded-sm shadow-inner relative">
                          <div className="absolute inset-1 bg-teal-400 rounded-sm opacity-80" />
                          <div className="absolute top-1 left-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                          <div className="absolute top-1 right-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
                        </div>
                      </div>
                      
                      {/* Right Column of Server Racks */}
                      <div className="space-y-2">
                        <div className="w-16 h-8 bg-teal-600 rounded-sm shadow-inner relative">
                          <div className="absolute inset-1 bg-teal-400 rounded-sm opacity-80" />
                          <div className="absolute top-1 left-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                          <div className="absolute top-1 right-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
                        </div>
                        <div className="w-16 h-8 bg-teal-600 rounded-sm shadow-inner relative">
                          <div className="absolute inset-1 bg-teal-400 rounded-sm opacity-80" />
                          <div className="absolute top-1 left-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }} />
                          <div className="absolute top-1 right-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }} />
                        </div>
                        <div className="w-16 h-8 bg-teal-600 rounded-sm shadow-inner relative">
                          <div className="absolute inset-1 bg-teal-400 rounded-sm opacity-80" />
                          <div className="absolute top-1 left-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '2.3s' }} />
                          <div className="absolute top-1 right-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '2.8s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Circuit Lines and Network Nodes */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  {/* Main Circuit Line */}
                  <div className="w-1 h-16 bg-gradient-to-b from-teal-400 to-blue-300 mx-auto relative">
                    {/* Branching Lines */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-8">
                      {/* Left Branch */}
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-0.5 h-8 bg-gradient-to-t from-teal-400 to-blue-300" />
                        <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg animate-pulse" />
                      </div>
                      
                      {/* Center Branch */}
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-0.5 h-12 bg-gradient-to-t from-teal-400 to-blue-300" />
                        <div className="w-4 h-4 bg-blue-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </div>
                      
                      {/* Right Branch */}
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-0.5 h-6 bg-gradient-to-t from-teal-400 to-blue-300" />
                        <div className="w-2.5 h-2.5 bg-blue-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Floating Elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-teal-300/60 rounded-full animate-float-slow" />
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-blue-300/60 rounded-full animate-float-slow" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 -left-8 w-3 h-3 bg-cyan-300/60 rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;