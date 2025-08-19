"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PublicCloudOverview() {
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
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Public Cloud Solutions Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Elevate Efficiency, Securely Scale, and Innovate Unleashed with Public Cloud Solutions
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              ENPL Public Cloud: Your Gateway to Digital Transformation
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ENPL Office Automation combines the innovation of Public Cloud with a suite of services designed to 
              transform your business operations. Our public cloud infrastructure provides scalable, on-demand 
              computing resources that enable businesses to innovate faster, reduce costs, and scale globally 
              without the complexity of managing physical infrastructure.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With ENPL Public Cloud, you get enterprise-grade security, compliance, and performance 
              while maintaining the flexibility to choose the services that best fit your business needs.
            </p>
          </div>

          <div className={`transform transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Scalability</h4>
                    <p className="text-sm text-gray-600">Auto-scale resources based on demand</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Security</h4>
                    <p className="text-sm text-gray-600">Enterprise-grade security & compliance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Global Reach</h4>
                    <p className="text-sm text-gray-600">Deploy anywhere in the world</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Cost-Effective</h4>
                    <p className="text-sm text-gray-600">Pay only for what you use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className={`transform transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-4">ENPL Public Cloud</h4>
            <p className="text-lg text-gray-700 mb-6">
              Enterprise-grade public cloud infrastructure designed for modern businesses
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h5 className="font-semibold text-gray-900 mb-2">Global Infrastructure</h5>
                <p className="text-gray-600">Deploy applications across multiple regions with low-latency access</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h5 className="font-semibold text-gray-900 mb-2">Managed Services</h5>
                <p className="text-gray-600">Focus on your business while we manage the cloud infrastructure</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h5 className="font-semibold text-gray-900 mb-2">24/7 Support</h5>
                <p className="text-gray-600">Round-the-clock technical support and monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <p className="text-lg text-gray-600 mb-6">
            Let's discuss how our Public Cloud solutions can revolutionize your business
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
