"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AppModernisationPartners() {
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
      name: "Red Hat",
      logo: "🔴",
      description: "Enterprise open source solutions",
      color: "from-red-500 to-red-700"
    },
    {
      name: "IBM",
      logo: "🔵",
      description: "Cloud and AI solutions",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Dell Technologies",
      logo: "💎",
      description: "TITANIUM PARTNER",
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "SmartHub.ai",
      logo: "🌟",
      description: "AI-powered solutions",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      name: "Outsystems",
      logo: "⚫",
      description: "Low-code development platform",
      color: "from-red-600 to-red-800"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(partners.length / 3)) % Math.ceil(partners.length / 3));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading technology providers to deliver best-in-class 
            application modernisation solutions.
          </p>
        </div>

        {/* Partners Carousel */}
        <div className={`relative transform transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-16">
            {partners.slice(currentSlide * 3, (currentSlide * 3) + 3).map((partner, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Logo */}
                <div className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{partner.logo}</span>
                </div>

                {/* Name */}
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {partner.name}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-center">
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
                  currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
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
              innovative solutions to businesses worldwide.
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
