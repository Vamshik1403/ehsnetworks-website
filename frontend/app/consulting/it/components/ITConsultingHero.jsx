"use client";
import React from 'react';
import Link from 'next/link';

export default function ITConsultingHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 blur-3xl" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 px-4 pt-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                IT Consulting
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Strategic Technology Solutions &
                  <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Business Growth
                  </span>
                </h1>
              </div>
              
              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Expert IT consulting services to help your business leverage cutting-edge technology, 
                  optimize infrastructure, and drive digital transformation for sustainable growth and competitive advantage.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                    <span className="relative flex items-center space-x-3">
                      <span>Get IT Consultation</span>
                      <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </Link>
                
                <a href="tel:+917718811771">
                  <button className="group px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                    <span className="flex items-center space-x-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Now</span>
                    </span>
                  </button>
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600 text-sm">IT Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">95%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">IT Support</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-200 to-cyan-200 blur-3xl" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Why Choose Our IT Consulting Solutions?</h3>
                  <div className="space-y-4">
                    {[
                      'Strategic IT consulting tailored to your business needs',
                      'Infrastructure optimization for improved performance',
                      'Security assessment and compliance management',
                      'Expert team with proven track record',
                      '24/7 support and monitoring services',
                      'Cutting-edge technologies and best practices'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
