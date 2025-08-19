"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CybersecurityOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const features = [
    {
      icon: "🛡️",
      title: "Threat Intelligence",
      description: "Advanced threat detection using AI-powered analytics and real-time monitoring",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🔒",
      title: "Zero Trust Security",
      description: "Implement least-privilege access controls and continuous verification",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔄",
      title: "Incident Response",
      description: "24/7 security operations center with rapid threat containment",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📊",
      title: "Security Analytics",
      description: "Comprehensive security metrics and compliance reporting",
      color: "from-orange-500 to-red-500"
    }
  ];

  const securityLayers = [
    "Network Security",
    "Endpoint Protection", 
    "Application Security",
    "Data Encryption",
    "Identity Management",
    "Cloud Security"
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
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
              Comprehensive Security
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Multi-Layer Security
            <span className="block text-blue-600">Architecture</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Our cybersecurity framework provides comprehensive protection across all layers of your IT infrastructure. 
            From network perimeter to data center, we implement defense-in-depth strategies that adapt to evolving threats.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Layers Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Defense in Depth Strategy
            </h3>
            <div className="space-y-6">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{layer}</h4>
                    <p className="text-gray-600">Advanced protection mechanisms</p>
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
                  🎯
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Security Score</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Threat Prevention</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: "95%" } : {}}
                        transition={{ duration: 1, delay: 2.5 }}
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-green-600 font-semibold">95%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Response Time</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: "98%" } : {}}
                        transition={{ duration: 1, delay: 2.7 }}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-blue-600 font-semibold">98%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Compliance</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: "100%" } : {}}
                        transition={{ duration: 1, delay: 2.9 }}
                        className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-purple-600 font-semibold">100%</span>
                  </div>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Secure Your Infrastructure?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a comprehensive security assessment and discover how our multi-layer approach 
              can protect your organization from evolving cyber threats.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Security Assessment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
