"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CybersecurityServices() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const services = [
    {
      icon: "🛡️",
      title: "Threat Detection & Response",
      description: "Advanced threat hunting with AI-powered analytics and automated response capabilities",
      features: ["Real-time monitoring", "Behavioral analysis", "Automated containment"],
      color: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: "🔐",
      title: "Identity & Access Management",
      description: "Comprehensive identity governance with multi-factor authentication and privileged access management",
      features: ["Single sign-on", "Role-based access", "Privileged account security"],
      color: "from-purple-500 to-pink-500",
      delay: 0.4
    },
    {
      icon: "🌐",
      title: "Network Security",
      description: "Next-generation firewall protection with intrusion prevention and advanced threat protection",
      features: ["Firewall management", "VPN solutions", "Network segmentation"],
      color: "from-green-500 to-emerald-500",
      delay: 0.6
    },
    {
      icon: "💻",
      title: "Endpoint Security",
      description: "Comprehensive endpoint protection with advanced malware detection and device control",
      features: ["Antivirus protection", "Device encryption", "Application control"],
      color: "from-orange-500 to-red-500",
      delay: 0.8
    },
    {
      icon: "☁️",
      title: "Cloud Security",
      description: "Cloud-native security solutions for multi-cloud environments with compliance monitoring",
      features: ["Cloud access security", "Data protection", "Compliance monitoring"],
      color: "from-indigo-500 to-blue-500",
      delay: 1.0
    },
    {
      icon: "📊",
      title: "Security Operations",
      description: "24/7 security operations center with incident response and threat intelligence",
      features: ["SOC services", "Incident response", "Threat intelligence"],
      color: "from-teal-500 to-green-500",
      delay: 1.2
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
              Professional Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Security
            <span className="block text-blue-600">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Our expert cybersecurity team delivers end-to-end security solutions designed to protect your 
            organization from sophisticated cyber threats while ensuring compliance with industry standards.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: service.delay + 0.1 + featureIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Our Security Services?
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: "🎯",
                  title: "Expert Team",
                  description: "Certified cybersecurity professionals with years of industry experience"
                },
                {
                  icon: "⚡",
                  title: "Rapid Response",
                  description: "24/7 security monitoring with sub-30 second threat response times"
                },
                {
                  icon: "🔒",
                  title: "Compliance Ready",
                  description: "Built-in compliance frameworks for GDPR, HIPAA, SOC 2, and more"
                },
                {
                  icon: "📈",
                  title: "Continuous Improvement",
                  description: "Regular security assessments and ongoing optimization of your security posture"
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mr-4 mt-1 flex-shrink-0 shadow-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
                  🚀
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Service Excellence</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Customer Satisfaction</span>
                  <span className="text-green-600 font-semibold text-lg">98%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Response Time</span>
                  <span className="text-blue-600 font-semibold text-lg">&lt;30s</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Uptime Guarantee</span>
                  <span className="text-purple-600 font-semibold text-lg">99.99%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Support Coverage</span>
                  <span className="text-orange-600 font-semibold text-lg">24/7</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Enhance Your Security Posture?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let our cybersecurity experts assess your current security infrastructure and 
              recommend the best solutions for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full text-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
