"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CybersecurityPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const partners = [
    {
      name: "CrowdStrike",
      logo: "🦅",
      description: "Next-generation endpoint protection with AI-powered threat detection",
      category: "Endpoint Security",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Palo Alto Networks",
      logo: "🛡️",
      description: "Advanced firewall and network security solutions",
      category: "Network Security",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Microsoft Security",
      logo: "🔷",
      description: "Comprehensive security suite for modern workplaces",
      category: "Cloud Security",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Cisco Security",
      logo: "🌐",
      description: "Integrated security architecture for enterprise networks",
      category: "Network Security",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Fortinet",
      logo: "🏰",
      description: "Unified threat management and security fabric",
      category: "Unified Security",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Trend Micro",
      logo: "🔄",
      description: "Cloud-native security and threat defense",
      category: "Cloud Security",
      color: "from-teal-500 to-green-500"
    }
  ];

  const certifications = [
    {
      name: "CISSP",
      description: "Certified Information Systems Security Professional",
      icon: "🔐"
    },
    {
      name: "CISM",
      description: "Certified Information Security Manager",
      icon: "📊"
    },
    {
      name: "CEH",
      description: "Certified Ethical Hacker",
      icon: "🕵️"
    },
    {
      name: "CompTIA Security+",
      description: "Industry-recognized security certification",
      icon: "🛡️"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
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
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Strategic Partnerships
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted Technology
            <span className="block text-blue-600">Partners</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We partner with industry-leading cybersecurity vendors to deliver comprehensive 
            protection solutions that integrate seamlessly with your existing infrastructure.
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                    {partner.category}
                  </span>
                </div>
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {partner.logo}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {partner.name}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {partner.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-6 py-3 bg-gradient-to-r ${partner.color} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Certified Security Experts
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team holds industry-recognized cybersecurity certifications, ensuring 
                you receive expert guidance and implementation support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                    {cert.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Partner with Us?
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: "🤝",
                  title: "Strategic Relationships",
                  description: "Long-term partnerships with leading vendors for optimal pricing and support"
                },
                {
                  icon: "🔧",
                  title: "Expert Implementation",
                  description: "Certified professionals ensure proper deployment and configuration"
                },
                {
                  icon: "📚",
                  title: "Training & Support",
                  description: "Comprehensive training programs for your team"
                },
                {
                  icon: "🔄",
                  title: "Ongoing Optimization",
                  description: "Continuous monitoring and optimization of your security solutions"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mr-4 mt-1 flex-shrink-0 shadow-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
                  🏆
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Partnership Excellence</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Vendor Partners</span>
                  <span className="text-blue-600 font-semibold text-lg">25+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Years of Partnership</span>
                  <span className="text-purple-600 font-semibold text-lg">15+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Certified Engineers</span>
                  <span className="text-green-600 font-semibold text-lg">50+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Customer Satisfaction</span>
                  <span className="text-orange-600 font-semibold text-lg">98%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Leverage Our Partnerships?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get access to enterprise-grade cybersecurity solutions at competitive pricing 
              with our expert implementation and support services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explore Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full text-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Schedule Meeting
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
