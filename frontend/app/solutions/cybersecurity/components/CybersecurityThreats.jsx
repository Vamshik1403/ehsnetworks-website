"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function CybersecurityThreats() {
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

  const threats = [
    {
      name: "Phishing Attacks",
      description: "Deceptive emails and messages designed to steal sensitive information",
      icon: "🎣",
      color: "from-red-400 to-red-600",
      protection: "Advanced email filtering and employee training"
    },
    {
      name: "Ransomware",
      description: "Malicious software that encrypts files and demands payment",
      icon: "🔐",
      color: "from-orange-400 to-orange-600",
      protection: "Real-time threat detection and backup systems"
    },
    {
      name: "Data Breaches",
      description: "Unauthorized access to sensitive business information",
      icon: "💥",
      color: "from-yellow-400 to-yellow-600",
      protection: "Multi-layer encryption and access controls"
    },
    {
      name: "DDoS Attacks",
      description: "Overwhelming network resources to disrupt services",
      icon: "🌊",
      color: "from-blue-400 to-blue-600",
      protection: "Traffic filtering and load balancing"
    },
    {
      name: "Insider Threats",
      description: "Security risks from within the organization",
      icon: "👤",
      color: "from-purple-400 to-purple-600",
      protection: "User behavior monitoring and access management"
    },
    {
      name: "Zero-Day Exploits",
      description: "Unknown vulnerabilities in software and systems",
      icon: "❓",
      color: "from-green-400 to-green-600",
      protection: "Proactive vulnerability scanning and patching"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Understanding Cyber Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Learn about common cyber threats and how ENPL Cybersecurity protects your business
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {threats.map((threat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-20 h-20 bg-gradient-to-r ${threat.color} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg`}>
                  {threat.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {threat.name}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {threat.description}
                </p>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Protection:</h4>
                  <p className="text-sm text-gray-600">{threat.protection}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Threat Statistics */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Growing Threat Landscape
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rising Attack Frequency</h4>
                  <p className="text-gray-600">Cyber attacks are increasing by 15% annually worldwide</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sophisticated Threats</h4>
                  <p className="text-gray-600">Attackers are using AI and automation to scale their operations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Targeted Attacks</h4>
                  <p className="text-gray-600">Businesses are increasingly targeted for financial gain</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Threat Statistics</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Phishing Attempts</span>
                  <span className="text-2xl font-bold text-red-600">3.4B/day</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Ransomware Attacks</span>
                  <span className="text-2xl font-bold text-orange-600">1.7M/day</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Data Breaches</span>
                  <span className="text-2xl font-bold text-yellow-600">2,200/day</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Cost of Cybercrime</span>
                  <span className="text-2xl font-bold text-blue-600">$6T/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't Wait Until It's Too Late
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Protect your business from cyber threats with ENPL Cybersecurity
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Protected Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
