"use client";
import React from 'react';

export default function ITConsultingBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Benefits of IT Consulting <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our IT consulting services can transform your business, improve efficiency, 
            and drive growth across all technology operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Increased Efficiency',
              description: 'Optimize your IT infrastructure and streamline processes to boost productivity and reduce operational overhead.',
              benefits: ['Faster Processing', 'Reduced Errors', '24/7 Operation', 'Scalable Solutions']
            },
            {
              icon: '💰',
              title: 'Cost Reduction',
              description: 'Lower operational costs through infrastructure optimization and strategic technology investments.',
              benefits: ['Reduced Labor Costs', 'Lower Error Costs', 'Optimized Resources', 'ROI Improvement']
            },
            {
              icon: '📈',
              title: 'Business Growth',
              description: 'Scale your operations efficiently with IT solutions that grow with your business needs.',
              benefits: ['Scalable Infrastructure', 'Market Expansion', 'Customer Growth', 'Revenue Increase']
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {benefit.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide text-center">KEY BENEFITS:</h4>
                <ul className="space-y-1">
                  {benefit.benefits.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Improved Accuracy',
                description: 'Eliminate human errors and ensure consistent, reliable results across all IT operations.',
                benefits: ['Data Accuracy', 'Process Consistency', 'Quality Assurance', 'Compliance']
              },
              {
                icon: '🔒',
                title: 'Enhanced Security',
                description: 'Implement robust security measures and protect your business data and operations.',
                benefits: ['Data Protection', 'Access Control', 'Audit Trails', 'Compliance Standards']
              },
              {
                icon: '🚀',
                title: 'Competitive Advantage',
                description: 'Stay ahead of the competition with cutting-edge technology and innovative IT solutions.',
                benefits: ['Market Leadership', 'Innovation', 'Customer Experience', 'Operational Excellence']
              }
            ].map((benefit, index) => (
              <div 
              key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                  {benefit.icon}
              </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 text-center">
                {benefit.title}
              </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {benefit.description}
              </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide text-center">KEY BENEFITS:</h4>
                  <ul className="space-y-1">
                    {benefit.benefits.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          ))}
        </div>
            </div>
      </div>
    </section>
  );
}
