"use client";
import React from 'react';

export default function ITConsultingServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our IT Consulting <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to ongoing support, we provide comprehensive IT consulting 
            services that transform your technology infrastructure and drive business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🛡️',
              title: 'Security Assessment',
              description: 'Comprehensive security evaluation to identify vulnerabilities, assess risks, and implement robust security measures.',
              features: ['Vulnerability Assessment', 'Risk Analysis', 'Security Implementation', 'Compliance Review']
            },
            {
              icon: '🌐',
              title: 'Network Assessment',
              description: 'Detailed analysis of your network infrastructure, performance metrics, and optimization opportunities.',
              features: ['Network Analysis', 'Performance Metrics', 'Infrastructure Review', 'Optimization Planning']
            },
            {
              icon: '🏗️',
              title: 'Infrastructure Optimization',
              description: 'Consolidation and optimization of data center infrastructure for improved agility and reduced TCO.',
              features: ['Data Center Consolidation', 'Server Optimization', 'Storage Management', 'Cost Reduction']
            },
            {
              icon: '📊',
              title: 'Application Performance',
              description: 'Tools and strategies to manage and monitor dynamic applications in complex datacenter environments.',
              features: ['Performance Monitoring', 'Application Management', 'Quality Assurance', 'User Experience']
            },
            {
              icon: '🔄',
              title: 'Disaster Recovery',
              description: 'Comprehensive data center recovery solutions for business continuity and minimal disruption.',
              features: ['Recovery Planning', 'Business Continuity', 'Backup Solutions', 'Minimal Disruption']
            },
            {
              icon: '⚡',
              title: 'Data Center Optimization',
              description: 'Address data center challenges to deliver optimal IT service levels and reduce operational costs.',
              features: ['Service Level Optimization', 'Cost Management', 'Operational Efficiency', 'Performance Tuning']
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}