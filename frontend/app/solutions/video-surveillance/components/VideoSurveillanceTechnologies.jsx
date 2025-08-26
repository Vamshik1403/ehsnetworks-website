"use client";
import React from 'react';

export default function VideoSurveillanceTechnologies() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Video Surveillance <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest surveillance technologies and standards to deliver cutting-edge 
            solutions that meet the most demanding security requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Core Technologies
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: '📹',
                  title: 'IP Camera Systems',
                  description: 'High-definition IP cameras with advanced compression and network protocols.',
                  specs: ['4K Resolution', 'H.265 Compression', 'PoE Support', 'Night Vision']
                },
                {
                  icon: '🎥',
                  title: 'Recording Solutions',
                  description: 'Advanced DVR/NVR systems with intelligent storage and backup capabilities.',
                  specs: ['RAID Storage', 'Cloud Backup', 'Smart Recording', 'Multiple Formats']
                },
                {
                  icon: '🌐',
                  title: 'Network Infrastructure',
                  description: 'Robust network solutions for reliable video transmission and management.',
                  specs: ['Gigabit Ethernet', 'WiFi 6 Support', 'VPN Access', 'Bandwidth Management']
                }
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h4>
                      <p className="text-gray-600 mb-4">{tech.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tech.specs.map((spec, specIndex) => (
                          <span key={specIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Advanced Features
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: '🔍',
                  title: 'AI Analytics',
                  description: 'Intelligent video analytics for automated detection and monitoring.',
                  features: ['Motion Detection', 'Object Recognition', 'Behavior Analysis', 'Alert Systems']
                },
                {
                  icon: '🔒',
                  title: 'Security Protocols',
                  description: 'Enterprise-grade security with encryption and access control.',
                  features: ['Data Encryption', 'User Authentication', 'Access Control', 'Audit Logs']
                },
                {
                  icon: '📊',
                  title: 'Management Systems',
                  description: 'Centralized management with real-time monitoring and reporting.',
                  features: ['Centralized Control', 'Real-time Monitoring', 'Performance Reports', 'Remote Access']
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-1">
                        {feature.features.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
