"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PrivateCloudPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    {
      name: "VMware",
      logo: "🔵",
      description: "Principal Partner Digital Workspace",
      color: "from-blue-500 to-blue-700",
      badge: "Principal Partner"
    },
    {
      name: "VMware",
      logo: "🔵",
      description: "Principal Partner Data Center Virtualization",
      color: "from-blue-500 to-blue-700",
      badge: "Principal Partner"
    },
    {
      name: "VMware",
      logo: "🔵",
      description: "Principal Partner Cloud Management and Automation",
      color: "from-blue-500 to-blue-700",
      badge: "Principal Partner"
    },
    {
      name: "AWS Partner Network",
      logo: "🟠",
      description: "Standard Technology Partner",
      color: "from-orange-500 to-orange-700",
      badge: "Technology Partner"
    },
    {
      name: "Google Cloud Partner",
      logo: "🌈",
      description: "Google Cloud Partner",
      color: "from-blue-500 to-green-500",
      badge: "Cloud Partner"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(partners.length / 3)) % Math.ceil(partners.length / 3));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float-slow animation-delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Partners
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We collaborate with leading technology providers to deliver best-in-class 
            private cloud solutions and enterprise-grade infrastructure.
          </p>
        </div>

        {/* Partners Carousel */}
        <div className={`relative transform transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full shadow-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full shadow-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-16">
            {partners.slice(currentSlide * 3, (currentSlide * 3) + 3).map((partner, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-white/20 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Badge */}
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                    {partner.badge}
                  </span>
                </div>

                {/* Logo */}
                <div className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{partner.logo}</span>
                </div>

                {/* Name */}
                <h4 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-blue-300 transition-colors duration-300">
                  {partner.name}
                </h4>

                {/* Description */}
                <p className="text-blue-200 text-center text-sm">
                  {partner.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-500`}></div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(Math.ceil(partners.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-400 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Partner with ENPL</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our ecosystem of technology partners and help us deliver 
              innovative private cloud solutions to businesses worldwide.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
