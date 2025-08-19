"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PublicCloudPartners() {
  const [isVisible, setIsVisible] = useState(false);
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
      name: "Microsoft",
      logo: "🔵",
      description: "Azure integration and enterprise solutions",
      category: "Cloud Platform"
    },
    {
      name: "Amazon",
      logo: "☁️",
      description: "AWS services and infrastructure",
      category: "Cloud Platform"
    },
    {
      name: "Google",
      logo: "🌐",
      description: "Google Cloud Platform services",
      category: "Cloud Platform"
    },
    {
      name: "VMware",
      logo: "⚡",
      description: "Virtualization and cloud management",
      category: "Infrastructure"
    },
    {
      name: "Red Hat",
      logo: "🔴",
      description: "Open source enterprise solutions",
      category: "Infrastructure"
    },
    {
      name: "Dell",
      logo: "💻",
      description: "Enterprise hardware and solutions",
      category: "Hardware"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology Partners & Alliances
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We partner with leading technology providers to deliver comprehensive public cloud solutions and enterprise-grade infrastructure.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{partner.logo}</div>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {partner.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {partner.name}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-16 transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Partnership Benefits
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Certified Solutions</h4>
                  <p className="text-gray-600">Official certifications and validated solutions from our partners</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Support</h4>
                  <p className="text-gray-600">Access to partner expertise and technical support</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Innovation Access</h4>
                  <p className="text-gray-600">Early access to new technologies and features</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h4>
              <p className="text-lg text-gray-700 mb-6">
                We leverage our strategic partnerships to deliver innovative public cloud solutions to businesses worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Strategic alliances</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Joint solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Co-innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Become a Partner
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join our ecosystem of technology partners and help us deliver innovative public cloud solutions
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
