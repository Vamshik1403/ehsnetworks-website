"use client";
import React from 'react';

export default function WirelessCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wireless <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive wireless solutions cover every aspect of modern connectivity, 
            ensuring your business stays ahead in the digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '📶',
              title: '5G Network Solutions',
              description: 'Deploy cutting-edge 5G networks with ultra-low latency and massive connectivity for IoT applications.',
              features: ['Network Planning', 'Infrastructure Setup', 'Performance Optimization']
            },
            {
              icon: '🌐',
              title: 'WiFi 6 Technology',
              description: 'Implement next-generation WiFi 6 for faster speeds, better coverage, and improved device handling.',
              features: ['Access Point Deployment', 'Channel Optimization', 'Security Implementation']
            },
            {
              icon: '📡',
              title: 'Satellite Communications',
              description: 'Reliable satellite connectivity solutions for remote locations and disaster recovery scenarios.',
              features: ['VSAT Installation', 'Bandwidth Management', 'Redundancy Planning']
            },
            {
              icon: '🔗',
              title: 'IoT Connectivity',
              description: 'Seamless IoT device connectivity with LPWAN, cellular, and mesh network solutions.',
              features: ['Device Integration', 'Network Management', 'Data Analytics']
            },
            {
              icon: '🔄',
              title: 'Mesh Networks',
              description: 'Self-healing mesh network solutions for robust and scalable wireless coverage.',
              features: ['Network Design', 'Automatic Failover', 'Load Balancing']
            },
            {
              icon: '🛡️',
              title: 'Wireless Security',
              description: 'Advanced security protocols and encryption for protecting wireless communications.',
              features: ['Encryption Standards', 'Access Control', 'Threat Detection']
            }
          ].map((capability, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {capability.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {capability.description}
              </p>
              <ul className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
