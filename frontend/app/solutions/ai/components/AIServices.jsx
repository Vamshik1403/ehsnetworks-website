"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AIServices() {
  const [hoveredService, setHoveredService] = useState(null);
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
      title: "AI Strategy Consulting",
      description: "Develop a comprehensive AI roadmap aligned with your business objectives",
      icon: "🎯",
      color: "from-blue-500 to-blue-700",
      features: ["Business Analysis", "Technology Assessment", "Implementation Roadmap", "ROI Projections"]
    },
    {
      title: "Custom AI Development",
      description: "Tailored AI solutions built specifically for your unique business needs",
      icon: "⚙️",
      color: "from-purple-500 to-purple-700",
      features: ["Algorithm Design", "Model Training", "Integration", "Testing & Validation"]
    },
    {
      title: "Data Analytics & ML",
      description: "Transform your data into actionable insights with machine learning",
      icon: "📊",
      color: "from-indigo-500 to-indigo-700",
      features: ["Data Processing", "Predictive Models", "Real-time Analytics", "Dashboard Creation"]
    },
    {
      title: "NLP Solutions",
      description: "Build intelligent language processing systems for customer interaction",
      icon: "💬",
      color: "from-cyan-500 to-cyan-700",
      features: ["Chatbot Development", "Text Analysis", "Language Translation", "Sentiment Analysis"]
    },
    {
      title: "Computer Vision",
      description: "Implement AI-powered visual recognition and analysis systems",
      icon: "👁️",
      color: "from-emerald-500 to-emerald-700",
      features: ["Image Recognition", "Object Detection", "Quality Control", "Medical Imaging"]
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems",
      icon: "🔗",
      color: "from-orange-500 to-orange-700",
      features: ["API Development", "System Integration", "Performance Optimization", "Maintenance"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Services & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to implementation, we provide end-to-end AI services that drive 
            measurable business outcomes and competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 ${
                hoveredService === index ? 'border-blue-300' : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{service.icon}</span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`mt-6 w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg`}>
                  Learn More
                </button>
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
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how artificial intelligence can revolutionize your operations, 
              improve efficiency, and create new opportunities for growth.
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
