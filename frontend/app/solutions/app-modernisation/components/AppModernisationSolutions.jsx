"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AppModernisationSolutions() {
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

  const solutions = [
    {
      title: "Containerisation, Microservices, and Virtualisation",
      description: "Modernisation of applications through containerisation and microservices is often combined with virtualisation. This involves deconstructing monolithic applications into smaller, independent services for improved manageability, scalability, and flexibility. Container orchestration platforms like Kubernetes are utilised to manage and scale containerised applications.",
      icon: "📦",
      color: "from-blue-500 to-blue-700",
      illustration: "🏗️👤🔍☁️🎵⚙️",
      position: "left"
    },
    {
      title: "Legacy Modernisation",
      description: "Assessment and modernisation of legacy systems through re-platforming, refactoring, or re-purchasing. Cloud migration strategies and SaaS solutions are leveraged to ensure alignment with modern business needs and to reduce technical debt.",
      icon: "🔄",
      color: "from-cyan-500 to-cyan-700",
      illustration: "💻☁️📊☕",
      position: "right"
    },
    {
      title: "Cloud-native Development Platform",
      description: "Development of cloud-native applications using microservices, containerisation, and serverless computing. These applications are designed for flexibility, scalability, and optimisation for cloud environments, leveraging technologies like Kubernetes and service meshes.",
      icon: "☁️",
      color: "from-indigo-500 to-indigo-700",
      illustration: "☁️💬▶️⚙️",
      position: "left"
    },
    {
      title: "DevOps and Automation",
      description: "Implementation of DevOps practices and automation tools to streamline the software development lifecycle, foster collaboration, and accelerate high-quality software delivery. This includes CI/CD pipelines, automated testing, and infrastructure-as-code.",
      icon: "♾️",
      color: "from-purple-500 to-purple-700",
      illustration: "♾️&lt;/&gt;⚙️🔍💻",
      position: "right"
    },
    {
      title: "API Integration, Visualisation, and Application Performance",
      description: "Enhancement of application functionality and performance through API integration, data visualisations, and Application Performance Monitoring (APM). This provides valuable insights into application behaviour and facilitates optimisation for better user experiences. API gateways and service meshes are employed to manage and secure API communication.",
      icon: "📊",
      color: "from-green-500 to-green-700",
      illustration: "💻📊🔍⚙️",
      position: "left"
    },
    {
      title: "Low-code/No-code Development",
      description: "Acceleration of application development through low-code/no-code platforms, empowering a wider range of users within the organisation to build applications rapidly and efficiently. This approach streamlines development through visual workflows, pre-built components, and automated code generation, enabling faster delivery of solutions.",
      icon: "🚫",
      color: "from-orange-500 to-orange-700",
      illustration: "📁🚫⚙️🔍💬",
      position: "right"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Solutions for Your Modernisation Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Containerisation, Microservices, and Virtualisation
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                solution.position === 'right' ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : 
                solution.position === 'left' ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center`}>
                    <span className="text-3xl text-white">{solution.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {solution.description}
                </p>

                {/* Learn More Button */}
                <button className={`mt-6 px-6 py-3 bg-gradient-to-r ${solution.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  Learn More
                </button>
              </div>

              {/* Illustration */}
              <div className={`transform transition-all duration-700 ease-out delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 
                solution.position === 'left' ? 'translate-x-20 opacity-0' : '-translate-x-20 opacity-0'
              }`}>
                <div className={`p-8 rounded-3xl bg-gradient-to-br ${solution.color} text-white shadow-2xl relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  {/* Main Illustration */}
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">{solution.illustration}</div>
                    <div className="text-lg font-semibold text-white/90">
                      {solution.title.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-500"></div>
                  <div className="absolute bottom-4 left-6 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Modernisation Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our comprehensive solutions cover every aspect of application modernisation, 
              from assessment to implementation and ongoing support.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
