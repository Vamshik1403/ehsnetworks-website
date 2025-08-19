"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PrivateCloudFeatures() {
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

  const features = [
    {
      title: "Automation",
      description: "Private clouds emphasize automation and orchestration of IT processes.",
      icon: "🤖",
      color: "from-blue-500 to-blue-700",
      illustration: "💻➡️⚙️",
      points: [
        "Infrastructure Provisioning: Automated VM, storage, and networking provisioning.",
        "Configuration Management: Automate server and application configurations.",
        "Scaling: Automatic resource scaling based on demand.",
        "Security Automation: Automated security measures for patching and responses."
      ]
    },
    {
      title: "Orchestration",
      description: "Coordinate and manage multiple automated tasks efficiently.",
      icon: "🎼",
      color: "from-cyan-500 to-cyan-700",
      illustration: "⚙️⚙️&lt;/&gt;",
      points: [
        "Workflow Coordination: Orchestrate tasks in sequence or parallel.",
        "Integration: Coordinate with external systems.",
        "Resource Allocation: Coordinate with external systems.",
        "Service Lifecycle Management: Manage service lifecycle in a coordinated manner.",
        "Event Handling: Orchestrate responses to events."
      ]
    },
    {
      title: "Security",
      description: "ENPL ensures robust security features for Apex Private Cloud.",
      icon: "🛡️",
      color: "from-emerald-500 to-emerald-700",
      illustration: "🛡️🔒",
      points: [
        "Data Encryption: Protect data in transit and at rest.",
        "IAM: Control access with Identity and Access Management.",
        "Network Security: Employ firewalls, intrusion prevention, and detection.",
        "Compliance: Adhere to industry standards and certifications.",
        "Incident Response: Swift response to security incidents."
      ]
    },
    {
      title: "Compliance",
      description: "Ensure adherence to regulations and standards.",
      icon: "📋",
      color: "from-orange-500 to-orange-700",
      illustration: "📄✅⭐",
      points: [
        "Regulatory Compliance: Operate in accordance with data protection and privacy best practices.",
        "Data Residency: Options for data residency compliance.",
        "Audit Trails: Comprehensive audit trails for regulatory compliance.",
        "Security Certifications: Third-party security assessments for assurance.",
        "Customer Responsibility: Shared responsibility for application and data security."
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Core Features & Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced features that make Apex Private Cloud the ideal choice for enterprise environments
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {feature.description}
              </p>

              {/* Illustration */}
              <div className="text-center mb-6">
                <div className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.illustration}
                </div>
              </div>

              {/* Points List */}
              <div className="space-y-3">
                {feature.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
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
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Experience Advanced Features</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Discover how our advanced automation, orchestration, security, and compliance 
              features can transform your IT infrastructure.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
