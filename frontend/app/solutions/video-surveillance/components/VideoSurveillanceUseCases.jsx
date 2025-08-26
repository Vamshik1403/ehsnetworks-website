"use client";
import React from 'react';

export default function VideoSurveillanceUseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Video Surveillance <span className="text-blue-600">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our video surveillance solutions are transforming security across various industries 
            and creating safer environments for businesses and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🏢',
              title: 'Corporate Offices',
              description: 'Comprehensive security monitoring for office buildings with access control integration.',
              benefits: ['Perimeter Security', 'Access Control', 'Employee Safety', 'Asset Protection']
            },
            {
              icon: '🏪',
              title: 'Retail Stores',
              description: 'Loss prevention and customer safety with advanced analytics and monitoring.',
              benefits: ['Loss Prevention', 'Customer Safety', 'Inventory Protection', 'Staff Monitoring']
            },
            {
              icon: '🏭',
              title: 'Manufacturing',
              description: 'Production floor monitoring and safety compliance for industrial facilities.',
              benefits: ['Safety Compliance', 'Production Monitoring', 'Quality Control', 'Incident Prevention']
            },
            {
              icon: '🏥',
              title: 'Healthcare',
              description: 'Patient safety and facility security with HIPAA-compliant surveillance systems.',
              benefits: ['Patient Safety', 'Facility Security', 'HIPAA Compliance', 'Emergency Response']
            },
            {
              icon: '🏫',
              title: 'Educational Institutions',
              description: 'Campus security and student safety with comprehensive monitoring solutions.',
              benefits: ['Campus Security', 'Student Safety', 'Access Control', 'Emergency Management']
            },
            {
              icon: '🏗️',
              title: 'Construction Sites',
              description: 'Site security and safety monitoring for construction and development projects.',
              benefits: ['Site Security', 'Safety Monitoring', 'Equipment Protection', 'Progress Tracking']
            }
          ].map((useCase, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Benefits:</h4>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {benefit}
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
