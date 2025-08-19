"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function EndpointSecurity() {
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
              Best Cybersecurity Solutions and Services Company in India
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
              Endpoint & Server Security Solutions
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Deploy ENPL Public Cloud on-premises or in a hosted environment with complete control and flexibility. 
              Our cloud hosting and private cloud hosting solutions emphasize security, control, performance, and the 
              need for experts. We build dedicated environments within a Tier 4 datacentre, optimizing performance, 
              maximizing ROIs, and utilizing single-tenant private cloud hosting solutions designed with hardware 
              from vendors like Dell®, EMC®, and Microsoft®, managed by Certified Professionals 24x7x365.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Endpoint Protection Card */}
          <div className={`transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Endpoint Protection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Endpoint protection is used to describe security solutions that address endpoint security issues, 
                  securing and protecting endpoints against zero-day exploits, attacks, and inadvertent data leakage 
                  resulting from human error.
                </p>
              </div>
            </div>
          </div>

          {/* Patch Management Card */}
          <div className={`transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Patch Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Patch Management ensures that University endpoints are consistently running the latest approved 
                  versions of operating systems, security patches, and common third-party applications. Protecting 
                  devices from vulnerabilities and ensuring compatibility with services.
                </p>
              </div>
            </div>
          </div>

          {/* Privileged Identity Management Card */}
          <div className={`transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Privileged Identity Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Privileged identity management (PIM) is the monitoring and protection of superuser accounts in 
                  an organization's IT environments. Oversight is necessary so that the greater access abilities 
                  of super control accounts are not misused or abused.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Security Features */}
        <div className={`mt-16 grid md:grid-cols-2 gap-8 transform transition-all duration-1000 ease-out delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Advanced Threat Protection</h4>
            <p className="text-gray-600 mb-6">
              Our endpoint security solutions provide real-time protection against advanced persistent threats, 
              ransomware, and zero-day attacks using machine learning and behavioral analysis.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Real-time threat detection and response
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Machine learning-based protection
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Automated incident response
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Governance</h4>
            <p className="text-gray-600 mb-6">
              Ensure your organization meets industry standards and regulatory requirements with comprehensive 
              security controls and audit capabilities.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ISO 27001 compliance
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                SOC 2 Type II certification
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Comprehensive audit trails
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
