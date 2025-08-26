"use client";
import React from 'react';

export default function VideoSurveillanceCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Video Surveillance <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive video surveillance solutions cover every aspect of modern security, 
            ensuring your premises are protected with cutting-edge CCTV technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '📹',
              title: 'IP Camera Systems',
              description: 'High-definition IP cameras with night vision and motion detection for comprehensive coverage.',
              features: ['4K Resolution', 'Night Vision', 'Motion Detection', 'Remote Access']
            },
            {
              icon: '🎥',
              title: 'HD Recording Solutions',
              description: 'Advanced DVR/NVR systems with extended storage and intelligent recording capabilities.',
              features: ['Extended Storage', 'Smart Recording', 'Multiple Formats', 'Backup Systems']
            },
            {
              icon: '🔍',
              title: 'AI Analytics',
              description: 'Intelligent video analytics for object detection, facial recognition, and behavior analysis.',
              features: ['Object Detection', 'Facial Recognition', 'Behavior Analysis', 'Alert Systems']
            },
            {
              icon: '🌐',
              title: 'Remote Monitoring',
              description: 'Cloud-based monitoring with mobile apps for real-time surveillance from anywhere.',
              features: ['Mobile Apps', 'Cloud Storage', 'Real-time Alerts', 'Multi-device Access']
            },
            {
              icon: '🔄',
              title: 'Integration Systems',
              description: 'Seamless integration with access control, alarm systems, and building management.',
              features: ['Access Control', 'Alarm Systems', 'Building Management', 'Centralized Control']
            },
            {
              icon: '🛡️',
              title: 'Cybersecurity',
              description: 'Enterprise-grade security with encryption and secure network protocols.',
              features: ['Data Encryption', 'Secure Protocols', 'Access Control', 'Audit Logs']
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
