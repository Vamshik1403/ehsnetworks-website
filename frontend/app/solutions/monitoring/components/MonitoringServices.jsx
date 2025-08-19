'use client';
import React, { useEffect, useRef, useState } from 'react';

const MonitoringServices = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Comprehensive Zabbix Monitoring Solutions',
      description: 'End-to-end monitoring infrastructure with real-time visibility into your entire IT ecosystem.',
      icon: '📊',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      features: [
        'Real-time monitoring',
        'Multi-platform support',
        'Scalable architecture',
        'High availability'
      ]
    },
    {
      id: 2,
      title: 'Zabbix High Availability (HA) Deployments',
      description: 'Enterprise-grade high availability solutions ensuring continuous monitoring operations.',
      icon: '🔄',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      features: [
        'Active-passive clusters',
        'Load balancing',
        'Failover automation',
        'Data replication'
      ]
    },
    {
      id: 3,
      title: 'Advanced Alerts & Notifications',
      description: 'Intelligent alerting system with smart escalation and customizable notification channels.',
      icon: '🔔',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      features: [
        'Smart threshold management',
        'Multi-channel notifications',
        'Escalation policies',
        'Alert correlation'
      ]
    },
    {
      id: 4,
      title: 'Zabbix Custom Integrations',
      description: 'Tailored integrations with your existing tools and workflows for seamless operations.',
      icon: '🔗',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      features: [
        'API integrations',
        'Custom connectors',
        'Workflow automation',
        'Third-party tools'
      ]
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
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:30px_30px] animate-grid-flow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Our Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our advanced services designed to optimize your infrastructure with Zabbix
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                animationDelay: `${index * 200}ms`
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${service.color.split('-')[1]}-300 group-hover:shadow-2xl transition-all duration-500`} />
              
              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-float-1" />
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-float-2" />
                <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-3" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Service Number */}
                <div className="text-6xl font-bold text-gray-100 mb-4 group-hover:scale-110 transition-transform duration-500">
                  {String(service.id).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 animate-float-slow`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature}
                      className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} animate-pulse`} />
                      <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex justify-end">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl`} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden">
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
              Get Started with Monitoring
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-8px) rotate(180deg) scale(1.2); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-6px) rotate(-180deg) scale(1.1); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.3); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 25s linear infinite;
        }
        
        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 5s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MonitoringServices;
