"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CybersecuritySolutions() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const solutions = [
    {
      category: "Network Security",
      icon: "🌐",
      title: "Next-Generation Firewall",
      description: "Advanced firewall protection with deep packet inspection and threat intelligence",
      features: ["Intrusion Prevention", "Application Control", "SSL Inspection"],
      color: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      category: "Endpoint Protection",
      icon: "💻",
      title: "Advanced Endpoint Security",
      description: "Comprehensive endpoint protection with behavioral analysis and machine learning",
      features: ["Malware Detection", "Device Control", "Data Loss Prevention"],
      color: "from-green-500 to-emerald-500",
      delay: 0.4
    },
    {
      category: "Cloud Security",
      icon: "☁️",
      title: "Cloud Access Security Broker",
      description: "Secure cloud applications and data with comprehensive visibility and control",
      features: ["Cloud Monitoring", "Data Protection", "Compliance Management"],
      color: "from-purple-500 to-pink-500",
      delay: 0.6
    },
    {
      category: "Identity Management",
      icon: "🔐",
      title: "Zero Trust Identity Platform",
      description: "Implement zero trust security with continuous verification and least privilege access",
      features: ["Multi-Factor Auth", "Single Sign-On", "Privileged Access"],
      color: "from-orange-500 to-red-500",
      delay: 0.8
    },
    {
      category: "Data Protection",
      icon: "📊",
      title: "Data Loss Prevention",
      description: "Protect sensitive data with advanced encryption and access controls",
      features: ["Data Encryption", "Access Control", "Audit Logging"],
      color: "from-indigo-500 to-blue-500",
      delay: 1.0
    },
    {
      category: "Threat Intelligence",
      icon: "🎯",
      title: "AI-Powered Threat Hunting",
      description: "Proactive threat detection using artificial intelligence and machine learning",
      features: ["Behavioral Analysis", "Threat Correlation", "Automated Response"],
      color: "from-teal-500 to-green-500",
      delay: 1.2
    }
  ];

  const benefits = [
    {
      icon: "🚀",
      title: "Reduced Risk",
      description: "Comprehensive protection reduces security incidents by up to 95%"
    },
    {
      icon: "💰",
      title: "Cost Savings",
      description: "Prevent costly data breaches and compliance violations"
    },
    {
      icon: "⚡",
      title: "Faster Response",
      description: "Automated threat detection and response in under 30 seconds"
    },
    {
      icon: "📈",
      title: "Business Continuity",
      description: "Maintain operations even during security incidents"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 text-blue-400 opacity-20 text-6xl"
        >
          🔒
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-40 right-32 text-green-400 opacity-20 text-5xl"
        >
          🛡️
        </motion.div>
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
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Enterprise Solutions
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Advanced Cybersecurity
            <span className="block text-blue-400">Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Our comprehensive cybersecurity solutions provide enterprise-grade protection across all 
            attack vectors, ensuring your organization stays secure in an ever-evolving threat landscape.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: solution.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {solution.category}
                  </span>
                </div>
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {solution.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-blue-400 transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 text-center leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {solution.description}
                </p>

                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: solution.delay + 0.1 + featureIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Why Choose Our Solutions?
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cybersecurity solutions deliver measurable results and provide the foundation 
              for a robust security posture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-20"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Powered by Leading Technologies
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions integrate with industry-leading security platforms and technologies 
                to provide comprehensive protection.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "CrowdStrike", logo: "🦅" },
                { name: "Palo Alto", logo: "🛡️" },
                { name: "Microsoft", logo: "🔷" },
                { name: "Cisco", logo: "🌐" },
                { name: "Fortinet", logo: "🏰" },
                { name: "Trend Micro", logo: "🔄" },
                { name: "Symantec", logo: "🔒" },
                { name: "McAfee", logo: "🟢" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{tech.logo}</div>
                  <div className="text-sm font-medium text-gray-300">{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Security?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover how our advanced cybersecurity solutions can protect your organization 
              and give you peace of mind in today's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Solution Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full text-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
