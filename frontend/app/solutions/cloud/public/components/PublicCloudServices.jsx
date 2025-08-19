"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PublicCloudServices() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
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
      title: "Cloud Hosting",
      description: "Deploy ENPL Public Cloud on-premises or in a hosted environment with complete control and flexibility.",
      icon: "☁️",
      features: ["Scalable infrastructure", "Global deployment", "Load balancing"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cloud Migration",
      description: "Deploy ENPL Public Cloud on-premises or in a hosted environment.",
      icon: "🚀",
      features: ["Seamless transition", "Data migration", "Application modernization"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cloud Management",
      description: "Comprehensive cloud management services for optimal performance and cost control.",
      icon: "⚙️",
      features: ["Monitoring & alerting", "Cost optimization", "Performance tuning"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "DevOps Services",
      description: "Streamline development and operations with cloud-native DevOps practices.",
      icon: "🔧",
      features: ["CI/CD pipelines", "Infrastructure as Code", "Automated testing"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance for your public cloud environment.",
      icon: "🔒",
      features: ["Identity management", "Data encryption", "Compliance frameworks"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Support & Training",
      description: "24/7 technical support and comprehensive training for your team.",
      icon: "🎓",
      features: ["Round-the-clock support", "Expert consultation", "Training programs"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Public Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive public cloud solutions tailored to your business needs
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredService === index ? 'ring-2 ring-green-500 ring-opacity-50' : ''
              }`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 text-center">
                  <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className={`mt-20 text-center transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Custom Solutions
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our team can design and implement custom public cloud solutions
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
