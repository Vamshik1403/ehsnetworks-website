'use client';

import React, { useState, useEffect } from 'react';

const QuickFacts = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Content Card */}
        <div className="group relative">
          {/* Premium Glass Card */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="particle-1 absolute top-8 right-12 w-3 h-3 bg-blue-400/60 rounded-full animate-float-1" />
              <div className="particle-2 absolute bottom-16 left-16 w-2 h-2 bg-purple-400/60 rounded-full animate-float-2" />
              <div className="particle-3 absolute top-1/2 right-1/4 w-4 h-4 bg-indigo-400/40 rounded-full animate-float-3" />
            </div>

            {/* Content Container */}
            <div className="relative z-10">
              {/* Main Heading with Premium Styling */}
              <div className="text-center mb-12">
                {/* <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold mb-6 shadow-lg transform group-hover:scale-105 transition-all duration-500">
                  <span className="mr-2">🚀</span>
                  Technology Transformation Partner
                </div> */}
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6 leading-tight animate-fade-in-up">
                  ENPL - Your Technology
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Transformation Partner
                  </span>
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>

              {/* Subheading with Enhanced Typography */}
              <div className="text-center mb-12 max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 leading-relaxed animate-fade-in-up delay-200">
                  We focus on bringing 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
                    {" "}exceptional value{" "}
                  </span>
                  and solve complex business challenges through the delivery of 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold">
                    {" "}modern IT services and solutions
                  </span>
                </h3>
              </div>

              {/* Enhanced Description with Cards Layout */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* Service Excellence Card */}
                <div className="group/card bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50 hover:border-blue-300/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-blue-900">Service Excellence</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive IT consultancy and expert installation services tailored to your business needs.
                  </p>
                </div>

                {/* Cloud Solutions Card */}
                <div className="group/card bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border border-purple-200/50 hover:border-purple-300/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-purple-900">Cloud Solutions</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Advanced cloud infrastructure, migration, and optimization services for modern enterprises.
                  </p>
                </div>

                {/* Custom Solutions Card */}
                <div className="group/card bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 border border-indigo-200/50 hover:border-indigo-300/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-indigo-900">Custom Solutions</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Tailored IT solutions designed specifically for your unique business requirements and challenges.
                  </p>
                </div>
              </div>

              {/* Enhanced Description Text */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-2xl p-8 border border-gray-200/50">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto animate-fade-in-up delay-300">
                    We provide a comprehensive range of 
                    <span className="font-semibold text-blue-700"> Information Technology services </span>
                    designed to maximize business productivity and drive digital transformation. From strategic consultancy to expert implementation, 
                    <span className="font-semibold text-purple-700"> outsourcing solutions </span>
                    to cutting-edge cloud infrastructure, we deliver end-to-end IT excellence. Our initial focus was providing complete information technology solutions for companies, and in response to evolving customer needs, we've expanded our portfolio with 
                    <span className="font-semibold text-indigo-700"> customized IT solutions </span>
                    that adapt and grow with your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Hover shine effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute -left-32 top-0 w-40 h-full transform -skew-x-12 bg-gradient-to-r from-white/20 via-white/10 to-transparent animate-shine" />
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
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in-up.delay-300 {
          animation-delay: 0.3s;
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
        }
        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-8px) scale(1.1); opacity: 1; }
        }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-12px) scale(1.2); opacity: 0.8; }
        }
        .animate-float-3 { animation: float-3 6s ease-in-out infinite; }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(200%) skewX(-12deg); opacity: 0; }
        }
        .animate-shine { animation: shine 1.5s ease-in-out forwards; }
        
        /* Premium glass effect */
        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
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

export default QuickFacts; 