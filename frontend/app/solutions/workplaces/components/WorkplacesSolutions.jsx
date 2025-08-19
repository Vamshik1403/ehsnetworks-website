"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WorkplacesSolutions() {
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
      category: "Collaboration",
      icon: "🤝",
      title: "Microsoft Teams",
      description: "Unified communication and collaboration platform for modern teams",
      features: ["Video conferencing", "Team chat", "File sharing", "App integration"],
      color: "from-blue-500 to-blue-600",
      delay: 0.2
    },
    {
      category: "Productivity",
      icon: "📊",
      title: "Microsoft 365 Apps",
      description: "Complete office suite with cloud-based collaboration and AI features",
      features: ["Word, Excel, PowerPoint", "OneDrive storage", "Real-time collaboration", "AI assistance"],
      color: "from-green-500 to-green-600",
      delay: 0.4
    },
    {
      category: "Content Management",
      icon: "📁",
      title: "SharePoint Online",
      description: "Enterprise content management and intranet platform",
      features: ["Document libraries", "Team sites", "Workflows", "Search capabilities"],
      color: "from-purple-500 to-purple-600",
      delay: 0.6
    },
    {
      category: "Identity & Security",
      icon: "🔐",
      title: "Azure Active Directory",
      description: "Cloud-based identity and access management service",
      features: ["Single sign-on", "Multi-factor auth", "Conditional access", "Identity protection"],
      color: "from-orange-500 to-orange-600",
      delay: 0.8
    },
    {
      category: "Device Management",
      icon: "📱",
      title: "Microsoft Intune",
      description: "Cloud-based mobile device and application management",
      features: ["Device enrollment", "Policy management", "App deployment", "Security compliance"],
      color: "from-red-500 to-red-600",
      delay: 1.0
    },
    {
      category: "Analytics",
      icon: "📈",
      title: "Power BI",
      description: "Business intelligence and data visualization platform",
      features: ["Data connectivity", "Interactive reports", "Real-time dashboards", "AI insights"],
      color: "from-indigo-500 to-indigo-600",
      delay: 1.2
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
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
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-400/30">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              Microsoft Solutions
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Workplace
            <span className="block text-purple-400">Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Our comprehensive workplace solutions leverage Microsoft's powerful ecosystem to 
            create seamless, productive, and secure work environments for modern organizations.
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-400/30">
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
                
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-purple-400 transition-colors duration-300">
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
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Implement Microsoft Solutions?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let our Microsoft experts help you deploy and optimize these powerful 
              workplace solutions for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
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
