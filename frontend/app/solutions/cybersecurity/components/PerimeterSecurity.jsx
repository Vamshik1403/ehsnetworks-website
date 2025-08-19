"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PerimeterSecurity() {
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
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perimeter Security
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              In the IT realm, perimeter security involves safeguarding a company's network limits from hackers, 
              intruders, and other unwanted individuals. It includes surveillance detection, analyzing patterns, 
              recognizing threats, and dealing with them effectively. Every private network has a perimeter around it.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Next Generation Firewall Card */}
          <div className={`transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Next Generation Firewall
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Next generation firewalls achieve this by using deep packet inspection to identify and control 
                  applications regardless of the IP port used by the application. The typical security policy of 
                  a network firewall deployed at the perimeter of an organization blocks inbound connections and 
                  allows outbound connections.
                </p>
              </div>
            </div>
          </div>

          {/* Intrusion Prevention System Card */}
          <div className={`transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Intrusion Prevention System
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  An intrusion prevention system is used in computer security. It provides policies and rules 
                  for network traffic along with an intrusion detection system for alerting system or network 
                  administrators to suspicious traffic.
                </p>
              </div>
            </div>
          </div>

          {/* Proxy & Content Filters Card */}
          <div className={`transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Proxy & Content Filters
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A content-filtering proxy is a proxy server, a server acting as a middleman between two 
                  computers, that filters the content it relays, limiting access to undesirable, forbidden, 
                  or dangerous content. Schools and workplaces may opt to use a content-filtering proxy to 
                  control what people view while in their facilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Perimeter Security Features */}
        <div className={`mt-16 grid md:grid-cols-2 gap-8 transform transition-all duration-1000 ease-out delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Network Segmentation</h4>
            <p className="text-gray-600 mb-6">
              Implement network segmentation to isolate critical systems and limit the potential impact of 
              security breaches. Our solutions provide granular control over network access and traffic flow.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                VLAN isolation and management
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Micro-segmentation capabilities
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Access control policies
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Threat Intelligence</h4>
            <p className="text-gray-600 mb-6">
              Stay ahead of emerging threats with our advanced threat intelligence platform that provides 
              real-time updates on the latest security vulnerabilities and attack patterns.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Real-time threat feeds
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Behavioral analysis
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Automated response actions
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Secure Your Network Perimeter
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Protect your organization with enterprise-grade perimeter security solutions
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Protected Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
