"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PublicCloudIntegration() {
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

  const integrations = [
    {
      name: "AWS",
      description: "Seamless integration with Amazon Web Services",
      icon: "☁️",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Azure",
      description: "Full compatibility with Microsoft Azure",
      icon: "🔵",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Google Cloud",
      description: "Integration with Google Cloud Platform",
      icon: "🌐",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Kubernetes",
      description: "Native Kubernetes support and management",
      icon: "⚓",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Docker",
      description: "Container orchestration and management",
      icon: "🐳",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Terraform",
      description: "Infrastructure as Code automation",
      icon: "🏗️",
      color: "from-purple-400 to-purple-600"
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
              Seamless Integration & Compatibility
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our ENPL Public Cloud solutions are designed to integrate seamlessly with your
              existing infrastructure and tools, combining the innovation of Public Cloud with a suite of services designed to
              transform your business operations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-20 h-20 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg`}>
                  {integration.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {integration.name}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Integration Benefits
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Seamless Migration</h4>
                  <p className="text-gray-600">Easy migration from existing cloud platforms with minimal downtime</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Multi-Cloud Support</h4>
                  <p className="text-gray-600">Manage multiple cloud environments from a single platform</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">API Compatibility</h4>
                  <p className="text-gray-600">RESTful APIs for easy integration with existing systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Integration Features</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Multi-cloud management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">API-first architecture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Automated workflows</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Real-time monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Integrate?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our team can design and implement custom public cloud solutions
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Integration Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
