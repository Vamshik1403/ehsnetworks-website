"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function DataCenterSecurity() {
  const [activeSecurity, setActiveSecurity] = useState(0);
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

  const securityFeatures = [
    {
      category: "Physical Security",
      icon: "🏢",
      color: "from-blue-500 to-blue-700",
      features: [
        { name: "Biometric Access Control", description: "Multi-factor authentication for facility access", icon: "👆" },
        { name: "24/7 Surveillance", description: "Advanced CCTV systems with AI monitoring", icon: "📹" },
        { name: "Security Personnel", description: "Trained security staff on-site", icon: "👮" },
        { name: "Perimeter Protection", description: "Multi-layered physical barriers", icon: "🚧" }
      ]
    },
    {
      category: "Network Security",
      icon: "🌐",
      color: "from-cyan-500 to-cyan-700",
      features: [
        { name: "Firewall Protection", description: "Next-generation firewall systems", icon: "🔥" },
        { name: "Intrusion Detection", description: "Real-time threat monitoring", icon: "🚨" },
        { name: "DDoS Protection", description: "Advanced DDoS mitigation", icon: "🛡️" },
        { name: "VPN Access", description: "Secure remote access solutions", icon: "🔐" }
      ]
    },
    {
      category: "Data Protection",
      icon: "💾",
      color: "from-indigo-500 to-indigo-700",
      features: [
        { name: "Encryption", description: "End-to-end data encryption", icon: "🔒" },
        { name: "Backup Security", description: "Secure backup and recovery", icon: "💿" },
        { name: "Access Control", description: "Role-based access management", icon: "👤" },
        { name: "Audit Logging", description: "Comprehensive activity tracking", icon: "📋" }
      ]
    },
    {
      category: "Compliance & Standards",
      icon: "📋",
      color: "from-slate-500 to-slate-700",
      features: [
        { name: "ISO 27001", description: "Information security management", icon: "🏆" },
        { name: "SOC 2 Type II", description: "Security and availability controls", icon: "✅" },
        { name: "GDPR Compliance", description: "Data protection regulations", icon: "🇪🇺" },
        { name: "Industry Standards", description: "HIPAA, PCI-DSS compliance", icon: "📊" }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Data Center Security & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multi-layered security solutions and compliance frameworks ensuring your 
            data center meets the highest standards of protection and regulatory requirements.
          </p>
        </div>

        {/* Security Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {securityFeatures.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveSecurity(index)}
              className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeSecurity === index
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.category}
            </button>
          ))}
        </div>

        {/* Security Features Display */}
        <div className="grid lg:grid-cols-2 gap-12">
          {securityFeatures[activeSecurity].features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${securityFeatures[activeSecurity].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl text-white">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Button */}
              <button className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Security Stats */}
        <div className={`mt-20 grid md:grid-cols-4 gap-8 text-center transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {[
            { number: "99.99%", label: "Uptime Guarantee", icon: "⏰" },
            { number: "256-bit", label: "Encryption Standard", icon: "🔐" },
            { number: "24/7", label: "Security Monitoring", icon: "👁️" },
            { number: "100%", label: "Compliance Rate", icon: "✅" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
