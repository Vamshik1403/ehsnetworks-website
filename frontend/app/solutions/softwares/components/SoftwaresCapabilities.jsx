"use client";
import React from 'react';

export default function SoftwaresCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Softwares <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive software solutions cover every aspect of modern business applications, 
            ensuring your business has the tools needed to streamline operations and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '💾',
              title: 'Enterprise Applications',
              description: 'Custom enterprise software solutions tailored to your business requirements.',
              features: ['Custom Development', 'Business Logic', 'User Management', 'Reporting Systems']
            },
            {
              icon: '🖥️',
              title: 'Custom Development',
              description: 'Tailored software development with modern technologies and best practices.',
              features: ['Modern Frameworks', 'Best Practices', 'Code Quality', 'Performance Optimization']
            },
            {
              icon: '🔧',
              title: 'System Integration',
              description: 'Seamless integration with existing systems and third-party applications.',
              features: ['API Development', 'Data Migration', 'System Compatibility', 'Real-time Sync']
            },
            {
              icon: '📱',
              title: 'Mobile Applications',
              description: 'Cross-platform mobile apps with native performance and modern UI/UX.',
              features: ['iOS & Android', 'Responsive Design', 'Offline Capability', 'Push Notifications']
            },
            {
              icon: '🌐',
              title: 'Web Applications',
              description: 'Modern web applications with responsive design and cloud deployment.',
              features: ['Responsive Design', 'Cloud Deployment', 'SEO Optimization', 'Performance Monitoring']
            },
            {
              icon: '🛡️',
              title: 'Security & Testing',
              description: 'Comprehensive security measures and thorough testing protocols.',
              features: ['Security Audits', 'Penetration Testing', 'Code Reviews', 'Quality Assurance']
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
