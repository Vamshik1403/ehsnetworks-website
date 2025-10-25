"use client";
import React from 'react';

export default function ITConsultingOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IT Consulting <span className="text-blue-600">Overview</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We specialize in providing strategic IT consulting services that transform 
            how businesses operate, improving efficiency, reducing costs, and driving innovation through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Comprehensive IT Consulting Solutions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expertise spans across infrastructure optimization, security assessment, compliance management, and digital transformation. 
                We help businesses leverage technology to achieve operational excellence and competitive advantage.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '📋',
                  title: 'Software License & Compliance Management',
                  description: 'Identify software inventory, measure usage and automatically link complex license entitlements for optimal compliance.'
                },
                {
                  icon: '🏗️',
                  title: 'Infrastructure Consolidation & Optimization',
                  description: 'Consolidate and optimize data center infrastructure, servers, storage, networks & middleware software.'
                },
                {
                  icon: '📊',
                  title: 'Application Performance Management',
                  description: 'Manage and monitor dynamic applications and complex datacenter environments for optimal performance.'
                },
                {
                  icon: '🔄',
                  title: 'Disaster Recovery Strategy',
                  description: 'Design comprehensive data center recovery solutions for business continuity and minimal disruption.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
              <div className="space-y-4">
                {[
                  'Assessment & Requirements Analysis',
                  'Strategic Planning & Architecture Design',
                  'Implementation & Optimization',
                  'Security & Compliance Review',
                  'Ongoing Support & Monitoring',
                  'Continuous Improvement & Updates'
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}