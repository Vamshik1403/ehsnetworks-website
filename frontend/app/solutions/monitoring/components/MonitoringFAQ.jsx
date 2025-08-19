'use client';
import React, { useState, useEffect, useRef } from 'react';

const MonitoringFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: 'What is Zabbix?',
      answer: 'Zabbix is an open-source monitoring tool that tracks the performance and availability of network devices, servers, and applications. It provides real-time monitoring, alerting, and visualizations for infrastructure management. Zabbix supports data collection via various protocols like SNMP, IPMI, and agents for detailed insights.',
      icon: '❓'
    },
    {
      question: 'What are the advantages of Zabbix?',
      answer: 'Zabbix offers enterprise-grade monitoring capabilities with open-source flexibility. Key advantages include real-time monitoring, customizable dashboards, automated alerting, scalability, multi-platform support, and extensive integration options. It provides comprehensive visibility into your IT infrastructure with minimal resource overhead.',
      icon: '✅'
    },
    {
      question: 'How is Zabbix better than other monitoring tools?',
      answer: 'Zabbix stands out with its comprehensive feature set, scalability, and cost-effectiveness. Unlike proprietary solutions, it offers unlimited scalability without licensing costs, supports 100+ data collection methods, provides advanced problem detection, and includes built-in templates for quick deployment. Its active community ensures continuous improvement and support.',
      icon: '🚀'
    },
    {
      question: 'How does ENPL provide better monitoring solutions using Zabbix?',
      answer: 'ENPL, as a certified Zabbix partner, enhances Zabbix with enterprise-grade support, custom integrations, and specialized expertise. We provide tailored monitoring solutions, custom dashboard development, integration with existing tools, 24/7 support, and professional services to maximize your monitoring investment.',
      icon: '⭐'
    }
  ];

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
      className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%)] bg-[length:40px_40px] animate-grid-flow" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full animate-float-slow blur-xl" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-float-slow delay-1000 blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-cyan-400/10 rounded-full animate-float-slow delay-2000 blur-xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get answers to common questions about our monitoring solutions and Zabbix expertise
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                animationDelay: `${index * 200}ms`
              }}
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{faq.icon}</div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-6 h-6 text-blue-300 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Answer Panel */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-blue-100 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6">
              Our monitoring experts are here to help you find the perfect solution for your infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold overflow-hidden">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Contact Our Experts
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              
              <button className="group relative border-2 border-white/30 text-white px-8 py-3 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-semibold backdrop-blur-sm">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Schedule a Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 30s linear infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MonitoringFAQ;
