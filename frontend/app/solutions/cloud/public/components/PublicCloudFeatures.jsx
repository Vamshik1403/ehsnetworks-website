"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PublicCloudFeatures() {
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

  const features = [
    {
      title: "Scalability & Elasticity",
      description: "Public clouds emphasize automation and orchestration of IT processes.",
      icon: "📈",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Global Infrastructure",
      description: "Deploy applications across multiple regions with low-latency access.",
      icon: "🌍",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Cost Optimization",
      description: "Pay only for what you use with flexible pricing models.",
      icon: "💰",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Security & Compliance",
      description: "ENPL ensures robust security features for Public Cloud.",
      icon: "🔒",
      color: "from-red-400 to-red-600"
    },
    {
      title: "Managed Services",
      description: "Focus on your business while we manage the infrastructure.",
      icon: "⚙️",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring.",
      icon: "🛠️",
      color: "from-indigo-400 to-indigo-600"
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
              Advanced Public Cloud Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Advanced features that make ENPL Public Cloud the ideal choice for enterprise environments
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className={`mt-20 grid lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose ENPL Public Cloud?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Enterprise-Grade Security</h4>
                  <p className="text-gray-600">Advanced security features and compliance certifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Performance</h4>
                  <p className="text-gray-600">Low-latency access from anywhere in the world</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cost Optimization</h4>
                  <p className="text-gray-600">Intelligent resource management and cost controls</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Performance Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Uptime SLA</span>
                  <span className="font-bold text-green-600">99.99%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Response Time</span>
                  <span className="font-bold text-blue-600">&lt; 50ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Global Regions</span>
                  <span className="font-bold text-purple-600">25+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
