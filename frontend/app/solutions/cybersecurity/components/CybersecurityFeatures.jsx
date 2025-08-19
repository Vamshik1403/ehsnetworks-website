"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function CybersecurityFeatures() {
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
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms for real-time threat identification.",
      icon: "🤖",
      color: "from-red-400 to-red-600"
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous security oversight with automated threat response.",
      icon: "👁️",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Multi-Layer Protection",
      description: "Comprehensive security across all attack vectors and entry points.",
      icon: "🛡️",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance with industry standards and regulations.",
      icon: "📋",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Rapid Response",
      description: "Quick incident response and recovery capabilities.",
      icon: "⚡",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Scalable Security",
      description: "Security solutions that grow with your business needs.",
      icon: "📈",
      color: "from-green-400 to-green-600"
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
              Advanced Cybersecurity Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Advanced features that make ENPL Cybersecurity the ideal choice for enterprise security
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
              Why Choose ENPL Cybersecurity?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Proactive Defense</h4>
                  <p className="text-gray-600">Prevent attacks before they happen with advanced threat intelligence</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">Certified cybersecurity professionals with years of experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cost Effective</h4>
                  <p className="text-gray-600">Comprehensive protection without breaking your budget</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Security Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Threat Detection Rate</span>
                  <span className="font-bold text-red-600">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Response Time</span>
                  <span className="font-bold text-orange-600">&lt; 5min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Uptime</span>
                  <span className="font-bold text-yellow-600">99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
