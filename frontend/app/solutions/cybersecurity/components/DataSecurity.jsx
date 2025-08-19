"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function DataSecurity() {
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

  const solutions = [
    {
      title: "Data Loss Prevention",
      description: "Data loss prevention (DLP) makes sure that users do not send sensitive or critical information outside the corporate network. The term describes software products that help a network administrator control the data that users can transfer.",
      icon: "📊",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Information Rights Management",
      description: "Information rights management (IRM) is a subset of digital rights management (DRM), technologies that protect sensitive information from unauthorized access. It is sometimes referred to as E-DRM or Enterprise Digital Rights Management.",
      icon: "🔐",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Identity Access Management",
      description: "Identity management, also known as identity and access management, is a framework of policies and technologies to ensure that the right users have the appropriate access to technology resources. IAM systems fall under the overarching umbrellas of IT security and data management.",
      icon: "👤",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data Security
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Data security refers to the process of protecting data from unauthorized access and data corruption 
              throughout its lifecycle. Data security includes data encryption, hashing, tokenization, and key 
              management practices that protect data across all applications and platforms.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg`}>
                  {solution.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Data Security Features */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Data Protection
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Encryption</h4>
                  <p className="text-gray-600">End-to-end encryption for data at rest and in transit</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Access Control</h4>
                  <p className="text-gray-600">Granular permissions and role-based access control</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Audit Trail</h4>
                  <p className="text-gray-600">Comprehensive logging and monitoring of data access</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Data Protection Features</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Data encryption</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Access monitoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Backup protection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Compliance support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to protect your sensitive data?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Secure Your Data
          </button>
        </div>
      </div>
    </section>
  );
}
