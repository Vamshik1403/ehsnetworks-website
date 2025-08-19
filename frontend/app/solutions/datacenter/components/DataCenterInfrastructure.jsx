"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function DataCenterInfrastructure() {
  const [activeTab, setActiveTab] = useState(0);
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

  const infrastructure = [
    {
      title: "Facility Design",
      icon: "🏗️",
      description: "State-of-the-art data center facilities designed for maximum efficiency and scalability",
      features: [
        "Modular Design Architecture",
        "Scalable Floor Plans",
        "Environmental Controls",
        "Access Management Systems"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Power Systems",
      icon: "⚡",
      description: "Redundant power infrastructure ensuring 99.99% uptime and reliability",
      features: [
        "Uninterruptible Power Supply",
        "Redundant Power Feeds",
        "Backup Generators",
        "Power Distribution Units"
      ],
      color: "from-cyan-500 to-cyan-700"
    },
    {
      title: "Cooling & HVAC",
      icon: "❄️",
      description: "Advanced cooling systems maintaining optimal temperature and humidity levels",
      features: [
        "Precision Air Conditioning",
        "Hot/Cold Aisle Containment",
        "Liquid Cooling Solutions",
        "Environmental Monitoring"
      ],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Network Infrastructure",
      icon: "🌐",
      description: "High-speed networking with redundant connectivity and low-latency performance",
      features: [
        "Fiber Optic Cabling",
        "Redundant Internet Connections",
        "Load Balancing",
        "Traffic Management"
      ],
      color: "from-slate-500 to-slate-700"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Data Center Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive infrastructure solutions that form the foundation of modern, 
            efficient, and reliable data center operations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {infrastructure.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className={`p-8 rounded-3xl bg-gradient-to-br ${infrastructure[activeTab].color} text-white shadow-2xl`}>
              <div className="text-6xl mb-6">{infrastructure[activeTab].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{infrastructure[activeTab].title}</h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                {infrastructure[activeTab].description}
              </p>
              
              <div className="space-y-3">
                {infrastructure[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">High Availability</h4>
                    <p className="text-gray-600">99.99% uptime guaranteed with redundant systems</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Energy Efficient</h4>
                    <p className="text-gray-600">Optimized systems reducing power consumption</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Scalable Design</h4>
                    <p className="text-gray-600">Grow your infrastructure as your needs expand</p>
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
