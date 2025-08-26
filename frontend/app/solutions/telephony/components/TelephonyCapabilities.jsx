"use client";
import React from 'react';

export default function TelephonyCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Telephony <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive telephony solutions cover every aspect of modern communication, 
            ensuring your business stays connected with cutting-edge voice and video technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '📞',
              title: 'VoIP Systems',
              description: 'Enterprise-grade Voice over IP solutions with HD audio quality and advanced features.',
              features: ['HD Audio Quality', 'Call Recording', 'Voicemail', 'Call Forwarding']
            },
            {
              icon: '🎧',
              title: 'Unified Communications',
              description: 'Integrated communication platform combining voice, video, chat, and collaboration tools.',
              features: ['Video Conferencing', 'Instant Messaging', 'File Sharing', 'Team Collaboration']
            },
            {
              icon: '💬',
              title: 'Video Calling',
              description: 'High-definition video calling with screen sharing and recording capabilities.',
              features: ['HD Video', 'Screen Sharing', 'Recording', 'Multi-party Calls']
            },
            {
              icon: '📱',
              title: 'Mobile Integration',
              description: 'Seamless mobile connectivity with softphone apps and mobile number portability.',
              features: ['Softphone Apps', 'Mobile Numbers', 'Call Transfer', 'Presence Management']
            },
            {
              icon: '🔄',
              title: 'Call Center Solutions',
              description: 'Advanced call center features with analytics, reporting, and workforce management.',
              features: ['Call Analytics', 'Performance Reports', 'Workforce Management', 'Quality Monitoring']
            },
            {
              icon: '🛡️',
              title: 'Security & Compliance',
              description: 'Enterprise-grade security with encryption, authentication, and compliance standards.',
              features: ['Call Encryption', 'Authentication', 'Compliance Standards', 'Audit Logs']
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
