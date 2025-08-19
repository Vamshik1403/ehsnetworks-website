"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PrivateCloudOverview() {
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
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Empower Your Cloud Business
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Elevate Efficiency, Securely Scale, and Innovate Unleashed with Apex Private Cloud Solutions
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-center transform transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Apex Private Cloud: Your Gateway to Digital Transformation
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ENPL Office Automation brings forth a holistic approach to business transformation, 
              combining the innovation of Apex Private Cloud with a suite of services designed to 
              elevate efficiency, ensure security, and foster unparalleled scalability.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Unleash the potential of your business with ENPL's advanced solutions that provide 
              a dedicated, scalable computing environment whether hosted on-premises or in a managed 
              environment. Our private cloud infrastructure is tailored for performance, security, 
              and flexibility.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4">
              {[
                "🔒 Enhanced Security & Compliance",
                "📈 Scalable Infrastructure",
                "⚡ High Performance Computing",
                "🌐 Flexible Deployment Options",
                "💰 Cost-Effective Solutions",
                "🛡️ Enterprise-Grade Reliability"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
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
                <div className="text-6xl mb-6">☁️</div>
                <h4 className="text-2xl font-bold mb-4">Apex Private Cloud</h4>
                <p className="text-blue-100 mb-6">
                  Enterprise-grade private cloud infrastructure designed for modern businesses
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-sm text-blue-200">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-blue-200">Support</div>
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
        <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Infrastructure?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our Apex Private Cloud solutions can revolutionize your business 
              and drive digital transformation.
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
