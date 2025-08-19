"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WorkplacesServices() {
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
      icon: "💻",
      title: "Microsoft 365",
      description: "Complete productivity suite with Teams, SharePoint, and Office applications",
      features: ["Teams collaboration", "SharePoint sites", "Office apps", "OneDrive storage"],
      color: "from-blue-500 to-blue-600",
      delay: 0.2
    },
    {
      icon: "🔐",
      title: "Identity Management",
      description: "Azure AD and conditional access for secure workplace authentication",
      features: ["Single sign-on", "Multi-factor auth", "Conditional access", "Device management"],
      color: "from-purple-500 to-purple-600",
      delay: 0.4
    },
    {
      icon: "☁️",
      title: "Cloud Migration",
      description: "Seamless migration to cloud-based workplace solutions",
      features: ["Data migration", "Application migration", "User training", "Ongoing support"],
      color: "from-green-500 to-green-600",
      delay: 0.6
    },
    {
      icon: "📱",
      title: "Mobile Device Management",
      description: "Intune-based device management for modern workplace mobility",
      features: ["Device enrollment", "Policy management", "App deployment", "Security compliance"],
      color: "from-orange-500 to-orange-600",
      delay: 0.8
    },
    {
      icon: "🛡️",
      title: "Security & Compliance",
      description: "Comprehensive security solutions for workplace protection",
      features: ["Threat protection", "Data loss prevention", "Compliance reporting", "Security monitoring"],
      color: "from-red-500 to-red-600",
      delay: 1.0
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description: "Workplace analytics and productivity insights",
      features: ["Usage analytics", "Productivity metrics", "User adoption", "ROI tracking"],
      color: "from-indigo-500 to-indigo-600",
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
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
              Professional Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Workplace
            <span className="block text-purple-600">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Our comprehensive workplace services help organizations modernize their digital 
            infrastructure and create productive, secure, and collaborative work environments.
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
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
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
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
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
              Why Choose Our Workplace Services?
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: "🎯",
                  title: "Expert Implementation",
                  description: "Certified professionals with years of workplace transformation experience"
                },
                {
                  icon: "⚡",
                  title: "Rapid Deployment",
                  description: "Quick implementation with minimal disruption to your business"
                },
                {
                  icon: "🔒",
                  title: "Security First",
                  description: "Built-in security and compliance from day one"
                },
                {
                  icon: "📈",
                  title: "Measurable Results",
                  description: "Clear metrics and ROI tracking for all implementations"
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-2xl mr-4 mt-1 flex-shrink-0 shadow-lg">
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
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-2xl border border-purple-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
                  🚀
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Service Excellence</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Customer Satisfaction</span>
                  <span className="text-purple-600 font-semibold text-lg">96%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Implementation Time</span>
                  <span className="text-pink-600 font-semibold text-lg">4-6 weeks</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Support Response</span>
                  <span className="text-indigo-600 font-semibold text-lg">&lt;2 hours</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Uptime Guarantee</span>
                  <span className="text-green-600 font-semibold text-lg">99.9%</span>
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Workplace?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let our workplace experts assess your current infrastructure and recommend 
              the best solutions for your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
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
