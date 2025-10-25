"use client";
import React from 'react';

export default function SoftwaresTechnologies() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Software <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest software development technologies and frameworks to deliver cutting-edge 
            solutions that meet the most demanding business requirements.
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
                  icon: '🌐',
                  title: 'Web Technologies',
                  description: 'Modern web frameworks and technologies for responsive applications.',
                  specs: ['React.js', 'Next.js', 'Node.js', 'TypeScript']
                },
                {
                  icon: '📱',
                  title: 'Mobile Development',
                  description: 'Cross-platform and native mobile application development.',
                  specs: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
                },
                {
                  icon: '☁️',
                  title: 'Cloud Integration',
                  description: 'Cloud-native applications with modern deployment strategies.',
                  specs: ['AWS Services', 'Azure Integration', 'Docker', 'Kubernetes']
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
                  icon: '🔒',
                  title: 'Security & Testing',
                  description: 'Enterprise-grade security measures and comprehensive testing protocols.',
                  features: ['Security Audits', 'Penetration Testing', 'Code Reviews', 'Quality Assurance']
                },
                {
                  icon: '📊',
                  title: 'Analytics & Monitoring',
                  description: 'Advanced analytics and real-time monitoring for application performance.',
                  features: ['Performance Monitoring', 'User Analytics', 'Error Tracking', 'Real-time Alerts']
                },
                {
                  icon: '🔧',
                  title: 'System Integration',
                  description: 'Seamless integration with existing systems and third-party applications.',
                  features: ['API Development', 'Data Migration', 'System Compatibility', 'Real-time Sync']
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
