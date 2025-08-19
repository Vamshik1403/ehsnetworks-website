"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PrivateCloudServices() {
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

  const services = [
    {
      title: "Infrastructure as a Service (IaaS)",
      description: "ENPL likely provides Infrastructure as a Service, enabling virtualization of compute, storage, and networking resources.",
      icon: "🏗️",
      color: "from-blue-500 to-blue-700",
      illustration: "💻💻💻📶",
      features: [
        "Virtual Machines (VMs): Deploy and manage VMs based on computing needs.",
        "Storage: Scalable and on-demand storage resources.",
        "Networking: Set up and manage virtual networks.",
        "Security: Robust security features for data protection.",
        "Scalability: Easily scale infrastructure based on demand."
      ]
    },
    {
      title: "On-Premises or Hosted Deployment",
      description: "Deploy Apex Private Cloud on-premises or in a hosted environment with complete control and flexibility.",
      icon: "🏢",
      color: "from-indigo-500 to-indigo-700",
      illustration: "💻💻💻💻🔗",
      features: [
        "Deploy Apex Private Cloud on-premises or in a hosted environment.",
        "Complete Control: Over hardware, software, and security configurations.",
        "Flexibility: On-premises or hosted options for scalability and resource allocation."
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
            ENPL Office Automation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive private cloud solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {service.description}
              </p>

              {/* Illustration */}
              <div className="text-center mb-6">
                <div className="text-5xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {service.illustration}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <div className="text-center mt-6">
                <button className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  Learn More
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Additional Services Placeholder */}
        <div className={`grid md:grid-cols-2 gap-8 transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Placeholder 1 */}
          <div className="bg-white/50 rounded-3xl p-8 border-2 border-dashed border-gray-300 text-center">
            <div className="text-4xl mb-4 opacity-60">🔧</div>
            <p className="text-gray-500">Additional services coming soon...</p>
          </div>

          {/* Placeholder 2 */}
          <div className="bg-white/50 rounded-3xl p-8 border-2 border-dashed border-gray-300 text-center">
            <div className="text-4xl mb-4 opacity-60">💻</div>
            <p className="text-gray-500">More solutions in development...</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team can design and implement custom private cloud solutions 
              tailored to your specific business requirements.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
