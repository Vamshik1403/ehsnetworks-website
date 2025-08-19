"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PrivateCloudIntegration() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            ENPL Office Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ENPL Office Automation brings forth a holistic approach to business transformation, 
            combining the innovation of Apex Private Cloud with a suite of services designed to 
            elevate efficiency, ensure security, and foster unparalleled scalability. Unleash the 
            potential of your business with ENPL's advanced solutions.
          </p>
        </div>

        {/* Integration Benefits */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transform transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Seamless Technology Integration
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our Apex Private Cloud solutions are designed to integrate seamlessly with your 
              existing technology stack, providing a unified and comprehensive IT environment 
              that drives business growth and innovation.
            </p>

            {/* Integration Points */}
            <div className="space-y-6">
              {[
                {
                  title: "Cloud Management",
                  description: "Unified management with Cloud Manager for centralized control",
                  icon: "☁️"
                },
                {
                  title: "End-User Computing",
                  description: "Seamless delivery of virtual desktops and applications",
                  icon: "💻"
                },
                {
                  title: "AI and Data Analytics",
                  description: "Integration with solutions for advanced analytics and insights",
                  icon: "🤖"
                },
                {
                  title: "Support and Services",
                  description: "Access to comprehensive support, maintenance, and consulting",
                  icon: "🛟"
                }
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{point.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{point.title}</h4>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-6">🔗</div>
                <h4 className="text-2xl font-bold mb-4">Technology Integration</h4>
                <p className="text-blue-100 mb-6">
                  Seamless integration with your existing technology portfolio
                </p>
                
                {/* Integration Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm text-blue-200">Compatible</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-blue-200">Integration</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-500"></div>
              <div className="absolute bottom-4 left-6 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-1000"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce animation-delay-1000"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready for Seamless Integration?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our integrated solutions can work with your existing 
              technology stack to drive business transformation.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Schedule Integration Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
