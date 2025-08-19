"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AppModernisationBenefits() {
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

  const benefits = [
    {
      title: "Increased Agility",
      description: "Gain the flexibility to respond swiftly to market changes and evolving customer needs, seizing new opportunities with modern, adaptable applications.",
      icon: "📊",
      color: "from-blue-500 to-blue-700",
      illustration: "💻📈⚙️"
    },
    {
      title: "Improved Scalability",
      description: "Ensure seamless performance and accommodate future growth with modern applications that scale effortlessly to handle increasing workloads and user demands.",
      icon: "⚡",
      color: "from-cyan-500 to-cyan-700",
      illustration: "💻👆✅⚙️"
    },
    {
      title: "Accelerated Innovation",
      description: "Enjoy rapid development cycles and bring cutting-edge features and services to market faster with modern development approaches.",
      icon: "🚀",
      color: "from-indigo-500 to-indigo-700",
      illustration: "💻🔍💡🎵👤"
    },
    {
      title: "Elevated Customer Experiences",
      description: "Create exceptional digital experiences that captivate your customers through modern applications designed with user-centricity in mind.",
      icon: "👥",
      color: "from-emerald-500 to-emerald-700",
      illustration: "📱👤💡⚙️🌐"
    },
    {
      title: "Enhanced Security",
      description: "Protect your business and build customer trust with modern applications that incorporate robust security measures to safeguard your data and defend against cyber threats.",
      icon: "🔒",
      color: "from-red-500 to-red-700",
      illustration: "💻🔐📹🔑👁️"
    },
    {
      title: "Reduced Costs",
      description: "Optimise your IT budget and free up valuable resources by leveraging modern applications that minimise infrastructure costs, streamline operations, and reduce maintenance overhead.",
      icon: "💰",
      color: "from-orange-500 to-orange-700",
      illustration: "💻💵📉✅⚙️"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Why Application Modernisation is Critical */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Why Application Modernisation is Critical
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In today's dynamic digital landscape, businesses must adapt quickly to thrive. Traditional applications often struggle to keep pace with these demands, leading to inflexibility, high maintenance costs, security vulnerabilities, and missed opportunities. Modernising your application ecosystem ensures resilience, improves customer experiences, and positions your business to capitalise on emerging opportunities.
          </p>
        </div>

        {/* Unlock the Power Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Unlock the Power of Modern Applications
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Modernising your applications empowers your business to achieve more, build a competitive edge, and drive future growth through:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{benefit.icon}</span>
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Illustration */}
              <div className="text-center text-4xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {benefit.illustration}
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
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Applications?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our application modernisation services can help your business 
              stay competitive and future-ready in the digital age.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
