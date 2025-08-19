"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PrivateCloudAdvantages() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      title: "Scalability",
      description: "ENPL ensures scalability with integrated monitoring and management tools.",
      icon: "📈",
      color: "from-blue-500 to-blue-700",
      illustration: "💻💻📈",
      points: [
        "Integration: Monitor performance metrics for informed scaling.",
        "Horizontal and Vertical Scaling: Support for adding instances and increasing capacity.",
        "High Availability: Mechanisms for workload distribution and availability.",
        "Compliance: Tools for proactive resource planning.",
        "Pay-as-You-Go Model: Pay for consumed resources."
      ]
    },
    {
      title: "Flexible Consumption Models",
      description: "Align IT spending with actual usage and demand.",
      icon: "🔄",
      color: "from-cyan-500 to-cyan-700",
      illustration: "⚙️🔄",
      points: [
        "Workload Handling: Suitable for both predictable and unpredictable workloads.",
        "Financial Flexibility: Align IT spending with operational budgets.",
        "Managed Services: Include managed services and support.",
        "Cost Transparency: Transparent pricing and usage reporting.",
        "Customization Options: Flexibility to customize service packages."
      ]
    },
    {
      title: "Integration with Technologies Portfolio",
      description: "ENPL integrates seamlessly with technologies for a comprehensive IT environment.",
      icon: "🔗",
      color: "from-emerald-500 to-emerald-700",
      illustration: "🧩🧩",
      points: [
        "Cloud Management: Unified management with Cloud Manager.",
        "End-User Computing: Seamless delivery of virtual desktops and applications.",
        "AI and Data Analytics: Integration with solutions for analytics.",
        "Support and Services: Access to support, maintenance, and consulting services."
      ]
    },
    {
      title: "Security Solutions",
      description: "Integration with security solutions ensures a secure cloud environment.",
      icon: "🔐",
      color: "from-orange-500 to-orange-700",
      illustration: "🛡️🔑📊",
      points: [
        "Identity and Access Management: Ensure secure access.",
        "Encryption: Protect data integrity.",
        "Threat Detection: Incorporate threat detection measures."
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Why Choose Apex Private Cloud?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced capabilities that set our private cloud solutions apart from the competition
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{advantage.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {advantage.description}
              </p>

              {/* Illustration */}
              <div className="text-center mb-6">
                <div className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {advantage.illustration}
                </div>
              </div>

              {/* Points List */}
              <div className="space-y-3">
                {advantage.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${advantage.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Discover how our advanced scalability, flexible consumption models, 
              and comprehensive integration capabilities can transform your business.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
